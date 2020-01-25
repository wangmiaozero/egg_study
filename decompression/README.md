# egg-example

爬虫

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org


# 环境准备
+ 操作系统：支持 macOS，Linux，Windows
+ 运行环境：建议选择 LTS 版本，最低要求 8.x。

# 安装全局 egg 环境
```
npm i egg-init -g
```

# 快速初始化
我们推荐直接使用脚手架，只需几条简单指令，即可快速生成项目（npm >=6.1.0）:

````
$ mkdir egg-example && cd egg-example
$ npm init egg --type=simple
$ npm i
````
启动项目:
````
$ npm run dev
$ open http://localhost:7001
````

# 初始化项目

````
$ mkdir egg-example
$ cd egg-example
$ npm init
$ npm i egg --save
$ npm i egg-bin --save-dev
````

# 添加 npm scripts 到 package.json：

````
{
  "name": "egg-example",
  "scripts": {
    "dev": "egg-bin dev"
  }
}
````

# 编写 Controller
+ 如果你熟悉 Web 开发或 MVC，肯定猜到我们第一步需要编写的是 Controller 和 Router。

````
// app/controller/home.js
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'Hello world';
  }
}

module.exports = HomeController;
````
配置路由映射：
````
// app/router.js
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
};
````
加一个配置文件：
```
// config/config.default.js
exports.keys = <此处改为你自己的 Cookie 安全字符串>;
```
此时目录结构如下：

```
egg-example
├── app
│   ├── controller
│   │   └── home.js
│   └── router.js
├── config
│   └── config.default.js
└── package.json
```
启动
```
$ npm run dev
$ open http://localhost:7001
```

# 规范目录
```
egg-project
├── package.json
├── app.js (可选)
├── agent.js (可选)
├── app
|   ├── router.js
│   ├── controller
│   |   └── home.js
│   ├── service (可选)
│   |   └── user.js
│   ├── middleware (可选)
│   |   └── response_time.js
│   ├── schedule (可选)
│   |   └── my_task.js
│   ├── public (可选)
│   |   └── reset.css
│   ├── view (可选)
│   |   └── home.tpl
│   └── extend (可选)
│       ├── helper.js (可选)
│       ├── request.js (可选)
│       ├── response.js (可选)
│       ├── context.js (可选)
│       ├── application.js (可选)
│       └── agent.js (可选)
├── config
|   ├── plugin.js
|   ├── config.default.js
│   ├── config.prod.js
|   ├── config.test.js (可选)
|   ├── config.local.js (可选)
|   └── config.unittest.js (可选)
└── test
    ├── middleware
    |   └── response_time.test.js
    └── controller
        └── home.test.js
```

+ 如上，由框架约定的目录：

  + app/router.js 用于配置 URL 路由规则，具体参见 Router。
  + app/controller/** 用于解析用户的输入，处理后返回相应的结果，具体参见 Controller。
  + app/service/** 用于编写业务逻辑层，可选，建议使用，具体参见 Service。
  + app/middleware/** 用于编写中间件，可选，具体参见 Middleware。
  + app/public/** 用于放置静态资源，可选，具体参见内置插件 egg-static。
  + app/extend/** 用于框架的扩展，可选，具体参见框架扩展。
  + config/config.{env}.js 用于编写配置文件，具体参见配置。
  + config/plugin.js 用于配置需要加载的插件，具体参见插件。
  + test/** 用于单元测试，具体参见单元测试。
  + app.js 和 agent.js 用于自定义启动时的初始化工作，可选，具体参见启动自定义。关于 + agent.js的作用参见Agent机制。
+ 由内置插件约定的目录：

  + app/public/** 用于放置静态资源，可选，具体参见内置插件 egg-static。
  + app/schedule/** 用于定时任务，可选，具体参见定时任务。
+ 若需自定义自己的目录规范，参见 Loader API

  + app/view/** 用于放置模板文件，可选，由模板插件约定，具体参见模板渲染。
  + app/model/** 用于放置领域模型，可选，由领域类相关插件约定，如 egg-sequelize。

  官方文档: https://eggjs.org/zh-cn/intro/index.html

  https://www.bilibili.com/video/av38372787?p=5