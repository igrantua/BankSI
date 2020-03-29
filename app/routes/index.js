const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))
// Ideas

router.post('/idea', controllers.createIdea);
router.get('/ideas', controllers.getAllIdeas);
router.get('/idea/:ideaId', controllers.getIdeaById); // not included categories etc
router.put('/idea/:ideaId', controllers.updateIdea);
router.delete('/idea/:ideaId', controllers.deleteIdea);

// Categories

router.post('/category', controllers.createCategory);
router.get('/categories', controllers.getAllCategories);
router.get('/category/:categoryId', controllers.getCategoryById);
router.put('/category/:categoryId', controllers.updateCategory);
router.delete('/category/:categoryId', controllers.deleteCategory);

module.exports = router;
