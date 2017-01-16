/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
   var Stack = function() {
   	this.stack=[];
   	this.counter=0;


   // add an item to the top of the stack
   this.push = function(value){
   	this.stack.push(value);
   	this.counter++;
   };

   // remove an item from the top of the stack
   this.pop = function(){
   	if (this.counter >0){
   		var del=this.stack.pop();
   		delete this.stack[-- this.counter]
   		return del;
   	};

   // return the number of items in the stack
   this.size = function(){
   	return this.counter;
   };

 /**
   * Queue Class
   */
   var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   this.inbox = new Stack(),
   this.outbox = new Stack(),
   this.count=0,

   // called to add an item to the `queue`
   this.enqueue = function(value){
   	this.inbox.push(value);
   }


   // called to remove an item from the `queue`
   this.dequeue = function(){
   	if (!this.outbox.length){
   		if (!this.inbox.length){
   			return undefined; 
   		}
   		while(this.inbox.length){
   			this.outbox.push(this.inbox.pop());
   			this.count++;
   		}
   	}
   	return this.outbox.pop();
   };

   // should return the number of items in the queue
   this.size = function(){
   	this.count;
   };
};