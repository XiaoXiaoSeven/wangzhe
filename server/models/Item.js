const mongoose = require("mongoose");
// 定義模型的字段
const schema = new mongoose.Schema({
    name: { type: String },
    icon: { type: String },
})

module.exports = mongoose.model('Item', schema)