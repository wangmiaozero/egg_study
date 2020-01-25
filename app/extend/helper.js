// app/extend/helper.js

/* 
  https://www.npmjs.com/package/silly-datetime
  npm i silly-datetime --save 
*/
var sd = require('silly-datetime');
module.exports = {
  formatTime(param) {
   //格式化日期时间
   return sd.format(new Date(param*1000), 'YYYY-MM-DD HH:mm');
    // this 是 helper 对象，在其中可以调用其他 helper 方法
    // this.ctx => context 对象
    // this.app => application 对象
  },
  getHelperData(){
    return '我的helper里的数据'
  }
};