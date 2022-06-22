const router = require('express').Router();
const middleware = require('../middlewares/index');

router.post('/', middleware.loginValidation, middleware.tokenMiddleware,
 async (req, res) => {
    const { token } = req.user;
    res.status(200).json({ token });
});

module.exports = router;