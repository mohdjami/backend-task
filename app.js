const fs = require("fs");
const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
// Create a backend app listening at port 1337.
// Your first task is to create an endpoint for uploading file. (/uploadFile)
// /uploadFile takes file data inside post body and saves the file inside root directory or “uploads” folder.

const app = express();
const port = 8000;
app.use(express.json());

const process1 = (data) => {
  //testing witht the file i already have in the rot folder
  fs.readFile("newfile.txt", "utf-8", (req, data) => {
    //First process should append character “R” at begining of every line of the chunk.
    const newData = data.split("\n").forEach((el) => {
      //   console.log("R" + el);
      return "R" + el;
    });
  });
  //Return the new Data which is appended
};
const process2 = (data) => {
  fs.readFile("newfile.txt", "utf-8", (req, data) => {
    //First process should append character “R” at begining of every line of the chunk.
    data.split("\n").forEach((el) => {
      console.log("R" + el);
      return "2" + el;
    });
  });
  //I want to return the new data
};

process1();
process2();
app.post("/uploadFile", async (req, res) => {
  const file = req.file;
  const text = req.body;
  //take the text of the file and save it to a new file named test.txt
  fs.open("/uploads/test.txt", text, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("file written");
    }
  });
  const appendedData = process1(text);
  process2();
  //read the data of the file stored locally on the uploads/test.txt
});
app.listen(port, () => {
  console.log(`server is running at ${8000}`);
});
