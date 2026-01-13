module.exports = (sequelize , DataTypes) => {
    const comments = sequelize.define("comments" , {
       
        commentBody: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false, // Ensure it's required
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        }
        

    });
    return comments;
};