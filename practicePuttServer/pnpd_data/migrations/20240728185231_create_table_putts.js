
      import { MigrationDao } from "pinniped";

      export async function up(knex) {
        const dao = new MigrationDao(knex);
        await dao.createTable({"id":"a51f88d68fa115","type":"base","name":"putts","columns":[{"id":"6338da2390daf5","system":true,"name":"creator","type":"creator","required":0,"unique":0,"show":1,"options":{}},{"id":"fde862577f56c0","system":false,"name":"distance","type":"number","required":0,"unique":0,"show":1,"options":{"min":0,"max":1000}},{"id":"e79dd7ccb6a7d0","system":false,"name":"made","type":"bool","required":0,"unique":0,"show":1,"options":{}},{"id":"ade66358be9146","system":false,"name":"setID","type":"relation","required":1,"unique":0,"show":1,"options":{"tableId":"8e202f7c59a769","tableName":"sets","cascadeDelete":1}}],"getAllRule":"admin","getOneRule":"admin","createRule":"admin","deleteRule":"admin","updateRule":"admin","options":{}});
        await dao.addTableMetaData({"id":"a51f88d68fa115","type":"base","name":"putts","columns":"[{\"id\":\"6338da2390daf5\",\"system\":true,\"name\":\"creator\",\"type\":\"creator\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{}},{\"id\":\"fde862577f56c0\",\"system\":false,\"name\":\"distance\",\"type\":\"number\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{\"min\":0,\"max\":1000}},{\"id\":\"e79dd7ccb6a7d0\",\"system\":false,\"name\":\"made\",\"type\":\"bool\",\"required\":0,\"unique\":0,\"show\":1,\"options\":{}},{\"id\":\"ade66358be9146\",\"system\":false,\"name\":\"setID\",\"type\":\"relation\",\"required\":1,\"unique\":0,\"show\":1,\"options\":{\"tableId\":\"8e202f7c59a769\",\"tableName\":\"sets\",\"cascadeDelete\":1}}]","getAllRule":"admin","getOneRule":"admin","createRule":"admin","deleteRule":"admin","updateRule":"admin","options":"{}"});
      }
      export async function down(knex) {
        const dao = new MigrationDao(knex);
        await dao.dropTable("putts");
        await dao.deleteTableMetaData("a51f88d68fa115");
      }
     