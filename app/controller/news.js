'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    var list = await this.service.news.getNewsList()
    let user_cookie = this.ctx.cookies.get('user_name_cookie');
    // 获取session 
   let username_session = this.ctx.session.username_01;
   console.log('获取session',username_session)
    await this.ctx.render('news',{
        list:list,
        user_cookie
      })
  }
  async content(){
    // 获取get传值
    let aid = this.ctx.query.aid;
    console.log(aid)
   let detail = await this.service.news.getNewsContent(aid);
    await this.ctx.render('newscontent',{
      detail:detail[0]
    })
  }
  // 接受post提交数据
  async add(){
  
    console.log(this.ctx.request.body)
    this.ctx.body = this.ctx.request.body
  }
}
module.exports = NewsController;