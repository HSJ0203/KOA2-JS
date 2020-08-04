const db = require("../middleware/db");
const _ = require("lodash");
module.exports = {
  createTable(tableInfo) {
    db.schema.hasTable(tableInfo.name).then(async function (exists) {
      if (!exists) {
        await db.schema.createTable(tableInfo.name, function (table) {
          table.increments();
          for (let col of tableInfo.columns) {
            let obj = null;
            if (col.type == "string") {
              obj = table.string(col.name, col.length ? col.length : 255);
            }
            if (col.type == "integer") {
              obj = table.integer(col.name);
            }
            if (col.notNullable) obj.notNullable();
            if (col.unique) obj.unique();
            if (col.references) obj.references(col.references);
            if (col.defaultTo) obj.defaultTo(col.defaultTo);
          }
        });
      } else {
        let tempTableInfo = _.clone(tableInfo);
        for (let col of tempTableInfo.columns) {
          let hasColumn = await db.schema.hasColumn(tempTableInfo.name, col.name);
          if (!hasColumn) {
            await db.schema.table(tempTableInfo.name, (table) => {
              if (col.type == "string") {
                obj = table.string(col.name, col.length ? col.length : 255);
              }
              if (col.type == "integer") {
                obj = table.integer(col.name);
              }
              if (col.notNullable) obj.notNullable();
              if (col.unique) obj.unique();
              if (col.references) obj.references(col.references);
              if (col.defaultTo) obj.defaultTo(col.defaultTo);
            });
          } 
        }
        await db.schema.alterTable(tempTableInfo.name, async function (table) {
          for (let col of tempTableInfo.columns) {
            let obj = null;
            if (col.type == "string") {
              obj = table.string(col.name, col.length ? col.length : 255);
            }
            if (col.type == "integer") {
              obj = table.integer("age");
            }

            obj.alter();
            if (col.notNullable) obj.notNullable().alter();
            if (col.unique) obj.unique().alter();
            if (col.references) obj.references(col.references).alter();
            if (col.defaultTo) obj.defaultTo(col.defaultTo).alter();
          }
        });
      }
    });
  },
};
