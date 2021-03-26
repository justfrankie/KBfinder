// const express = require("express");
// const bodyParser = require("body-parser");
// const morgan = require("morgan");
// const cors = require("cors");
// const path = require("path");
// // const db = require("./database.js");

// const app = express();
// const PORT = 8000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/", express.static(path.join(__dirname, "../../client/dist")));
// app.use(cors());
// app.use(morgan("dev"));

// REST -> get, post, put, delete
// also db.helpers <- what are we exporting from the database file
// app.get("/all", (req, res) => {
//   db.getAll((err, results) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).send(results);
//     }
//   });
// });

// app.post("/post", (req, res) => {
//   db.postEntry(req.body, (err, results) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).send("Successfully posted Journal!");
//     }
//   });
// });

// app.put("/update/:id", (req, res) => {
//   db.updateOne(req.params.id, req.body, (err, results) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).send("Successfully updated journal!");
//     }
//   });
// });

// app.get("/get/:id", (req, res) => {
//   db.getOne(req.params.id, (err, results) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).send(results);
//     }
//   });
// });

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error in server setup");
  } else {
    `LISTENING ON PORT ${PORT}`;
  }
});
