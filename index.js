const co = require('co')

class Queue{
    constructor(concurrency=1){
        this.taskQueue =[]
        this.consumerQueue = []
        this.concurrency = concurrency
    }
    
    push(data){
       if(this.consumerQueue.length) return this.consumerQueue.shift()(data)
       this.taskQueue.push(data)
    }

    unshift(data){
        if(this.consumerQueue.length) return this.consumerQueue.shift()(data)
        this.taskQueue.unshift(data)
     }

    next(){
        var self = this 
        return new Promise(function(resolve){
            if(self.taskQueue.length) return resolve(self.taskQueue.shift())
            self.consumerQueue.push(resolve)
        })
    }
    run(doSth){
        var self = this
        for(let i=0;i<this.concurrency;i++){
            co(function*(){
                while(true){
                    doSth(yield self.next(),i)
                }
            })
        }
    }
}

module.exports = Queue