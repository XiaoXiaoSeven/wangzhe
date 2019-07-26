const mongoose = require("mongoose");
// 定義模型的字段
const schema = new mongoose.Schema({
    name: { type: String },
    items: [{
        username: { type: String },
        password: { type: String }
    }]
})

module.exports = mongoose.model('AdminUser', schema)