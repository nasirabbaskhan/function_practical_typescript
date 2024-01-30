//Arrow function
let sum1 = (x, y) => {
    let sum = x + y;
    return sum;
};
let sum3 = (x, y) => x + y;
let output = sum1(20, 30);
console.log(`The some of x amd y is : ${output}`);
let output1 = sum3(20, 90);
console.log(`The some of x amd y is : ${output1}`);
let returnNumberOrString; // to initilize type of arrow function
//  to define the original function
returnNumberOrString = (n) => {
    return n;
};
let res = returnNumberOrString(8);
console.log(res);
export {};
