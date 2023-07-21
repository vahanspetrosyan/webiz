import User from '../models/User.model';
import { type Request, type Response } from 'express';
import { getUsers } from '../services/api.service';
import Post from '../models/Post.model';

class UserController {
  create = async (userData: {
    id: number
    fullName: string
    email: string
    address: string
  }): Promise<any> => {
    try {
      return await User.create(userData);
    } catch (e) {
      return e;
    }
  };

  getAllUsers = (req: Request, res: Response): void => {
    User.findAll({ attributes: ['id', 'fullName', 'email', 'address'] }).then((result) => {
      res.status(200).send({
        message: 'ok',
        data: result
      });
    }, (err) => {
      res.status(400).send({
        message: err
      });
    });
  };

  importUsers = (req: Request, res: Response): void => {
    getUsers().then(async (users) => {
      await User.destroy({
        where: {},
        truncate: false
      });
      await Post.destroy({
        where: {},
        truncate: false
      });
      Promise.all(users.map(async (user: {
        id: number
        name: string
        email: string
        address: {
          street: string
          suite: string
          zipcode: string
        }
      }) => {
        const userData = {
          id: user.id,
          fullName: user.name,
          email: user.email,
          address: `${user.address.street}, ${user.address.suite}, ${user.address.zipcode}`
        };
        return await this.create(userData);
      })).then((r) => {
        res.status(200).send({
          message: 'ok'
        });
      }, (error) => {
        res.status(400).send({
          message: error
        });
      });
    }, (error) => {
      res.status(400).send({
        message: error
      });
    });
  };
}

export default UserController;
