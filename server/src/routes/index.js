import express from 'express';
import authentication from './authentication';
import register from './register'

const router = express.Router();
router.use('/authentication', authentication);

router.use('/register', register);

export default router;
