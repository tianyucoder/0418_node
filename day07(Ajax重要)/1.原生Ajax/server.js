//1.引入express
let express = require('express')

//2.创建app服务对象
let app = express()
app.use(express.static('public'))


app.get('/test_get',(request,response)=>{
  console.log('一个GET请求来了',request.query)
  response.send('我是服务器响应GET请求的信息')
})

app.post('/test_post',(request,response)=>{
  console.log('一个POST请求来了')
  response.send('我是服务器响应POST请求的信息')
})

//4.绑定端口监听
app.listen(3000,(err)=>{
  if (!err) {
    console.log('【不要用用webstorm打开html页面，会存在跨域问题！！用以下地址】')
    console.log('测试原生js发送Ajax-GET请求的地址是：http://localhost:3000/ajax_get.html')
  }
  else console.log(err)
})