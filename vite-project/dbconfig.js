const MongoClient = require('mongodb').MongoClient;

const uri = process.env.MONGODB_URI;

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error("Error connecting to MongoDB:", err);
    return;
  }

  const db = client.db(); // Get the default database
  const collection = db.collection("mycollection");
  
  // Perform actions on the collection object
  
  // Close the MongoDB connection when done
  client.close();
});