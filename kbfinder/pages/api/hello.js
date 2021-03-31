// const express = require("express");
// const bodyParser = require("body-parser");
// const morgan = require("morgan");
// const cors = require("cors");
// const path = require("path");

global.Buffer = global.Buffer || require("buffer").Buffer;

if (typeof btoa === "undefined") {
  global.btoa = function (str) {
    return new Buffer(str, "binary").toString("base64");
  };
}

if (typeof atob === "undefined") {
  global.atob = function (b64Encoded) {
    return new Buffer(b64Encoded, "base64").toString("binary");
  };
}

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error in server setup");
  } else {
    `LISTENING ON PORT ${PORT}`;
  }
});
