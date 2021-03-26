const http = require("http");

const req = http.request(
  {
    host: "127.0.0.1",
    port: 3000,
    method: "GET",
  },
  (res) => {
    console.log("tyoyoyoyoyoyo");
    res.resume();
    res.on("end", () => {
      if (!res.complete)
        console.error(
          "The connection was terminated while the message was still being sent"
        );
    });
  }
);
