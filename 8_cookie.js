const Koa =require ('koa');
const app =new Koa();

app.use(async ctx=>{
    if(ctx.url === '/xulingyu'){
        ctx.cookies.set(
           'name' ,'xulingyu',{
               domain:'localhost',
               path:'/xulingyu',
               maxAge:24*60*60*1000,
               expires: new Date('2019-12-31'),
               httpOnly:false,
               overwrite:false
           }
        );
        ctx.body='cookie success';
    }else{
        ctx.body= 'no cookie';
    }
})
app.listen(3000,()=>{
    console.log('服务已经在3000端口启动')
})