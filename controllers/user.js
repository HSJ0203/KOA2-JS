const db = require("../middleware/db");

module.exports = {
    async get(ctx) {
        const { body } = ctx.request;
        console.log(body);
        let user = await db('user').where({id:1})
        console.log(user);
    },
  
    async post(ctx) {

    },
  
    async put(ctx) {
        
    },
  
    async login(ctx) {
     
    },
  }
  