//Name function
function add(x: number, y: number): number {
  return x + y;
}
add(2, 3);

//Anonymus function
let add1 = function (x: number, y: number): number {
  return x + y;
};
add1(2, 3);

//Anonymus function with expliit type
let add2: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
add2(2, 3);

//Anonymus function, type name does not mattor
let add3: (baseValue: number, increment: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
add3(2, 3);

//lamda function oe arrow function
let add4 = (a: number, b: number) => a + b;
// let add4 = (a: number, b: number) => { return a + b};
add4(2, 3);

//calback function
type greetfunction = (x: string) => void;
function greeter(fun: greetfunction) {}
// here fun function is used as parameter is called callback function

//--------------------------Opetionl peramter------------------------------

//Name function with optionl parameter
function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
}
let result = buildName("nasir"); //ok
let result1 = buildName("nasir", "Abbas"); //ok
// let result2 = buildName("nasir","Abbas","Mughal");error for more than 2 parameter

//Anonymus function with optionl parameter
let buildName1: (firstName: string, lastName?: string) => string = function (
  firstName: string,
  lastName?: string
): string {
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
};

//--------------------------Default peramter------------------------------

//Name function with optionl parameter and Default parameter
function buildName2(firstName: string, lastName = "Khan"): string {
  return firstName + " " + lastName;
}
let result2 = buildName2("nasir"); //ok
let result3 = buildName2("nasir", "Abbas"); //ok
// let result4 = buildName("nasir","Abbas","Mughal");error for more than 2 parameter

//Anonymus function with optionl parameter and Default parameter
let buildName3: (firstName: string, lastName?: string) => string = function (
  firstName: string,
  lastName = "Khan"
): string {
  return firstName + " " + lastName;
};
let result5 = buildName3("nasir"); //ok will print naisr khan
let result6 = buildName3("nasir", "abbas"); //ok will print nasir abbas

//--------------------------Rest peramter------------------------------

//Name function with rest parameter to store multiple parameter valuse
function buildName4(firstName: string, ...restofName: string[]): string {
  return firstName + " " + restofName.join(" ");
}
let result7 = buildName4("nasir"); //ok
let result8 = buildName4("nasir", "Abbas"); //ok
let result4 = buildName4("nasir", "Abbas", "Mughal");
let employee = buildName4("nasir", "sadam", "akhtar", "khalid", "jamshaid");
console.log(result7);
console.log(result8);
console.log(employee);

//anonymus function with rest parameter to store multiple parameter valuse
let buildName5: (fname: string, ...rest: string[]) => string = function (
  firstName: string,
  ...restofName: string[]
): string {
  return firstName + " " + restofName.join(" ");
};
