const express = require('express');
const router = express.Router();
const storeCotroller = require('../controllers/storeController');

// Do work here
router.get('/', storeCotroller.homePage);
router.get('/add', storeCotroller.addStore);
router.post('/add', storeCotroller.createStore);

module.exports = router;
