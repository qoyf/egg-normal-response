
# egg-normal-response

<!--
此处描述。
-->

## 安装

```bash
$ npm i egg-normal-response-x --save
```

## 使用方法

```js
// {app_root}/config/plugin.js
exports.normalResponse = {
  enable: true,
  package: 'egg-normal-response-x',
};
```

## 配置

```js
// {app_root}/config/config.default.js
exports.normalResponse = {
   outSystemError: false, // 是否输出系统错误信息到客户端
   systemErrorCode: 500, // 系统错误时返回的HTTP状态码
   userErrorCode: 600, // 用户请求错误时返回的HTTP状态码
   succeeCode: 200, // 请求成功时返回的HTTP状态码
   ignore: ["/*", "*/upload/*", "/assets/*", "/static/*"] // 忽略特定路径的请求，不对这些路径的响应进行处理
};

```

更多详细信息请参阅 [config/config.default.js](config/config.default.js)。

## 示例
错误抛出示例
```js
throw new UserRequestError("u-token不能为空", "xxx", data);
```


## 问题与建议

请在此处[提交问题](https://github.com/eggjs/egg/issues)。

## 许可证

[MIT](LICENSE)