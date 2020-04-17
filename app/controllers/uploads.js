const multer = require('multer');

const storage = multer.memoryStorage();
const avatar = multer({ storage }).single('avatar');
const imageFile = multer({ storage }).fields([
  { name: 'image', maxCount: 1 },
  { name: 'file', maxCount: 1 },
]);

module.exports = { avatar, imageFile };
