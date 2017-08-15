import express from 'express';
import user from './user';
import meeting from './meeting';

const router = express.Router();

router.use('/user', user);

router.use('/meeting', meeting);


export default router;
