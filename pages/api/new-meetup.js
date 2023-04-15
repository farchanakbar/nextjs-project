import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb://dbuser:Akbar1234@ac-h9b3aqd-shard-00-00.4zdj8sp.mongodb.net:27017,ac-h9b3aqd-shard-00-01.4zdj8sp.mongodb.net:27017,ac-h9b3aqd-shard-00-02.4zdj8sp.mongodb.net:27017/meetups?ssl=true&replicaSet=atlas-uoff6q-shard-0&authSource=admin&retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
