# Cloud Functions | viq.app

> Package to create and use viq.app cloud functions

## Installation

In your project directory run:

```bash
# using yarn
$ yarn add @viq/functions

# using npm
$ npm install @viq/functions
```

## Usage

```javascript
const functions = require('@viq/functions');

// Express-style request accepting all HTTP methods
functions.path('/helloWorld').onReq((req, res) => {
  res.send('Hello world');
});

// Adding middleware
const someMiddleware = (req, res, next) => {
  req.foo = 'bar';
};

functions
  .path('/foo')
  .mid(someMiddleware)
  .onReq((req, res) => {
    res.send(req.foo); // => 'bar'
  });

module.exports = functions;
```
