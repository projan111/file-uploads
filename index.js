const express = require("express");
const app = express();
const path = require("path");
const PORT = 4000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());

app.get("/", (req, res) => {
  return res.render("home");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
