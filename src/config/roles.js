const allRoles = {
  user: ['createSong'],
  admin: ['getUsers', 'manageUsers','createSong'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
