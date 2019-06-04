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
        type: Sequelize.TEXT,
        allowNull: true
    },
    availability: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    occupation: {
        type: Sequelize.STRING,
        allowNull: null 
    }
})

const Skill = db.define('skill', {
    skill: Sequelize.STRING,
})

const Interest = db.define('interest', {
    interest: Sequelize.STRING,
})

User.beforeCreate(async (user, options) => {
    const hashedPassword = await bcrypt.hash(user.password, 12)
    user.password = hashedPassword
})

User.hasMany(Skill) 
User.hasMany(Interest)
Skill.belongsTo(User)
Interest.belongsTo(User)


module.exports = {
    User,
    Skill,
    Interest,
    db
}