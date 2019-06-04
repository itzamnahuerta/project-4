const { Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');

const db = new Sequelize({
    database: 'skillshare_project_db',
    dialect: 'postgres',
    define: {
        underscored: true
    },
})

const User = db.define('user', {
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    neighborhood: {
        type: Sequelize.STRING,
        allowNull: false
    },
    borough: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bio : {
        type: Sequelize.STRING,
        allowNull: true
    },
    availability: {
        type: Sequelize.STRING,
        allowNull: false
    },
    occupation: {
        type: Sequelize.STRING,
        allowNull: null
    }

})

const Skills = db.define('skills', {
    skill: Sequelize.STRING,
    allowNull: false
})

const Interests = db.define('interests', {
    interest: Sequelize.STRING,
    allowNull: false
})

User.beforeCreate(async (user, options) => {
    const hashedPassword = await bcrypt.hash(user.password, 12)
    user.password = hashedPassword
})

User.hasMany(Skills) 
Skills.belongsTo(User)

User.hasMany(Interests)
Interests.belongsTo(User)


module.exports = {
    User,
    Skills,
    Interests,
    db
}