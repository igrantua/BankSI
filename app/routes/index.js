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

// Users

router.post('/user', controllers.createUser);
router.get('/users', controllers.getAllUsers);
router.get('/user/:userId', controllers.getUserById);
router.put('/user/:userId', controllers.updateUser);
router.delete('/user/:userId', controllers.deleteUser);
// Categories

router.post('/category', controllers.createCategory);
router.get('/categories', controllers.getAllCategories);
router.get('/category/:categoryId', controllers.getCategoryById);
router.put('/category/:categoryId', controllers.updateCategory);
router.delete('/category/:categoryId', controllers.deleteCategory);

// Regions

router.post('/region', controllers.createRegion);
router.get('/regions', controllers.getAllRegions);
router.get('/region/:regionId', controllers.getRegionById);
router.put('/region/:regionId', controllers.updateRegion);
router.delete('/region/:regionId', controllers.deleteRegion);

// Targets

router.post('/target', controllers.createTarget);
router.get('/targets', controllers.getAllTargets);
router.get('/target/:targetId', controllers.getTargetById);
router.put('/target/:targetId', controllers.updateTarget);
router.delete('/target/:targetId', controllers.deleteTarget);

// TargetGroups

router.post('/targetGroup', controllers.createTargetGroup);
router.get('/targetGroups', controllers.getAllTargetGroups);
router.get('/targetGroup/:targetGroupId', controllers.getTargetGroupById);
router.put('/targetGroup/:targetGroupId', controllers.updateTargetGroup);
router.delete('/targetGroup/:targetGroupId', controllers.deleteTargetGroup);

// Statuses

router.post('/status', controllers.createStatus);
router.get('/statuses', controllers.getAllStatuses);
router.get('/status/:statusId', controllers.getStatusById);
router.put('/status/:statusId', controllers.updateStatus);
router.delete('/status/:statusId', controllers.deleteStatus);

// Comments

router.post('/comment', controllers.createComment);
router.get('/comments', controllers.getAllComments);
router.get('/comment/:commentId', controllers.getCommentById);
router.put('/comment/:commentId', controllers.updateComment);
router.delete('/comment/:commentId', controllers.deleteComment);

module.exports = router;
