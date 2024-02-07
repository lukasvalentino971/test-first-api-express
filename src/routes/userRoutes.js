const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const authorizationMiddleware = require('../middlewares/authMiddleware');

router.get('/', controller.getUsers);

router.get('/:id', controller.getUsers);

// POST create a new user
router.post('/', controller.createUser);

// PUT update an existing user
router.put('/:id', controller.updateUser);

// DELETE delete a user
router.delete('/:id', controller.destroyUser);

// GET 
//router.get('/', authorizationMiddleware(['user']), controller.getUsers);

module.exports = router;