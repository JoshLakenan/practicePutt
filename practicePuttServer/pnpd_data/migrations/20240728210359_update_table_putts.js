
    import { MigrationDao } from "pinniped";

    export async function up(knex) {
      const oldTable = {"id":"a51f88d68fa115","type":"base","name":"putts","columns":[{"id":"6338da2390daf5","system":true,"name":"creator","type":"creator","required":0,"unique":0,"show":1,"options":{}},{"id":"fde862577f56c0","system":false,"name":"distance","type":"number","required":0,"unique":0,"show":1,"options":{"min":0,"max":1000}},{"id":"e79dd7ccb6a7d0","system":false,"name":"made","type":"bool","required":0,"unique":0,"show":1,"options":{}},{"id":"ade66358be9146","system":false,"name":"setID","type":"relation","required":1,"unique":0,"show":1,"options":{"tableId":"8e202f7c59a769","tableName":"sets","cascadeDelete":1}}],"getAllRule":"admin","getOneRule":"admin","createRule":"admin","deleteRule":"admin","updateRule":"admin","options":{}};
      const newTable = {"id":"a51f88d68fa115","type":"base","name":"putts","columns":[{"id":"6338da2390daf5","system":true,"name":"creator","type":"creator","required":0,"unique":0,"show":1,"options":{}},{"id":"fde862577f56c0","system":false,"name":"distance","type":"number","required":0,"unique":0,"show":1,"options":{"min":0,"max":1000}},{"id":"e79dd7ccb6a7d0","system":false,"name":"made","type":"bool","required":0,"unique":0,"show":1,"options":{}},{"id":"ade66358be9146","system":false,"name":"set_id","type":"relation","required":1,"unique":0,"show":1,"options":{"tableId":"8e202f7c59a769","tableName":"sets","cascadeDelete":1}}],"getAllRule":"admin","getOneRule":"admin","createRule":"admin","deleteRule":"admin","updateRule":"admin","options":{}};
      const oldColumns = [{"id":"6338da2390daf5","system":true,"name":"creator","type":"creator","required":0,"unique":0,"show":1,"options":{}},{"id":"fde862577f56c0","system":false,"name":"distance","type":"number","required":0,"unique":0,"show":1,"options":{"min":0,"max":1000}},{"id":"e79dd7ccb6a7d0","system":false,"name":"made","type":"bool","required":0,"unique":0,"show":1,"options":{}},{"id":"ade66358be9146","system":false,"name":"setID","type":"relation","required":1,"unique":0,"show":1,"options":{"tableId":"8e202f7c59a769","tableName":"sets","cascadeDelete":1}}];
      const newColumns = [{"id":"6338da2390daf5","system":true,"name":"creator","type":"creator","required":0,"unique":0,"show":1,"options":{}},{"id":"fde862577f56c0","system":false,"name":"distance","type":"number","required":0,"unique":0,"show":1,"options":{"min":0,"max":1000}},{"id":"e79dd7ccb6a7d0","system":false,"name":"made","type":"bool","required":0,"unique":0,"show":1,"options":{}},{"id":"ade66358be9146","system":false,"name":"set_id","type":"relation","required":1,"unique":0,"show":1,"options":{"tableId":"8e202f7c59a769","tableName":"sets","cascadeDelete":1}}];

      const dao = new MigrationDao(knex);

      // Delete Columns (Tested)
      for (let oldColumn of oldColumns) {
        if (newColumns.find((newColumn) => oldColumn.id === newColumn.id)) continue;
        await dao.dropColumn(oldTable.name, oldColumn.name);
      }

      // Add OR Rename Columns (Renaming Tested, Adding tested)
      for (let newColumn of newColumns) {
        let match = oldColumns.find((oldColumn) => oldColumn.id === newColumn.id);
        if (!match) {
          await dao.addColumn(oldTable.name, newColumn);
        }
        if (match && match.name !== newColumn.name) {
          await dao.renameColumn(oldTable.name, match.name, newColumn.name);
        }
      }

      // Rename Table (Tested)
      if (oldTable.name !== newTable.name) {
        await dao.renameTable(oldTable.name, newTable.name);
      }

      // sets the table meta to the new table
      await dao.updateTableMetaData({"id":"a51f88d68fa115","type":"base","name":"putts","columns":"[{\"id\":\"6338da2390daf5\",\"system\":true,\"name\":\"creator\",\"type\":\"creator\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{}},{\"id\":\"fde862577f56c0\",\"system\":false,\"name\":\"distance\",\"type\":\"number\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{\"min\":0,\"max\":1000}},{\"id\":\"e79dd7ccb6a7d0\",\"system\":false,\"name\":\"made\",\"type\":\"bool\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{}},{\"id\":\"ade66358be9146\",\"system\":false,\"name\":\"set_id\",\"type\":\"relation\",\"required\":1,\"unique\":0,\"show\":1,\"options\":{\"tableId\":\"8e202f7c59a769\",\"tableName\":\"sets\",\"cascadeDelete\":1}}]","getAllRule":"admin","getOneRule":"admin","createRule":"admin","deleteRule":"admin","updateRule":"admin","options":"{}"})
    }

    export async function down(knex) {
      //Run the exact same logic as the up method, but with new and old variables
      //swapped..
      const oldTable = {"id":"a51f88d68fa115","type":"base","name":"putts","columns":[{"id":"6338da2390daf5","system":true,"name":"creator","type":"creator","required":0,"unique":0,"show":1,"options":{}},{"id":"fde862577f56c0","system":false,"name":"distance","type":"number","required":0,"unique":0,"show":1,"options":{"min":0,"max":1000}},{"id":"e79dd7ccb6a7d0","system":false,"name":"made","type":"bool","required":0,"unique":0,"show":1,"options":{}},{"id":"ade66358be9146","system":false,"name":"set_id","type":"relation","required":1,"unique":0,"show":1,"options":{"tableId":"8e202f7c59a769","tableName":"sets","cascadeDelete":1}}],"getAllRule":"admin","getOneRule":"admin","createRule":"admin","deleteRule":"admin","updateRule":"admin","options":{}};
      const newTable = {"id":"a51f88d68fa115","type":"base","name":"putts","columns":[{"id":"6338da2390daf5","system":true,"name":"creator","type":"creator","required":0,"unique":0,"show":1,"options":{}},{"id":"fde862577f56c0","system":false,"name":"distance","type":"number","required":0,"unique":0,"show":1,"options":{"min":0,"max":1000}},{"id":"e79dd7ccb6a7d0","system":false,"name":"made","type":"bool","required":0,"unique":0,"show":1,"options":{}},{"id":"ade66358be9146","system":false,"name":"setID","type":"relation","required":1,"unique":0,"show":1,"options":{"tableId":"8e202f7c59a769","tableName":"sets","cascadeDelete":1}}],"getAllRule":"admin","getOneRule":"admin","createRule":"admin","deleteRule":"admin","updateRule":"admin","options":{}};
      const oldColumns = [{"id":"6338da2390daf5","system":true,"name":"creator","type":"creator","required":0,"unique":0,"show":1,"options":{}},{"id":"fde862577f56c0","system":false,"name":"distance","type":"number","required":0,"unique":0,"show":1,"options":{"min":0,"max":1000}},{"id":"e79dd7ccb6a7d0","system":false,"name":"made","type":"bool","required":0,"unique":0,"show":1,"options":{}},{"id":"ade66358be9146","system":false,"name":"set_id","type":"relation","required":1,"unique":0,"show":1,"options":{"tableId":"8e202f7c59a769","tableName":"sets","cascadeDelete":1}}];
      const newColumns = [{"id":"6338da2390daf5","system":true,"name":"creator","type":"creator","required":0,"unique":0,"show":1,"options":{}},{"id":"fde862577f56c0","system":false,"name":"distance","type":"number","required":0,"unique":0,"show":1,"options":{"min":0,"max":1000}},{"id":"e79dd7ccb6a7d0","system":false,"name":"made","type":"bool","required":0,"unique":0,"show":1,"options":{}},{"id":"ade66358be9146","system":false,"name":"setID","type":"relation","required":1,"unique":0,"show":1,"options":{"tableId":"8e202f7c59a769","tableName":"sets","cascadeDelete":1}}];

      const dao = new MigrationDao(knex);

      // Delete Columns
      for (let oldColumn of oldColumns) {
        if (newColumns.find((newColumn) => oldColumn.id === newColumn.id)) continue;
        await dao.dropColumn(oldTable.name, oldColumn.name);
      }

      // Add OR Rename Columns
      for (let newColumn of newColumns) {
        let match = oldColumns.find((oldColumn) => oldColumn.id === newColumn.id);
        if (!match) {
          await dao.addColumn(oldTable.name, newColumn);
        }
        if (match && match.name !== newColumn.name) {
          await dao.renameColumn(oldTable.name, match.name, newColumn.name);
        }
      }

      if (oldTable.name !== newTable.name) {
        await dao.renameTable(oldTable.name, newTable.name);
      }

      // sets the table meta to the old table
      await dao.updateTableMetaData({"id":"a51f88d68fa115","type":"base","name":"putts","columns":"[{\"id\":\"6338da2390daf5\",\"system\":true,\"name\":\"creator\",\"type\":\"creator\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{}},{\"id\":\"fde862577f56c0\",\"system\":false,\"name\":\"distance\",\"type\":\"number\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{\"min\":0,\"max\":1000}},{\"id\":\"e79dd7ccb6a7d0\",\"system\":false,\"name\":\"made\",\"type\":\"bool\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{}},{\"id\":\"ade66358be9146\",\"system\":false,\"name\":\"setID\",\"type\":\"relation\",\"required\":1,\"unique\":0,\"show\":1,\"options\":{\"tableId\":\"8e202f7c59a769\",\"tableName\":\"sets\",\"cascadeDelete\":1}}]","getAllRule":"admin","getOneRule":"admin","createRule":"admin","deleteRule":"admin","updateRule":"admin","options":"{}"})
    }
   