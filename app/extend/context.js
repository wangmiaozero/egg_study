// app/extend/context.js
module.exports = {
  getIp(param) {
    // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
    let data = {
      host:this.request.host,
      url:this.request.url
    }
    return data;
  },
};