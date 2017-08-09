import express from 'express';

const router = express.Router();


router.post('/signUp', (req, res) => {
    return res.json({
        success: true
    });
});

export default router;
