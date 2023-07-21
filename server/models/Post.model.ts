import { DataTypes, type Model, type Optional } from 'sequelize';
import { sequelize } from '.';
// import User from './User.model';

interface PostAttributes {
  id: number
  title: string
  body: string
  userId: number
}

interface PostCreationAttributes
  extends Optional<PostAttributes, 'id'> {}

interface PostInstance
  extends Model<PostAttributes, PostCreationAttributes>,
  PostAttributes {
  createdAt?: Date
  updatedAt?: Date
}

const Post = sequelize.define<PostInstance>(
  'Post',
  {
    id: {
      allowNull: true,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true
    },
    title: {
      allowNull: true,
      type: DataTypes.TEXT
    },
    body: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    userId: {
      allowNull: true,
      type: DataTypes.INTEGER
    }
  }
);

// Post.belongsTo(User, {
//   foreignKey: 'userId',
//   as: 'author'
// });

export default Post;
