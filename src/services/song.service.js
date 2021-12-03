/* eslint-disable prettier/prettier */
const httpStatus = require('http-status');
const fs = require('fs');
const { Song } = require('../models');
const ApiError = require('../utils/ApiError');
const cutPath = require('../utils/cutPath');

const createSong = async (req) => {

  if (req.files) {
    const songBody = req.files.song;
    const filePath =songBody.path;
    const fileName = songBody.name;
    const fileExt = cutPath.getFileExtension(fileName);

    if (Song.isMP3(fileExt)) {
      const physicalPath = cutPath.getFileName(filePath);
      const song = new Song({ name: fileName, description: req.body.description, physicalPath});
      return Song.create(song);
    }

    fs.unlink(filePath, () => {});
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid song format');
  }
  throw new ApiError(httpStatus.BAD_REQUEST, 'Song is not exists');
};

module.exports = {
  createSong,
};
