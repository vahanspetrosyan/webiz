import { Router } from 'express';
import UserRoutes from './user.routes';
import PostRoutes from './post.routes';

const router = Router({ mergeParams: true });

router.use('/user', UserRoutes);
router.use('/post', PostRoutes);

export default router;
