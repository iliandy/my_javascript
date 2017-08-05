var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: number[] = [1,2,3,4];
var myObj: object = { name:'Bill'};
var anythingVariable: any = "Hey";
anythingVariable = 25;
var arrayOne: boolean[] = [true, false, true, true];
var arrayTwo: any[] = [1, 'abc', true, 2];
myObj = { x: 5, y: 10 };
// object constructor
class MyNode {
  val: number;

  constructor(val: number) {
      this.val = 0;
      this.val = val;
  }
  doSomething() {
      this.val = 10;
  }
}

let myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);

// Never type (will never reach the end of the function)
function myFunction(): void{
    console.log("Hello World");
    return;
}
// Void (returns nothing)
function sendingErrors(): never{
	throw new Error('Error message');
}
