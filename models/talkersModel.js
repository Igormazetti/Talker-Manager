const {
  readContentFile,
  writeContentFile,
  reWrite,
} = require('../helpers/readWrite');

const path = 'talker.json';

const getAll = async () => {
  const talkers = (await readContentFile(path));
  return talkers;
};

const getByName = async (query) => {
  const talkers = await readContentFile(path);

  if (!query || query === '') return talkers;

  const findTalker = talkers.filter((talker) => 
  talker.name.toLowerCase().includes(query.toLowerCase()));

  return findTalker;
};

const getById = async (id) => {
  const talkers = await readContentFile(path);
  const findTalker = talkers.find((talker) => talker.id === Number(id));
  return findTalker;
};

const add = async (speakerData) => {
  const idNumber = await readContentFile(path);
  const newSpeaker = {
    id: idNumber.length + 1,
    ...speakerData,
  };
  const speaker = await writeContentFile(path, newSpeaker);
  return speaker;
};

const update = async (speakerId, speakerData) => {
  const obj = { id: Number(speakerId), ...speakerData };
  const currSpeakers = await readContentFile(path);
  const findSpeaker = currSpeakers.filter(
    (speaker) => speaker.id !== Number(speakerId),
    );
    const newArr = [...findSpeaker, obj];
    const speaker = await reWrite(path, newArr);
    return speaker;
};

const exclude = async (speakerId) => {
  const { id } = speakerId;
  const currSpeakers = await readContentFile(path);
  const deleted = currSpeakers.filter((speaker) => speaker.id !== Number(id));
  await reWrite(path, deleted);
};

module.exports = {
  getAll,
  getByName,
  getById,
  add,
  update,
  exclude,
};