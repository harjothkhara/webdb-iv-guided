// bringing in knex and configure knex to know how to connect to our database - 
// stuff we use to have inside of index or router, we going to extract it out here

//from this file we're going to export a configured version of knex,
//that i can use anywhere

const knex = require('knex');

const knexConfig = require('../knexfile.js'); // { development }

const db = knex(knexConfig.development) //which config key am i going to pick

module.exports = db;

//if the way we connect to the database changes in the future we only need to change this file
//if you want to talk to the database, talk to this file