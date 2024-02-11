/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "s9ymn07b6kh3bil",
    "created": "2024-02-08 00:41:54.603Z",
    "updated": "2024-02-08 00:41:54.603Z",
    "name": "category",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "n8fw5sxn",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("s9ymn07b6kh3bil");

  return dao.deleteCollection(collection);
})
