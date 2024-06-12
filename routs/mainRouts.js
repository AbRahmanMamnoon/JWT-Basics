const router = require('express').Router();
const mainController = require('../controllers/mainController');

router.route('/dashboard').get(mainController.dashboard);
router.route('/login').post(mainController.login);

module.exports = router;