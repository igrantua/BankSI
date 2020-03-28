const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

router.post('/ideas', controllers.createIdea);
// Categories


router.post('/category', controllers.createCategory);
router.get('/categories', controllers.getAllCategories);
router.get('/category/:categoryId', controllers.getCategoryById);

router.put('/category/:categoryId', controllers.updateCategory);

router.delete('/category/:categoryId', controllers.deleteCategory);

// router.put('/posts/:postId', controllers.updatePost);
module.exports = router;
