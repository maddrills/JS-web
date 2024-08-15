const express = require("express");

//get a server up and running
//exe express
//save the return value
const app = express();
console.dir(app);

//serve from anywhere basically any request will default to this
app.use((req, res) => {
  console.log("Hello From Any where");
  //   console.log(req);
  //   console.log(res);
  //   res.send("Hello World");
  res.send({ color: `red` });
});

//start with port
app.listen(3000, () => {
  console.log("Listing in port 3000!");
});
