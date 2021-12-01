const { Global } = require('./models');
const { Op } = require('sequelize');    // for operators

// Create 10 items
Global.create({
    rank: 1,
    song: 'Easy On Me',
    artist: 'Adele',
    plays: 57_260_673
}).try(createdGlobal => {
    console.log('New global hit:', createdGlobal);

})
