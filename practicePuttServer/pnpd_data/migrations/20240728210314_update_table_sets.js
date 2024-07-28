
    import { MigrationDao } from "pinniped";

    export async function up(knex) {
      const oldTable = {"id":"8e202f7c59a769","type":"base","name":"sets","columns":[{"id":"d45357913dfd31","system":true,"name":"creator","type":"creator","required":0,"unique":0,"show":1,"options":{}},{"id":"b73851668a4f4b","system":false,"name":"shots","type":"text","required":0,"unique":0,"show":1,"options":{"minLength":0,"maxLength":255}},{"id":"2cb6e24b87a4fc","system":false,"name":"made","type":"number","required":0,"unique":0,"show":1,"options":{"min":0,"max":1000}},{"id":"63550848d98f9e","system":false,"name":"missed","type":"number","required":0,"unique":0,"show":1,"options":{"min":0,"max":1000}},{"id":"c55e01e2574f37","system":false,"name":"completed","type":"bool","required":0,"unique":0,"show":1,"options":{}}],"getAllRule":"creator","getOneRule":"creator","createRule":"creator","deleteRule":"creator","updateRule":"creator","options":{}};
      const newTable = {"id":"8e202f7c59a769","type":"base","name":"sets","columns":[{"id":"d45357913dfd31","system":true,"name":"creator","type":"creator","required":0,"unique":0,"show":1,"options":{}},{"id":"b73851668a4f4b","system":false,"name":"shots","type":"text","required":0,"unique":0,"show":1,"options":{"minLength":0,"maxLength":255}},{"id":"2cb6e24b87a4fc","system":false,"name":"made","type":"number","required":0,"unique":0,"show":1,"options":{"min":0,"max":1000}},{"id":"63550848d98f9e","system":false,"name":"missed","type":"number","required":0,"unique":0,"show":1,"options":{"min":0,"max":1000}},{"id":"c55e01e2574f37","system":false,"name":"completed","type":"bool","required":0,"unique":0,"show":1,"options":{}},{"id":"7ec080f86de844","system":false,"name":"template_id","type":"relation","required":0,"unique":0,"show":1,"options":{"tableId":"1f2cd90b5a200b","tableName":"templates","cascadeDelete":0}}],"getAllRule":"creator","getOneRule":"creator","createRule":"creator","deleteRule":"creator","updateRule":"creator","options":{}};
      const oldColumns = [{"id":"d45357913dfd31","system":true,"name":"creator","type":"creator","required":0,"unique":0,"show":1,"options":{}},{"id":"b73851668a4f4b","system":false,"name":"shots","type":"text","required":0,"unique":0,"show":1,"options":{"minLength":0,"maxLength":255}},{"id":"2cb6e24b87a4fc","system":false,"name":"made","type":"number","required":0,"unique":0,"show":1,"options":{"min":0,"max":1000}},{"id":"63550848d98f9e","system":false,"name":"missed","type":"number","required":0,"unique":0,"show":1,"options":{"min":0,"max":1000}},{"id":"c55e01e2574f37","system":false,"name":"completed","type":"bool","required":0,"unique":0,"show":1,"options":{}}];
      const newColumns = [{"id":"d45357913dfd31","system":true,"name":"creator","type":"creator","required":0,"unique":0,"show":1,"options":{}},{"id":"b73851668a4f4b","system":false,"name":"shots","type":"text","required":0,"unique":0,"show":1,"options":{"minLength":0,"maxLength":255}},{"id":"2cb6e24b87a4fc","system":false,"name":"made","type":"number","required":0,"unique":0,"show":1,"options":{"min":0,"max":1000}},{"id":"63550848d98f9e","system":false,"name":"missed","type":"number","required":0,"unique":0,"show":1,"options":{"min":0,"max":1000}},{"id":"c55e01e2574f37","system":false,"name":"completed","type":"bool","required":0,"unique":0,"show":1,"options":{}},{"id":"7ec080f86de844","system":false,"name":"template_id","type":"relation","required":0,"unique":0,"show":1,"options":{"tableId":"1f2cd90b5a200b","tableName":"templates","cascadeDelete":0}}];

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
      await dao.updateTableMetaData({"id":"8e202f7c59a769","type":"base","name":"sets","columns":"[{\"id\":\"d45357913dfd31\",\"system\":true,\"name\":\"creator\",\"type\":\"creator\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{}},{\"id\":\"b73851668a4f4b\",\"system\":false,\"name\":\"shots\",\"type\":\"text\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{\"minLength\":0,\"maxLength\":255}},{\"id\":\"2cb6e24b87a4fc\",\"system\":false,\"name\":\"made\",\"type\":\"number\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{\"min\":0,\"max\":1000}},{\"id\":\"63550848d98f9e\",\"system\":false,\"name\":\"missed\",\"type\":\"number\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{\"min\":0,\"max\":1000}},{\"id\":\"c55e01e2574f37\",\"system\":false,\"name\":\"completed\",\"type\":\"bool\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{}},{\"id\":\"7ec080f86de844\",\"system\":false,\"name\":\"template_id\",\"type\":\"relation\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{\"tableId\":\"1f2cd90b5a200b\",\"tableName\":\"templates\",\"cascadeDelete\":0}}]","getAllRule":"creator","getOneRule":"creator","createRule":"creator","deleteRule":"creator","updateRule":"creator","options":"{}"})
    }

    export async function down(knex) {
      //Run the exact same logic as the up method, but with new and old variables
      //swapped..
      const oldTable = {"id":"8e202f7c59a769","type":"base","name":"sets","columns":[{"id":"d45357913dfd31","system":true,"name":"creator","type":"creator","required":0,"unique":0,"show":1,"options":{}},{"id":"b73851668a4f4b","system":false,"name":"shots","type":"text","required":0,"unique":0,"show":1,"options":{"minLength":0,"maxLength":255}},{"id":"2cb6e24b87a4fc","system":false,"name":"made","type":"number","required":0,"unique":0,"show":1,"options":{"min":0,"max":1000}},{"id":"63550848d98f9e","system":false,"name":"missed","type":"number","required":0,"unique":0,"show":1,"options":{"min":0,"max":1000}},{"id":"c55e01e2574f37","system":false,"name":"completed","type":"bool","required":0,"unique":0,"show":1,"options":{}},{"id":"7ec080f86de844","system":false,"name":"template_id","type":"relation","required":0,"unique":0,"show":1,"options":{"tableId":"1f2cd90b5a200b","tableName":"templates","cascadeDelete":0}}],"getAllRule":"creator","getOneRule":"creator","createRule":"creator","deleteRule":"creator","updateRule":"creator","options":{}};
      const newTable = {"id":"8e202f7c59a769","type":"base","name":"sets","columns":[{"id":"d45357913dfd31","system":true,"name":"creator","type":"creator","required":0,"unique":0,"show":1,"options":{}},{"id":"b73851668a4f4b","system":false,"name":"shots","type":"text","required":0,"unique":0,"show":1,"options":{"minLength":0,"maxLength":255}},{"id":"2cb6e24b87a4fc","system":false,"name":"made","type":"number","required":0,"unique":0,"show":1,"options":{"min":0,"max":1000}},{"id":"63550848d98f9e","system":false,"name":"missed","type":"number","required":0,"unique":0,"show":1,"options":{"min":0,"max":1000}},{"id":"c55e01e2574f37","system":false,"name":"completed","type":"bool","required":0,"unique":0,"show":1,"options":{}}],"getAllRule":"creator","getOneRule":"creator","createRule":"creator","deleteRule":"creator","updateRule":"creator","options":{}};
      const oldColumns = [{"id":"d45357913dfd31","system":true,"name":"creator","type":"creator","required":0,"unique":0,"show":1,"options":{}},{"id":"b73851668a4f4b","system":false,"name":"shots","type":"text","required":0,"unique":0,"show":1,"options":{"minLength":0,"maxLength":255}},{"id":"2cb6e24b87a4fc","system":false,"name":"made","type":"number","required":0,"unique":0,"show":1,"options":{"min":0,"max":1000}},{"id":"63550848d98f9e","system":false,"name":"missed","type":"number","required":0,"unique":0,"show":1,"options":{"min":0,"max":1000}},{"id":"c55e01e2574f37","system":false,"name":"completed","type":"bool","required":0,"unique":0,"show":1,"options":{}},{"id":"7ec080f86de844","system":false,"name":"template_id","type":"relation","required":0,"unique":0,"show":1,"options":{"tableId":"1f2cd90b5a200b","tableName":"templates","cascadeDelete":0}}];
      const newColumns = [{"id":"d45357913dfd31","system":true,"name":"creator","type":"creator","required":0,"unique":0,"show":1,"options":{}},{"id":"b73851668a4f4b","system":false,"name":"shots","type":"text","required":0,"unique":0,"show":1,"options":{"minLength":0,"maxLength":255}},{"id":"2cb6e24b87a4fc","system":false,"name":"made","type":"number","required":0,"unique":0,"show":1,"options":{"min":0,"max":1000}},{"id":"63550848d98f9e","system":false,"name":"missed","type":"number","required":0,"unique":0,"show":1,"options":{"min":0,"max":1000}},{"id":"c55e01e2574f37","system":false,"name":"completed","type":"bool","required":0,"unique":0,"show":1,"options":{}}];

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
      await dao.updateTableMetaData({"id":"8e202f7c59a769","type":"base","name":"sets","columns":"[{\"id\":\"d45357913dfd31\",\"system\":true,\"name\":\"creator\",\"type\":\"creator\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{}},{\"id\":\"b73851668a4f4b\",\"system\":false,\"name\":\"shots\",\"type\":\"text\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{\"minLength\":0,\"maxLength\":255}},{\"id\":\"2cb6e24b87a4fc\",\"system\":false,\"name\":\"made\",\"type\":\"number\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{\"min\":0,\"max\":1000}},{\"id\":\"63550848d98f9e\",\"system\":false,\"name\":\"missed\",\"type\":\"number\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{\"min\":0,\"max\":1000}},{\"id\":\"c55e01e2574f37\",\"system\":false,\"name\":\"completed\",\"type\":\"bool\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{}}]","getAllRule":"creator","getOneRule":"creator","createRule":"creator","deleteRule":"creator","updateRule":"creator","options":"{}"})
    }
   