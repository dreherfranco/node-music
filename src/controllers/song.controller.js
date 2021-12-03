const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { songService } = require('../services');

const createSong = catchAsync(async (req, res) => {
  const song = await songService.createSong(req);
  res.status(httpStatus.CREATED).send(song);
});

module.exports = {
  createSong,
};
