const MongoClient = require("mongodb");

//mongo
const db_name = "cards_project";
const mongo_url = `mongodb://localhost:27017/${db_name}`;

const anonymous_db = "anonymous";
const users_db = "users";

let db = null;
var anonymous_collection = null;
let users_collection = null;

async function connectDB() {
  MongoClient.connect(
    mongo_url,
    { useNewUrlParser: true },
    async function(err, client) {
      if (err) throw err;
      console.log("connected to database");
      anonymous_collection = await client.db(db_name).collection(anonymous_db);
      //   console.log(await anonymous_collection.find().toArray());
    }
  );
}

async function addAnonymouse(obj) {
  return await anonymous_collection.insertOne(obj);
}

function returnAnonymous() {
  return anonymous_collection.find().toArray();
}

module.exports = {
  getAllAnonymous: returnAnonymous,
  connect: connectDB,
  addAnonymouse: addAnonymouse
};
