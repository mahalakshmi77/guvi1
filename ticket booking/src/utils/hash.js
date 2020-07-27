const bcrypt = require("bcrypt");
const saltround = 10;

exports.hash = plaintext => {
  const hashvalue = bcrypt.hashSync(plaintext, saltround);
  return hashvalue;
};

exports.compareHash = (plaintext, exitingshash) => {
  const result = bcrypt.compareSync(plaintext, exitingshash);
  return result;
};
