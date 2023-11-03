const MongoClient = require('mongodb').MongoClient;

const uri = process.env.MONGODB_URI;

function checkMongoDBConnection() {
  MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
      console.error("Error connecting to MongoDB:", err);
      console.log("Not connected to MongoDB");
    } else {
      console.log("Connected to MongoDB");
      client.close();
    }
  });
}

// Check the MongoDB connection every 30 seconds (adjust the interval as needed)
setInterval(checkMongoDBConnection, 30000);
