const express = require('express');
const songController = require('../../controllers/song.controller');
const multiparty = require('../../middlewares/multiparty');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const songValidation = require('../../validations/song.validation');

const router = express.Router();

router.route('/').post([auth('createSong'), multiparty, validate(songValidation.createSong)], songController.createSong);

module.exports = router;
