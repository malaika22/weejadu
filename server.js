const args = process.argv;

const path = require("path");
const express = require("express");
const dotenv = require("dotenv");

//Initialize express app
const app = express();

//Configuring the Environment Variables
dotenv.config({ path: "./config/.env" });

//SERVE STATIC ASSET IF IN PRODUCTION
if (process.env.NODE_ENV === "production") {
  // SET STATIC FOLDER
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//CONFIGURE PORT
const PORT = process.env.port || args[2] || 5000;
const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `Server running in "${process.env.NODE_ENV}" mode on port "${PORT}"`
  );
});

//Handle the promise rejection error
process.on("unhandledRejection", (err, promise) => {
  console.log("Error: ", err.message);
  server.close(() => process.exit(1));
});
