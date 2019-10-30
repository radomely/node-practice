var MongoClient = require("mongodb").MongoClient;
var persons = require("./persons");

var url = "mongodb://localhost:27017";
const dbName = "userCollectionDB";

MongoClient.connect(url, function(err, client) {
  const db = client.db(dbName);
  var collection = db.collection("users");
  // метод insertMany используется для добавления множества обьектов
  collection.insertMany(persons, function(err, results) {
    if (err) throw err;

    console.log("Data added!");
    console.log("********** Result **********");
    console.log(results);
    console.log("****************************");
    client.close();
  });
});
