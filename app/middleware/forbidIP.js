module.exports = (options,app) =>{
  // 返回一个异步的方法
  
  return async function forbidIP(ctx,next) {
    // 屏蔽的ip
    var forbid_ips = options.forbidip;
    let result = forbid_ips.some((value)=>value==ctx.request.ip)
    if(result){
      ctx.status=403;
      ctx.body = '你的IP已经被封!(Your IP has been blocked!) '
      ctx.message='Your IP has been blocked!'
    }else{
      await next();
    }
  /*   if(ctx.request.ip==forbid_ip){
      ctx.status=403;
      ctx.body = '你的IP已经被封!(Your IP has been blocked!) '
      ctx.message='Your IP has been blocked!'
    }else{
      await next();
    } */
  }
}