const fileModel = require("../models/filemodel");

class fileController {
  static uploadFile = async (req, res) => {
    //console.log("file path", req.files.file.path);
    var imageFile = req.files.file.path;
    const splitArray = imageFile.split("\\");
    const fileName = splitArray[splitArray.length - 1];
    //console.log("File Name:", fileName);
    const newData = new fileModel({
      file: fileName,
      path: imageFile,
    });
    newData.save();
    res.send(imageFile);
  };

  //get controller
  static getFileData = async (req, res) => {
    try {
      let data = await fileModel.find();
      res.send(data);
    } catch (err) {
      console.log(err);
    }
  };

  // download File
  static DownloadFile = async (req, res) => {
    try {
      let result = await fileModel.findOne({ _id: req.params.id });
      console.log(result.file);
      res.download(result.file);
    } catch (err) {
      console.log(err);
    }
  };
}

module.exports = fileController;
