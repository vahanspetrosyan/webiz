import { DataTypes, type Model, type Optional } from 'sequelize';
import { sequelize } from '.';
import Post from './Post.model';

interface UserAttributes {
  id: number
  fullName: string
  email: string
  address: string
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

interface UserInstance extends Model<UserAttributes, UserCreationAttributes>,
  UserAttributes {
  createdAt?: Date
  updatedAt?: Date
}

const User = sequelize.define<UserInstance>(
  'User',
  {
    id: {
      allowNull: true,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true
    },
    fullName: {
      allowNull: true,
      type: DataTypes.TEXT
    },
    address: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    email: {
      allowNull: true,
      type: DataTypes.TEXT
    }
  }
);
// User.hasMany(Post, {
//   sourceKey: 'id',
//   foreignKey: 'authorId',
//   as: 'posts'
// });
Post.belongsTo(User, {
  foreignKey: 'userId',
  as: 'author'
});

export default User;
