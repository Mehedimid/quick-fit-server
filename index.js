require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// == middleware ==
app.use(cors());
app.use(express.json());



//mongodb databse start ===
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mehedi117:Mha1381mHa@cluster0.virnuu4.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

    // ============= packages api starts ============
    app.get("/", async (req, res) => {
          console.log("lkjdsf")
      });
  

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const newsStoriesCollection = client.db("quickfitDB").collection("newsStories");


    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


// ==========================================
// app.get("/", (req, res) => {
//     res.send("assignmetn 12 api running");
//   });
  
  app.listen(port, () => {
    console.log(`assignment-12 is running on port ${port}`);
  });