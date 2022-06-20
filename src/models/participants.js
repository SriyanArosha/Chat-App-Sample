const { Sequelize } = require('sequelize');

const Participants = sequelize.define('participants', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement:true,
    primaryKey: true
  },
  room_id: {
    type: Sequelize.STRING(300),
    allowNull: false
  },
  user_id: {
    type: Sequelize.STRING(300),
    allowNull: false
  }
});

module.exports = Participants;