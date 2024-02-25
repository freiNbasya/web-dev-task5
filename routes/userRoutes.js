const router = require('express').Router();

const userController = require('../controllers/userController');
router.get('/id/:id', userController.getUserByIdController);

//hw10
router.get('/', userController.getAllController);
router.get('/new', userController.getUserFormController);
router.post('/', userController.postUserController);
router.post('/deleteUser/:id', userController.deleteUserController);
router.get('/updateUser/:id', userController.updateUserFormController);
router.post('/updateUser/:id', userController.postUpdateUserController);

module.exports = router;