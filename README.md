<h1 align="center">Welcome to pc-queue 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/wantao666/pc-queue#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/wantao666/pc-queue/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/wantao666/pc-queue/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/wantao666/pc-queue" />
  </a>
</p>

> A queue for producer-consumer model

### ✨ [Example](https://github.com/wantao666/pc-queue/blob/master/example.js)

create one Queue with one consumer and two producer

```js
const Queue = require('pc-queue')

// 1. define queue instance
const queue = new Queue(2) //concurrency=2

// 2. consumer do something
var doSth=function(data,i){
    console.log(`consume${i}: `,data)
}

// 3. begin consume
queue.run(doSth)

setInterval(function(){
    // 4. begin produce
    queue.push(Math.random())
},1000)
```
output
```
consume0:  0.8152931321636179
consume1:  0.10340654794346626
consume0:  0.7497420856391879
consume1:  0.7854904441673309
consume0:  0.9786641059681527
```

## Install

```sh
npm install
```

## Run tests

```sh
npm run test
```

## Author

👤 **selenium39**

* Website: https://blog.csdn.net/qq_45453266
* Github: [@wantao666](https://github.com/wantao666)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/wantao666/pc-queue/issues). You can also take a look at the [contributing guide](https://github.com/wantao666/pc-queue/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [selenium39](https://github.com/wantao666).<br />
This project is [MIT](https://github.com/wantao666/pc-queue/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
