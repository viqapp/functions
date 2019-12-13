class Functions {
  constructor() {}
  name(name) {
    this[name] = {};
    this[name].middleware = [];
    this[name].onReq = callback => {
      this[name].callback = callback;
      return this[name];
    };
    this[name].mid = (...middleware) => {
      this[name].middleware = middleware || [];
      return this[name];
    };
    return this[name];
  }
}

module.exports = functions = new Functions();
