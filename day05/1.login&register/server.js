//引入express框架
let express = require('express')

//创建app服务对象
let app = express()
//使用内置中间件用于获取post请求体参数
app.use(express.urlencoded({extended:true}))

//注册业务逻辑的路由
app.post('/register',(request,response)=>{
  console.log(request.body);
  //1.获取用户的输入
  //2.校验数据的合法性
  //3.检查该邮箱是否注册过
  //4.注册过 ---- 驳回；未注册---注册
  response.send('ok')
})

//登录UI路由
app.get('/login',(request,response)=>{
   response.sendFile(__dirname+'/public/login.html')
})
//注册UI路由
app.get('/register',(request,response)=>{
  response.sendFile(__dirname+'/public/register.html')
})

//绑定端口监听
app.listen(3000,(err)=>{
    if (!err) console.log('服务器启动成功了！！')
    else console.log(err)
})