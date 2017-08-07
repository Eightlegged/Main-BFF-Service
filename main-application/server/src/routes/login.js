import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body.contents);
    return res.json({
        success: true
    });
});

router.get('/', (req, res) => {
    return res.json({
        success: true
    });
});

export default router;
