const express = require("express");
const app = express();
app.use(require("cors")())
app.use(express.json())
//连接数据库
require("./plugins/db")(app)
require("./routes/admin")(app)
// 静态文件托管
app.use("/uploads", express.static(__dirname + '/uploads'))
app.listen(3000, () => {
    console.log("http://localhost:3000")
})