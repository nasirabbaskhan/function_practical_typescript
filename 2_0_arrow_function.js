//Arrow function
let sum1 = (x, y) => {
    let sum = x + y;
    return sum;
};
let sum2 = (x, y) => x + y;
let output = sum1(20, 30);
console.log(`The some of x amd y is : ${output}`);
let output1 = sum2(20, 90);
console.log(`The some of x amd y is : ${output1}`);
export {};
