const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  file: { type: String, required: true, trim: true },
  path: { type: String, required: true, trim: true },
});

const fileModel = mongoose.model("File", fileSchema);

module.exports = fileModel;
