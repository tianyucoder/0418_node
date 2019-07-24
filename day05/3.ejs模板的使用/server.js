let express = require('express')

let app = express()
//设置模板引擎
app.set("view engine" , "ejs");
//设置模板所在目录
app.set("views","./views")

app.get('/',(request,response)=>{
  response.render('demo')
})


app.listen(3000,(err)=>{
  if (!err) console.log('服务器启动成功了！')
  else console.log(err)
})