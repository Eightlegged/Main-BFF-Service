import express from 'express';

const router = express.Router();


router.post('/login', (req, res) => {
    return res.json({
        success: true
    });
});

router.get('/logout', (req, res) => {
    return res.json({
        success: true
    });
});

export default router;
