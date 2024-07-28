
      import { MigrationDao } from "pinniped";

      export async function up(knex) {
        const dao = new MigrationDao(knex);
        await dao.createTable({"id":"8e202f7c59a769","type":"base","name":"sets","columns":[{"id":"d45357913dfd31","system":true,"name":"creator","type":"creator","required":0,"unique":0,"show":1,"options":{}},{"id":"b73851668a4f4b","system":false,"name":"shots","type":"text","required":0,"unique":0,"show":1,"options":{"minLength":0,"maxLength":255}},{"id":"2cb6e24b87a4fc","system":false,"name":"made","type":"number","required":0,"unique":0,"show":1,"options":{"min":0,"max":1000}},{"id":"63550848d98f9e","system":false,"name":"missed","type":"number","required":0,"unique":0,"show":1,"options":{"min":0,"max":1000}},{"id":"c55e01e2574f37","system":false,"name":"completed","type":"bool","required":0,"unique":0,"show":1,"options":{}}],"getAllRule":"creator","getOneRule":"creator","createRule":"creator","deleteRule":"creator","updateRule":"creator","options":{}});
        await dao.addTableMetaData({"id":"8e202f7c59a769","type":"base","name":"sets","columns":"[{\"id\":\"d45357913dfd31\",\"system\":true,\"name\":\"creator\",\"type\":\"creator\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{}},{\"id\":\"b73851668a4f4b\",\"system\":false,\"name\":\"shots\",\"type\":\"text\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{\"minLength\":0,\"maxLength\":255}},{\"id\":\"2cb6e24b87a4fc\",\"system\":false,\"name\":\"made\",\"type\":\"number\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{\"min\":0,\"max\":1000}},{\"id\":\"63550848d98f9e\",\"system\":false,\"name\":\"missed\",\"type\":\"number\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{\"min\":0,\"max\":1000}},{\"id\":\"c55e01e2574f37\",\"system\":false,\"name\":\"completed\",\"type\":\"bool\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{}}]","getAllRule":"creator","getOneRule":"creator","createRule":"creator","deleteRule":"creator","updateRule":"creator","options":"{}"});
      }
      export async function down(knex) {
        const dao = new MigrationDao(knex);
        await dao.dropTable("sets");
        await dao.deleteTableMetaData("8e202f7c59a769");
      }
     