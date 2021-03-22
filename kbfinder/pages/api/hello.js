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

// export default (req, res) => {
//   res.status(200).json({ name: 'John Doe' })
// }

// export default function handler(req, res) {
//   if (req.method === "GET") {
//     console.log("WORKEDDDDDDDDDDDDDDDDDDDDDDDD")
//     res.status(200).json({"GOT SOMETHING BACK"})
//   } else {
//     res.status(400).json("NOPEEEEEEEEEEEEEEEEEEEEEEEEEE")
//   }
// }
