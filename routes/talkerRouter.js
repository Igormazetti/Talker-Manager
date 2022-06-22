const router = require('express').Router();
const middleware = require('../middlewares/index');
const { readContentFile, writeContentFile, reWrite } = require('../services/readWrite');

const path = 'talker.json';

router.get('/', async (_req, res) => {
  const talkers = (await readContentFile(path)) || [];
  res.status(200).json(talkers);
});

router.get('/search', middleware.validateToken,
 async (req, res) => {
    const { q } = req.query;
    const talkers = await readContentFile(path);

    if (!q || q === '') return res.status(200).json(talkers);

    const findTalker = talkers.filter((talker) => 
    talker.name.toLowerCase().includes(q.toLowerCase()));

    return res.status(200).json(findTalker);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = await readContentFile(path);
  const findTalker = talkers.find((talker) => talker.id === Number(id));
  if (!findTalker) {
 return res
      .status(404)
      .json({ message: 'Pessoa palestrante não encontrada' }); 
}
  res.status(200).json(findTalker);
});

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