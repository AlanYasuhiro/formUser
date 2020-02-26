const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();


router.get('/user', userController.postAddUser);
// router.post('/user', userController.postAddUser);

router.get('/listUser', userController.getUser);

module.exports = router;