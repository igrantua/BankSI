const { Router } = require('express');
const {ideas, users, statuses, categories, targets, targetGroups, regions, comments, uploads} = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

// Ideas

router.post('/ideas', uploads.imageFile, ideas.createIdea);
router.get('/ideas', ideas.getAllIdeas);
router.get('/ideas/statuses/:statusId', ideas.getIdeasByStatus);
router.get('/ideas/users/:userId', ideas.getIdeasByUser);
router.get('/ideas/:ideaId', ideas.getIdeaById);
router.put('/ideas/:ideaId', uploads.imageFile, ideas.updateIdea);
router.delete('/ideas/:ideaId', ideas.deleteIdea);

// Users

router.post('/users', uploads.avatar, users.createUser);
router.get('/users', users.getAllUsers);
router.get('/users/:userId', users.getUserById);
router.put('/users/:userId', uploads.avatar, users.updateUser);
router.delete('/users/:userId', users.deleteUser);

// Categories

router.post('/categories', categories.createCategory);
router.get('/categories', categories.getAllCategories);
router.get('/categories/:categoryId', categories.getCategoryById);
router.put('/categories/:categoryId', categories.updateCategory);
router.delete('/categories/:categoryId', categories.deleteCategory);

// Regions

router.post('/regions', regions.createRegion);
router.get('/regions', regions.getAllRegions);
router.get('/regions/:regionId', regions.getRegionById);
router.put('/regions/:regionId', regions.updateRegion);
router.delete('/regions/:regionId', regions.deleteRegion);

// Targets

router.post('/targets', targets.createTarget);
router.get('/targets', targets.getAllTargets);
router.get('/targets/:targetId', targets.getTargetById);
router.put('/targets/:targetId', targets.updateTarget);
router.delete('/targets/:targetId', targets.deleteTarget);

// TargetGroups

router.post('/targetGroups', targetGroups.createTargetGroup);
router.get('/targetGroups', targetGroups.getAllTargetGroups);
router.get('/targetGroups/:targetGroupId', targetGroups.getTargetGroupById);
router.put('/targetGroups/:targetGroupId', targetGroups.updateTargetGroup);
router.delete('/targetGroups/:targetGroupId', targetGroups.deleteTargetGroup);

// Statuses

router.post('/statuses', statuses.createStatus);
router.get('/statuses', statuses.getAllStatuses);
router.get('/statuses/:statusId', statuses.getStatusById);
router.put('/statuses/:statusId', statuses.updateStatus);
router.delete('/statuses/:statusId', statuses.deleteStatus);

// Comments

router.post('/comments', comments.createComment);
router.get('/comments', comments.getAllComments);
router.get('/comments/:commentId', comments.getCommentById);
router.put('/comments/:commentId', comments.updateComment);
router.delete('/comments/:commentId', comments.deleteComment);

module.exports = router;
