const router = require('express').Router();

const userController = require('../controllers/userController');

router.get('/', userController.getAllController);
router.get('/id/:id', userController.getUserByIdController);
router.get('/new', userController.getUserFormController);
router.post('/', userController.postUserController);

module.exports = router;