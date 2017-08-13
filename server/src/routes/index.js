import express from 'express';
import authentication from './authentication';
import register from './register';
import meeting from './meeting';

const router = express.Router();
router.use('/authentication', authentication);

router.use('/register', register);

router.use('/meeting', meeting);


export default router;
