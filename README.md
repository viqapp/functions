# Cloud Functions | viq.app

> ### Package to create and use viq.app cloud functions

## Installation

In your project directory run:

```bash
$ npm install @viq/functions
```

## Usage

```javascript
const functions = require('@viq/functions');

// Express-style request accepting all HTTP methods
exports.funcName = functions.onReq((req, res) => {
  res.send('Yes');
});

// Adding middleware
const someMiddleware = (req, res, next) => {
  req.foo = 'bar';
};
exports.anotherFunc = functions.middleware(someMiddleware).onReq((req, res) => {
  res.send(req.foo); // => 'bar'
});
```
