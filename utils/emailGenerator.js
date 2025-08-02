exports.generateRandomEmail = () => {
  const random = Math.floor(Math.random() * 1000);
  return `test${random}@yopmail.com`;
};
