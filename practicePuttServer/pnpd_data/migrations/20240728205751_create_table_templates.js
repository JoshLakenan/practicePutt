
      import { MigrationDao } from "pinniped";

      export async function up(knex) {
        const dao = new MigrationDao(knex);
        await dao.createTable({"id":"1f2cd90b5a200b","type":"base","name":"templates","columns":[{"id":"b64c8e3cbbdb01","system":false,"name":"name","type":"text","required":0,"unique":0,"show":1,"options":{"minLength":0,"maxLength":255}},{"id":"0ed401549364fb","system":true,"name":"creator","type":"creator","required":0,"unique":0,"show":1,"options":{}},{"id":"0b78dc5ea77617","system":false,"name":"shots","type":"text","required":0,"unique":0,"show":1,"options":{"minLength":0,"maxLength":255}},{"id":"110f9af46ef278","system":false,"name":"last_used","type":"date","required":0,"unique":0,"show":1,"options":{}}],"getAllRule":"creator","getOneRule":"creator","createRule":"creator","deleteRule":"creator","updateRule":"creator","options":{}});
        await dao.addTableMetaData({"id":"1f2cd90b5a200b","type":"base","name":"templates","columns":"[{\"id\":\"b64c8e3cbbdb01\",\"system\":false,\"name\":\"name\",\"type\":\"text\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{\"minLength\":0,\"maxLength\":255}},{\"id\":\"0ed401549364fb\",\"system\":true,\"name\":\"creator\",\"type\":\"creator\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{}},{\"id\":\"0b78dc5ea77617\",\"system\":false,\"name\":\"shots\",\"type\":\"text\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{\"minLength\":0,\"maxLength\":255}},{\"id\":\"110f9af46ef278\",\"system\":false,\"name\":\"last_used\",\"type\":\"date\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{}}]","getAllRule":"creator","getOneRule":"creator","createRule":"creator","deleteRule":"creator","updateRule":"creator","options":"{}"});
      }
      export async function down(knex) {
        const dao = new MigrationDao(knex);
        await dao.dropTable("templates");
        await dao.deleteTableMetaData("1f2cd90b5a200b");
      }
     