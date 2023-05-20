const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const sessions = require('express-session');

const WebViewController = require('../controller/WebRenderController');



// CLIENT SIDE ROUTE//
router.get('/', WebViewController.HomePageView); // HOMEPAGE











module.exports = router;
