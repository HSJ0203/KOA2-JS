/**
 * Create Mysql connection pool
 */
const knex = require("knex")
const {config} = require("../config/app.config");
const db = knex(config.SQL);

module.exports = db
