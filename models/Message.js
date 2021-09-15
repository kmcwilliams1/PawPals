const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Message extends Model {

}

Message.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        author_id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            references: {
                model:"user",
                key:"id",
            }
        },
        to_id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            references: {
                model:"user",
                key:"id",
            }
        }
        //id, author, to, content, image
    }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'message',
}
)
module.exports=Message 