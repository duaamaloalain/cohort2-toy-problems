/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
<<<<<<< HEAD
   var Stack = function() {
   	this.stack=[];
   	this.counter=0;


   // add an item to the top of the stack
   this.push = function(value){
   	this.stack.push(value);
   	this.counter++;
=======
 var Stack = function() {
  this.stack=[];

   // add an item to the top of the stack
   this.push = function(value){
>>>>>>> f1996fc46a552df71db210c9733275ae9f4788cf
   };

   // remove an item from the top of the stack
   this.pop = function(){
<<<<<<< HEAD
   	if (this.counter >0){
   		var del=this.stack.pop();
   		delete this.stack[-- this.counter]
   		return del;
   	};

   // return the number of items in the stack
   this.size = function(){
   	return this.counter;
   };
=======
   };

   // return the number of items in the stack
   this.size = function(){
   };
 };
>>>>>>> f1996fc46a552df71db210c9733275ae9f4788cf

 /**
   * Queue Class
   */
<<<<<<< HEAD
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
=======
 var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   var inbox = new Stack();
   var outbox = new Stack();

   // called to add an item to the `queue`
   this.enqueue = function(value){
     
     }
   };

   // called to remove an item from the `queue`
   this.dequeue = function(){
    }
>>>>>>> f1996fc46a552df71db210c9733275ae9f4788cf
   };

   // should return the number of items in the queue
   this.size = function(){
<<<<<<< HEAD
   	this.count;
   };
};
=======
   };
 };
>>>>>>> f1996fc46a552df71db210c9733275ae9f4788cf
