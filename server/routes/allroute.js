const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const sessions = require('express-session');

const WebViewController = require('../controller/WebRenderController');
const PostController = require('../controller/PostController');



// CLIENT SIDE ROUTE//
router.get('/', WebViewController.HomePageView); // HOMEPAGE
router.get('/panchang', WebViewController.PanchangPageView); // HOMEPAGE
router.get('/test', WebViewController.testPageView); // HOMEPAGE






// POST API //
router.post('/api/v1/post/panchang', PostController.pachangPost);
router.post('/api/v1/post/test', PostController.testPost);













module.exports = router;
