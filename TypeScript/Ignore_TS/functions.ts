//function with a return value
function add(n1: number, n2: number) {
  return n1 + n2;
}

//function without a return value (basicaly a methode)
function printResult(num: number): void {
  console.log("printResult = " + num);
}

//Testing functions
printResult(add(3.14, 380));

//We can asign a function to variable
// let combineValue : Function = add;

//Function type in typescript
let combineValue: (x: number, y: number) => number;
combineValue = add;
console.log("CombineValue = " + combineValue(89, 5));

//Callback and how it works
function addAndHandle(x: number, y: number, cb: (res: number) => void) {
  const result = x + y;
  cb(result);
}

addAndHandle(10, 5, (result) => {
  console.log("addAndHandle = " + result);
});
