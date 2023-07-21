import { Router } from 'express';
import PostController from '../controllers/post.controller';

const postController = new PostController();

const post = Router();

post.get('/', postController.getPosts);
post.delete('/:id', postController.deletePost);

export default post;
