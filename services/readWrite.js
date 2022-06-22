const fs = require('fs').promises;

const readContentFile = async (path) => {
  try {
    const content = await fs.readFile(path, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.log(error.message);
  }
};

const writeContentFile = async (path, content) => {
  try {
    // atribui conteudo já existente do arquivo de dados à constante
    const initialArr = (await readContentFile(path)) || [];
    // adiciona novo conteúdo
    initialArr.push(content);
    // reescreve o arquivo
    await fs.writeFile(path, JSON.stringify(initialArr));
    return content;
  } catch (error) {
    console.log(error.message);
  }
};

const reWrite = async (path, content) => {
  try {
    await fs.writeFile(path, JSON.stringify(content));
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { readContentFile, writeContentFile, reWrite };
