'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
     // 调用extend 里面的扩展的application的方法
  //  console.log(this.app.foo(),'调用extend 里面的扩展的application的方法')
     // 调用extend 里面的扩展的ctx的方法
  //  console.log(this.ctx.getIp(),'调用extend 里面的扩展的helper的方法')
    // 调用extend 里面的扩展的helper的方法
  //  console.log(this.ctx.helper.getHelperData(),'调用extend 里面的扩展的helper的方法')
      // 调用extend 里面的扩展的request的方法
  //  console.log(this.ctx.request.foo_3(),'调用extend 里面的扩展的request的方法')
  // 设置cookie
  this.ctx.cookies.set('user_name_cookie','zhangsan')
  /* this.ctx.cookies.set('cookie_name','cookies_value',{
    maxAge:24*3600*1000,// 缓存一天
    httpOnly:true,// 默认就是 true
    signed:true,// 对cookie进行签名 防止用户修改cookie
    encrypt:true // 加密传输
  }) */
 /*  // 解密
  this.ctx.cookies.get('user_name_cookie',{encrypt:true});
  // 清除cookie
   this.ctx.cookies.set('user_name_cookie',null);
  */
 // 设置session
 this.ctx.session.username_01='wangjiayi'
 /* 
   // 获取session
   this.ctx.session.username_01
 */
    await this.ctx.render('index.html',{  //自动会找view下的index.html
      title: 'egg-study'
    });
   // ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
