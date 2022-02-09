'use strict'
const express = require('express');
const router = express.Router();
const controllers = require('../controllers/app_controller');

//GET
router.get('/', controllers.get_login);

//POST
router.post('/', controllers.post_login);

//API POST
router.post('/api/aktivasi', controllers.post_aktivasi);

module.exports = {
    routes:router
}