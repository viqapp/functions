class Functions {
  constructor() {}
  path(path) {
    this[path] = {};
    this[path].middleware = [];
    this[path].onReq = callback => {
      this[path].callback = callback;
      return this[path];
    };
    this[path].mid = (...middleware) => {
      this[path].middleware = middleware || [];
      return this[path];
    };
    return this[path];
  }
}

module.exports = functions = new Functions();
