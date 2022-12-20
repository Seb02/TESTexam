let express = require('express');
//déclare l'objet router
let router = express.Router();
let session = require('express-session');
var homeController = require('./controllers/homeController');



router.get('/', homeController.showHome);

module.exports = router;

