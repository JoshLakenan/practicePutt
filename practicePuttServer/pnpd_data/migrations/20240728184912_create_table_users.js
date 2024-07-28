
      import { MigrationDao } from "pinniped";

      export async function up(knex) {
        const dao = new MigrationDao(knex);
        await dao.createTable({"id":"b77c9fde6a4b85","type":"auth","name":"users","columns":[],"getAllRule":"public","getOneRule":"public","createRule":"public","deleteRule":"public","updateRule":"public","options":{"minUsernameLength":4,"minPasswordLength":8,"pattern":"^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$"}});
        await dao.addTableMetaData({"id":"b77c9fde6a4b85","type":"auth","name":"users","columns":"[]","getAllRule":"public","getOneRule":"public","createRule":"public","deleteRule":"public","updateRule":"public","options":"{\"minUsernameLength\":4,\"minPasswordLength\":8,\"pattern\":\"^(?=.*[a-zA-Z])(?=.*\\\\d)(?=.*[@$!%*?&])[A-Za-z\\\\d@$!%*?&]+$\"}"});
      }
      export async function down(knex) {
        const dao = new MigrationDao(knex);
        await dao.dropTable("users");
        await dao.deleteTableMetaData("b77c9fde6a4b85");
      }
     