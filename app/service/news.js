'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    // 通过接口抓取返回数据
    let url = `${this.config.api}appapi.php?a=getPortalList&catid=20&page=1`
    let response=await this.ctx.curl(url)
    let data = JSON.parse(response.data)
    return data.result
  }
  async getNewsContent(aid) {
    // 通过接口抓取返回数据
    let url = `${this.config.api}appapi.php?a=getPortalArticle&aid=${aid}`
    let response=await this.ctx.curl(url)
    let data = JSON.parse(response.data)
    return data.result
  }
}
module.exports = NewsService;