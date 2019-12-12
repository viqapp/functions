class Functions {
  constructor() {
    this.middlewares = [];
  }
  middleware(...middlewares) {
    this.middlewares = middlewares || [];
    return this;
  }
  onReq(callback) {
    this.callback = callback;
    return this;
  }
}

module.exports = functions = new Functions();
