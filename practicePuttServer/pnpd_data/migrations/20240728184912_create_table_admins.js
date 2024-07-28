
      import { MigrationDao } from "pinniped";

      export async function up(knex) {
        const dao = new MigrationDao(knex);
        await dao.createTable({"id":"8b5a020f021c57","type":"auth","name":"admins","columns":[],"getAllRule":"public","getOneRule":"public","createRule":"public","deleteRule":"public","updateRule":"public","options":{}});
        await dao.addTableMetaData({"id":"8b5a020f021c57","type":"auth","name":"admins","columns":"[]","getAllRule":"public","getOneRule":"public","createRule":"public","deleteRule":"public","updateRule":"public","options":"{}"});
      }
      export async function down(knex) {
        const dao = new MigrationDao(knex);
        await dao.dropTable("admins");
        await dao.deleteTableMetaData("8b5a020f021c57");
      }
     