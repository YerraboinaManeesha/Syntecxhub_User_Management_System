const express = require('express');
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

const basicAuth = require('../middleware/authMiddleware');

const router = express.Router();

// Basic Auth protects every route below this line
router.use(basicAuth);

router.route('/')
  .post(createUser)
  .get(getUsers);

router.route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;