# egg-normal-response

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-normal-response.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-normal-response
[travis-image]: https://img.shields.io/travis/eggjs/egg-normal-response.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-normal-response
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-normal-response.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-normal-response?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-normal-response.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-normal-response
[snyk-image]: https://snyk.io/test/npm/egg-normal-response/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-normal-response
[download-image]: https://img.shields.io/npm/dm/egg-normal-response.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-normal-respons
<!--
Description here.
-->

## Install

```bash
$ npm i egg-normal-response-x --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.normalResponse = {
  enable: true,
  package: 'egg-normal-response-x',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.normalResponse = {
   outSystemError:false,
   systemErrorCode:500,
   userErrorCode:600,
   succeeCode:200,
  ignore: ["/*","*/upload/*","/assets/*","/static/*"]
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example
error 
throw new UserRequestError("u-token不能为空","xxx",data);
<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
