// let express = require('express');
// let mongoose = require('mongoose');
// let cors = require('cors');
// let bodyParser = require('body-parser');
// let dbConfig = require('./database/db');
// // Express Route
// const studentRoute = require('../backend/routes/student.route')
// // Connecting mongoDB Database
// mongoose.Promise = global.Promise;
// const db ="mongodb+srv://mk:mk@cluster0.4yxoc.mongodb.net/mern?retryWrites=true&w=majority";
// //const db ="mongodb+srv://mk:mk@cluster0.m7mtt.mongodb.net/test:27017/?maxPoolSize=20&w=majority&ssl=true";
// mongoose.connect(db, {
//   useNewUrlParser: true
// }).then(() => {
//   console.log('Database sucessfully connected!')
// },
//   error => {
//     console.log('Could not connect to database : ' + error)
//   }
// )

// //const { MongoClient } = require("mongodb");
// // // Connection URI
// // const uri =
// //   "mongodb+srv://mk:mk@cluster0.m7mtt.mongodb.net/test:27017/?maxPoolSize=20&w=majority&ssl=true";
// // // Create a new MongoClient
// // const client = new MongoClient(uri);
// // async function run() {
// //   try {
// //     // Connect the client to the server
// //     await client.connect();
// //     // Establish and verify connection
// //     await client.db("mern").command({ ping: 1 });
// //     console.log("Connected successfully to server");
// //   } finally {
// //     // Ensures that the client will close when you finish/error
// //     await client.close();
// //   }
// // }
// // run().catch(console.dir);
// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(cors());
// app.use('/students', studentRoute)

// // PORT
// const port = process.env.PORT || 4000;
// const server = app.listen(port, () => {
//   console.log('Connected to port ' + port)
// })
// // 404 Error
// app.use((req, res, next) => {
//   next(createError(404));
// });
// app.use(function (err, req, res, next) {
//   console.error(err.message);
//   if (!err.statusCode) err.statusCode = 500;
//   res.status(err.statusCode).send(err.message);
// });
////////////////////////////////////////////////////////////////
let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');
// Express Route
const studentRoute = require('../backend/routes/student.route')
// Connecting mongoDB Database
mongoose.Promise = global.Promise;
const db ="mongodb+srv://mk:mk@cluster0.4yxoc.mongodb.net/mern?retryWrites=true&w=majority";
// const db="mongodb+srv://mk:@cluster0.4yxoc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//const db ="mongodb+srv://mk:mk@cluster0.m7mtt.mongodb.net/test:27017/?maxPoolSize=20&w=majority&ssl=true";
mongoose.connect(db, {
  useNewUrlParser: true
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)

//const { MongoClient } = require("mongodb");
// // Connection URI
// const uri =
//   "mongodb+srv://mk:mk@cluster0.m7mtt.mongodb.net/test:27017/?maxPoolSize=20&w=majority&ssl=true";
// // Create a new MongoClient
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     // Connect the client to the server
//     await client.connect();
//     // Establish and verify connection
//     await client.db("mern").command({ ping: 1 });
//     console.log("Connected successfully to server");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/students', studentRoute)

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});