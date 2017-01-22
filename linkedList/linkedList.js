/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';
	

var LinkedList = function(){
	this.tail=null;
	this.head=null; 
};




LinkedList.prototype.addToTail=function (value) {
	 var x=Node(value); 
    if(!this.head){
      this.head=this.tail=x;
    }else{
      this.tail.next=this.tail=x;
    }
}



LinkedList.prototype.removeHead=function () {
	var del = this.head.value; 
	this.head= this.head.next ; 
	return del ; 
}


LinkedList.prototype.contains=function (target) {
	var temp = this.head ; 
	while(temp.next!== null ){
		if (temp.value === target){
			return true 
		}else {
			temp=temp.next ; 
			if (temp.value === target){
				return true 
			}
		}
	}
	return false  
}


var Node = function(value) {
	var node = {};

	node.value = value;
	node.next = null;

	return node;
}
