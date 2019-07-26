const mongoose = require("mongoose");
// 定義模型的字段
const schema = new mongoose.Schema({
    name: { type: String },
    categories: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category"
    }
})

module.exports = mongoose.model('Category', schema)