const router = require('express').Router();
const middleware = require('../middlewares/index');
const { readContentFile, writeContentFile, reWrite } = require('../helpers/readWrite');
const talkersController = require('../controllers/talkersController');

const path = 'talker.json';

router.get('/', talkersController.getAll);

router.get('/search', middleware.validateToken, talkersController.getByName);

router.get('/:id', talkersController.getById);

router.post('/', middleware.validateToken, middleware.talkerCreationValidate,
 async (req, res) => {
    const idNumber = await readContentFile(path) || [];
    const newTalker = {
      id: idNumber.length + 1,
      ...req.body,
    };
    const talker = await writeContentFile(path, newTalker);
    return res.status(201).json(talker);
  });

router.put('/:id', middleware.validateToken, middleware.talkerCreationValidate,
 async (req, res) => {
    const { id: userId } = req.params;
    const currSpeakers = await readContentFile(path) || [];
    const updateSpeakers = { ...req.body };
    const findSpeaker = currSpeakers.find(
      (speaker) => speaker.id === Number(userId),
    );
    Object.assign(findSpeaker, updateSpeakers);
    const speaker = await writeContentFile(path, findSpeaker);
    res.status(200).json(speaker);
  });

router.delete('/:id', middleware.validateToken,
 async (req, res) => {
    const { id: userId } = req.params;
    const currSpeakers = await readContentFile(path) || [];
    const newSpeakers = currSpeakers.filter((speaker) => speaker.id !== Number(userId));
    await reWrite(path, newSpeakers);
    res.status(204).end();
});

module.exports = router;
