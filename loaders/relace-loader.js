const loaderUtils = require("loader-utils");
const validateOptions = require("schema-utils");

const schema = {
  type: "object",
  properties: {
    text: {
      type: "string"
    }
  }
};

module.exports = function (source) {
  this.cacheable && this.cacheable(); // 使用缓存
  const options = loaderUtils.getOptions(this);
  validateOptions(schema, options, "relace-loader");
  const result = source.replace("world", options.text);
  // return result; // 直接返回
  // this.callback(null, result); // callbackFun同步返回
  const callbak = this.async(); // 异步返回
  setTimeout(() => {
    callbak(null, result);
  });
};
