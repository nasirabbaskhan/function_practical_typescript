// In function we assign the type of parameter of function in TypeScript
// function greeting(name: string) {
//   console.log(`Hello ${name}`);
// }
// greeting("nasir");
// there are four types of parameter
// 1. Required Parameter
// 2. Optional Parameter
// 3. Default Parameter
// 4. Rest parameter
// 1. Required Parameter
function greeting1(name, nickName) {
    console.log(`Hello ${name} ${nickName}`);
}
// greeting1("nasir", "Alexender");
// 2. Optional Parameter
function greeting2(name, nickName) {
    console.log(`Hello ${name} `, nickName);
}
//greeting2("nasir");
// 3. Default Parameter
function greeting3(name = "Dear Alexender") {
    console.log(`Hello ${name} `);
}
//greeting3();
// 4. Resting parameter is a collection of array that initiliaze at the end of parameters..
function greeting4(name, ...nickName) {
    console.log(`Hello ${name} ${nickName}`);
}
greeting4("Nasir Abbas", "Alex", "Alexender", "Alexender is the greate");
// return type of function
function func1(name) {
    return name;
}
let prin = func1("Nasir");
console.log(prin);
export {};
