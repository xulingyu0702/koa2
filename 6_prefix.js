const Koa =require('koa');
const app = new Koa();

const Router =require('koa-router');
const router =new Router({
    prefix:'/xiaojuju'
});
router.get('/abc',(ctx,next)=>{
   
    ctx.body='xulingyu'
});
app.use(router.routes());
app.use(router.allowedMethods());


app.listen(3000,()=>{
    console.log('成功部署在3000端口号上面')
})