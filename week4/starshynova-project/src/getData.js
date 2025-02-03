// import { MongoClient, ServerApiVersion } from 'mongodb';

// const uri = "mongodb+srv://starshynova:starshynova@cluster0.gom3j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

export const getData = async () => {
//     try {
//         await client.connect();
//         const db = client.db("React-project");
//         const collection = db.collection("math-function");

//         const data = await collection.find({operation: {$exists:true}}).toArray();
//         console.log(data);
//         return data;
//     } catch (error) {
//         console.error("Error querying data:", error);
//         // return [];
//     } finally {
//         await client.close();
//     }
// };

try {
  const response = await fetch("http://localhost:5000/api/questions");
  const data = await response.json();
  return data;
} catch (error) {
  console.error("Error querying data:", error);
  return [];
}
};