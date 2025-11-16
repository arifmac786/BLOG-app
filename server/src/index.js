import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

import connectDb from "./config/db.js";
import app from "./app.js";

const PORT = process.env.PORT;

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`App running ERROR : ${error}`);
  });
