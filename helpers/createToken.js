const CryptoJS = require('crypto-js');

const generateToken = (message, secrety) => {
  const crypto = CryptoJS.AES.encrypt(message, secrety).toString();
  const token = crypto.substring(17, 1);
  return token;
};

module.exports = generateToken;
