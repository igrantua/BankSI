const { Router } = require('express');
const {ideas, users, statuses, categories, targets, targetGroups, regions, comments } = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

// Ideas

router.post('/idea', ideas.createIdea);
router.get('/ideas', ideas.getAllIdeas);
router.get('/idea/:ideaId', ideas.getIdeaById); // not included categories etc
router.put('/idea/:ideaId', ideas.updateIdea);
router.delete('/idea/:ideaId', ideas.deleteIdea);

// Users

router.post('/user', users.createUser);
router.get('/users', users.getAllUsers);
router.get('/user/:userId', users.getUserById);
router.put('/user/:userId', users.updateUser);
router.delete('/user/:userId', users.deleteUser);

// Categories

router.post('/category', categories.createCategory);
router.get('/categories', categories.getAllCategories);
router.get('/category/:categoryId', categories.getCategoryById);
router.put('/category/:categoryId', categories.updateCategory);
router.delete('/category/:categoryId', categories.deleteCategory);

// Regions

router.post('/region', regions.createRegion);
router.get('/regions', regions.getAllRegions);
router.get('/region/:regionId', regions.getRegionById);
router.put('/region/:regionId', regions.updateRegion);
router.delete('/region/:regionId', regions.deleteRegion);

// Targets

router.post('/target', targets.createTarget);
router.get('/targets', targets.getAllTargets);
router.get('/target/:targetId', targets.getTargetById);
router.put('/target/:targetId', targets.updateTarget);
router.delete('/target/:targetId', targets.deleteTarget);

// TargetGroups

router.post('/targetGroup', targetGroups.createTargetGroup);
router.get('/targetGroups', targetGroups.getAllTargetGroups);
router.get('/targetGroup/:targetGroupId', targetGroups.getTargetGroupById);
router.put('/targetGroup/:targetGroupId', targetGroups.updateTargetGroup);
router.delete('/targetGroup/:targetGroupId', targetGroups.deleteTargetGroup);

// Statuses

router.post('/status', statuses.createStatus);
router.get('/statuses', statuses.getAllStatuses);
router.get('/status/:statusId', statuses.getStatusById);
router.put('/status/:statusId', statuses.updateStatus);
router.delete('/status/:statusId', statuses.deleteStatus);

// Comments

router.post('/comment', comments.createComment);
router.get('/comments', comments.getAllComments);
router.get('/comment/:commentId', comments.getCommentById);
router.put('/comment/:commentId', comments.updateComment);
router.delete('/comment/:commentId', comments.deleteComment);

module.exports = router;
