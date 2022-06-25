const router = require('express').Router();
const middleware = require('../middlewares/index');
const talkersController = require('../controllers/talkersController');

router.get('/', talkersController.getAll);

router.get('/search', middleware.validateToken, talkersController.getByName);

router.get('/:id', talkersController.getById);

router.post('/', middleware.validateToken, talkersController.add);

router.put('/:id', middleware.validateToken, middleware.talkerCreationValidate,
 talkersController.update);

router.delete('/:id', middleware.validateToken, talkersController.exclude);

module.exports = router;
