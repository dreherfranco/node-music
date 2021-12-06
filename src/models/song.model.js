/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const songSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String
  },
  physicalPath: {
    type: String,
    required: true,
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

songSchema.plugin(toJSON);
songSchema.plugin(paginate);

songSchema.statics.isMP3 = function(fileExt){
    return fileExt === 'mp3';
};



const Song = mongoose.model('Song', songSchema);

module.exports = Song;
