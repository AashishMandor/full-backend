import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Teacher = sequelize.define('Teacher', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: { // Add password field for authentication
    type: DataTypes.STRING,
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

// Sync model with database
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Teacher table created or updated.');
  })
  .catch((error) => {
    console.error('Error creating or updating Teacher table:', error);
  });

export default Teacher;
