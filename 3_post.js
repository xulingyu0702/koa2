const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    //叠加数据
    let data = '';
    //监听DATA事件，收到表单数据的时候执行
    ctx.req.on('data', chunk => {
        data += chunk; //二进制


    });
    //接受表单数据完成后
    ctx.req.on('end', () => {
        data = decodeURI(data);
        console.log(data);
    });
    ctx.body ='123';

})
app.listen(3000, () => {
    console.log('成功在3000端口啟動')
})