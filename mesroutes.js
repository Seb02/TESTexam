let express = require('express');
//déclare l'objet router
let router = express.Router();
let session = require('express-session');
var homeController = require('./controllers/homeController');
var connectController = require('./controllers/connectController');


router.get('/', homeController.showHome);
router.post('/connectPage', connectController.pageConnection);

router.post('/connect', connectController.connectSession);
router.post('/mailConfirm', connectController.addMail);

module.exports = router;

