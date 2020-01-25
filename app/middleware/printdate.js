module.exports = (options,app) =>{
  // 返回一个异步的方法
  
  return async function printDate(ctx,next) {
    // 接收config 传入的参数
    console.log(new Date(),options,'中间件');
    await next();
  }
}