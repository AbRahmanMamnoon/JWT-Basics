const router = require('express').Router();
const mainController = require('../controllers/mainController');
const authMiddleware = require('../controllers/authMiddleware');

router.route('/dashboard').get(authMiddleware, mainController.dashboard);
router.route('/login').post(mainController.login);

module.exports = router;