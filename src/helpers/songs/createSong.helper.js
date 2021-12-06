const { User } = require('../../models');

const pushSongInUserCollection = async (userId, songId) => {
  User.findByIdAndUpdate(
    { _id: userId },
    {
      $push: { songs: songId },
    },
    { useFindAndModify: false }
  );
};
module.exports = pushSongInUserCollection;
