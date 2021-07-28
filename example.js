const Queue = require('./index')

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
