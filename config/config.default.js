/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1579625240045_2085';

  // add your middleware config here 添加中间件 配置需要的中间件，数组顺序即为中间件的加载顺序
  config.middleware = ['auth','printdate','gzip','forbidIP'];
  //给中间件传入参数
  config.printdate = {
    test_str:'你好,中间件'
  }
  // 给中间件传入参数 配置 gzip 中间件的配置
  config.gzip =  {
    threshold: 1024, // 小于 1k 的响应体不压缩
  }
  config.forbidIP ={
    forbidip:['127.0.0.1']
  }
  // 配置session
  config.session = {
    key:'SESSION_ID',
    maxAge:30*1000*60,// 30分钟
    httpOnly:true,// 默认就是 true
    renew:true,//每次刷新页面的时候session都会被延期
    encrypt:true // 加密传输
  }
  // 配置ejs模板引擎
  config.view = {
    mapping: {'.html': 'ejs'} //左边写成.html后缀，会自动渲染.html文件
};
// 配置公众的api
config.api = 'http://www.phonegap100.com/'
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
