class Queue {
    constructor(container = []){
      this.container = container
    }
    addToQueue(el){
      this.container.push(el)
    }
    removeFromQueue(){
      return this.container.shift()
    }
  }
  
  module.exports = Queue;
  