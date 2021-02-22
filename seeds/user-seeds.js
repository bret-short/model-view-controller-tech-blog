const { User } = require('../models');

const userData = [{
        username: 'Yoda',
        password: 'yoda1234'

    },
    {
        username: 'Obiwan',
        password: 'obiwan12'
    },
    {
        username: 'Vader',
        password: 'vader123'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;