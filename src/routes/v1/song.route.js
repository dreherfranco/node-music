const express = require('express');
const songController = require('../../controllers/song.controller');
const multiparty = require('../../middlewares/multiparty');

const router = express.Router();

router.route('/').post(multiparty, songController.createSong);

module.exports = router;
