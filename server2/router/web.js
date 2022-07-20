const express = require("express");
const todoController = require("../controllers/todoCOntroller");

const router = express.Router();

router.get("/", todoController.getTodoData);
//http://localhost:9001/todo

router.post("/", todoController.createTodo);

router.get("/edit/:id", todoController.editTodo);

router.put("/edit/:id", todoController.updateTodo);

router.delete("/delete/:id", todoController.deleteTodo);

// File Upload

var multipart = require("connect-multiparty");
const path = require("path");
var multipartMiddleware = multipart({
  uploadDir: path.join(__dirname, "uploads"),
});

const fileController = require("../controllers/fileController");

// file upload
router.get("/file", fileController.getFileData);

router.post("/file", multipartMiddleware, fileController.uploadFile);

router.get("/download/:id", fileController.DownloadFile);

module.exports = router;
