import { type Request, type Response } from 'express';
import { getPosts } from '../services/api.service';
import Post from '../models/Post.model';

class PostController {
  create = async (postData: {
    id: number
    userId: number
    title: string
    body: string
  }): Promise<any> => {
    try {
      return await Post.create(postData);
    } catch (e) {
      return e;
    }
  };

  deletePost = (req: Request, res: Response): void => {
    const id = req.params.id;
    if (id) {
      Post.destroy({
        where: { id }
      }).then(num => {
        if (num === 1) {
          res.status(200).send({
            message: 'Deleted'
          });
        } else {
          res.status(200).send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
        .catch(err => {
          res.status(400).send({
            message: err
          });
        });
    } else {
      res.status(400).send({
        message: 'No id specified'
      });
    }
  };

  getPosts = (req: Request, res: Response): void => {
    const id = Number(req.query.userId);
    if (id) {
      Post.findAll({
        attributes: ['id', 'title', 'body'],
        where: {
          userId: id
        }
      }).then(async (result) => {
        if (result.length > 0) {
          res.status(200).send({
            message: 'ok',
            data: result
          });
        } else {
          const importer = await this.importPosts(id);
          if (importer === 'ok') {
            Post.findAll({
              attributes: ['id', 'title', 'body'],
              where: {
                userId: id
              }
            }).then((result) => {
              res.status(200).send({
                message: 'ok',
                data: result
              });
            }, (err) => {
              res.status(400).send({
                message: err
              });
            });
          } else {
            res.status(400).send({
              message: importer
            });
          }
        }
      }, (err) => {
        res.status(400).send({
          message: err
        });
      });
    } else {
      res.status(400).send({
        message: 'No id specified'
      });
    }
  };

  importPosts = async (userId: number): Promise<any> => {
    try {
      const posts = await getPosts(userId);
      await Promise.all(posts.map(async (post: {
        id: number
        userId: number
        title: string
        body: string
      }) => {
        const userData = {
          id: post.id,
          title: post.title,
          body: post.body,
          userId
        };
        return await this.create(userData);
      }));
      return 'ok';
    } catch (e) {
      return e;
    }
  };
}

export default PostController;
