import express from 'express';

const router = express.Router();

router.get('/session', (req, res) => {
  console.log(req.session);
  return res.json({
    session: req.session,
    isLoggedIn: (req.session.isLoggedIn ? req.session.isLoggedIn : false ),
    email: (req.session.email ? req.session.email : '')
  })
})

router.post('/login', (req, res) => {
    console.log(req.body);
    req.session.isLoggedIn = true;
    req.session.email = req.body.email;
    console.log(req.session);
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
