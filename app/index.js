require('dotenv').config();

const server = require('./server');

const PORT = process.env.PORT || 3300;

server.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));

// (function init() {
//   try {
//     server.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));
//   } catch (err) {
//     console.error('Init failed:', err.stack);
//     process.exit(1); // eslint-disable-line no-process-exit
//   }
// })()

