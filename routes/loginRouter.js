const router = require('express').Router();
const middleware = require('../middlewares/index');
const httpStatus = require('../helpers/httpsStatusCode');

router.post('/', middleware.loginValidation, middleware.tokenMiddleware,
 async (req, res) => {
    const { token } = req.user;
    res.status(httpStatus.OK).json({ token });
});

module.exports = router;