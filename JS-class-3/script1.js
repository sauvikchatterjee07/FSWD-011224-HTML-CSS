// console.log("Hiiii Hello")

// var
// let & const

// Primitive:

// 1. Number
// 2. string
// 3. Bool
// 4. BigInt
// 5. Null
// 6. Undefined
// 7. Symbol


// NaN

// Non Primitive Type Data:

// 1. Array []

// 2. Linear DS
// 1. Homogeneous / Heterogeneous 
// 3. Indexed Collection Elements
// 4. Contiguous Memory Aloocation

// let arr = [10, 20, [1, 2, 3], 40, "Hello World", true, false]

// let arr1 = [[1, 2, 3],
//             [4, 5, 6],
//             [7, 8, 9]];

// console.log(arr1);

// arr2 = [1, 2, 3]


// console.log(arr[4]);
// console.log(arr[2][1]);


// var a = 10

// 2. Object

//If this is a JavaScript OBJ then your Key may not be String
// JSON -> JS Object Notation

// Key:Value

// let obj = {
//     "name": "Bengal Coding Academy",
//     "Age": 2,
//     "Courses": ["FSWD", "C/C++ with DSA", "Python Data Science"],
//     "location": "Kolkata",
//     "isVirtual": true,  
// };

// console.log(obj.location);
// console.log(obj.location);
// console.log(obj.location);





// var a = 10

// console.log(a, typeof(a), typeof(typeof(a)));


//typeof(typeof(anything)) is always String

// var b = String(a)
// console.log(b, typeof(b));

// ""
// ''
// ~ -> tilde

// `` -> back tick

// console.log("Bengal Coding Academy")
// console.log('Bengal Coding Academy')

// var name = "Pol"

// console.log(`Welcome to Bengal Coding Academy ${name}, How are your ${name}`)

// console.log("Welcome to Bengal Coding Academy " + name, ", How are you " +name);

// isHungry = false

// console.log(typeof(isHungry));

// console.log(typeof(num));

// console.log(typeof(null));

// console.log(0/0);

// console.log(typeof(NaN));

// console.log(isNaN("10000"))


// String:





// 1. trim()
// let str ="Bengal Coding Academy";

// console.log(str.trim());
// 2. charAt()
// console.log(str.charAt(str.length + 2));

// 3. concat()

// let a = "hello"
// let b = "world"

// let c = b.concat(a);

// console.log(c);

// 4. indexOf()

// console.log(a.indexOf('l'));


// 5. lastIndexOf()

// console.log(a.lastIndexOf('l'));

// Slice, Splice


// Truthy values: true, {}, [], 45, 56, 7866, 1, "0", "bengalcodingacademy", "false", Infinity, -Infinity

// Falsy values: 0, false, '', -0, NaN, undefined, null


// let a = 18 > 20;

// let b = 87;
// c = 87;



// console.log(c <= b);

// Arithmatic Operators:

// +, -, *, /, %, **


// Comparison operators: 
// > , <, >=, <=, ==, ===



// let tr = !60


// let guessedNumber = 0


// if(guessedNumber >= 0 && guessedNumber < 3){
//     console.log("i am from if block");   
// }

// else if(guessedNumber > 3 && guessedNumber < 7){

//     console.log("i am from first else if block");
// }

// else if(guessedNumber > 7 && guessedNumber < 10){
//     console.log("i am from second else if block");
// }

// else{
//     console.log("i am from else block");
// }


// let a =5
// if(a <= 5){
//     if( a <= 5){
//         console.log("I am in nested if");
        
//     }
//     else{
//         console.log("i am in nested else");
        
//     }
// }


// 1. While 
// 2. do-while
// 3. For loop
// 4. For in loop
// 5. for of loop

// let a = 5;

// while(a >= 0){
//     console.log(a);
//     a = a-1;
// }
// let a = 5;

// do{
//     console.log(a);
//     a = a-1;

// }while(a >= 0)


// Functions:

// 1. We can call the function
// 2. Function definition


// let callMePlease = (a) => {
//                         console.log(a); //S1
//                     }

// // function hello(a, b){
// //     console.log(a);
// // }


// function f1(bca){
//     console.log("i am f1() function");
//     bca();
    
// }


// function f2(hellowordl){ //This is called higher order function
//     console.log("I am f2() function");
//     let newFunc = () => {
//         console.log("Carry me");
//     }
//     hellowordl(newFunc);
       
// }

// f2(f1);

// let a = 40;
// let b = 20;

// (function findSmaller(){
//     a > b ? console.log("a is bigger") : console.log("a is smaller"); //Ternary Operator
// })() //Immediately invokable function



// findSmaller();



// condition ? statement 1 : statement 2

// ? : => Ternary Operator. 


// let a = "Hello";

// hello(a); //Function calling
// callMePlease(a); //Function calling


//Hoisting

// 2 Phases: 

// 1. Creation Phase
// 2. Execution Phase

// In creation phase the entire code will be scanned and after that is does something called hoisting. The variables declared with let & const keyword will get assigned with a value called 'undefined'


// console.log(a, b);

// let a = 20;

// // console.log(a, b);

// let b = 30;

// console.log(a, b);


// let a = 20;
// console.log(a)

// function callMe(){
//     let a = 30
//     console.log(a,b)
// }

// let b = 90
// callMe()


// function callMe(){
//     let a = 1;
//     let x = function (){
//         console.log(2 * a);
//     }
//     x();
// }

// let a = 78;
// callMe()


// let obj1 = {
//     name : "Bengal Coding Academy",
//     age : "3",
//     location : "WB"
// }

// let obj2 = obj1;

// obj2.location = "India";

// console.log(obj1.location, obj2.location);

// function sum (a, b){
//     let c = a + b;
//     return c;
// }

// let sum = function(a, b){
//     let c = a + b;
//     return c;
// }

// let sum = function(a, b){
//     return a + b;
// }

// let sum = (a, b) =>{
//     return a+b;
// }


// let sum = (a, b, c) => a*b*c;

// let result = sum(10, 20)
// console.log(result);

// console.log(sum(10, 20, 30));



// let a = 20;

// function callMe(){
//     let test = function(){
//         console.log(2 * a);
//     }
//     return test;
// }

// callMe()();

// let result = callMe();
// console.log(typeof(result));

// result();


// let a = 20;

// function callMe(){
//     let test = function(){
//         let test2 = function(){
//             console.log(2 * a);
//         };
//         return test2;
//     };
//     return test;
// }

// callMe()()();


// Higher Order Fn

// let f2 = function(x1, x2){
//     console.log("Hello Everyone1!");
//     x1(x2);
    
// }
// let f3 = function(y2){
//     console.log("Hello Everyone2!");
//     y2();
    
// }
// let f4 = function(){
//     console.log("Hello Everyone3!");
    
// }

// let f1 = function(f2, f3, f4){
//     f2(f3, f4);

// }

//Here f1 is a higher order function
//f2, f3, f4 are callback functions



// CallBack Function
// Function returning another Function


// function callMe(func){
//     var a = function(){
//         return "Hello Hi!!"
//     };
//     func();
//     return a;
// }

// function f1(){
//     console.log("I am a function");
    
// }

// console.log(callMe(f1)());

// console.log(a);



// {
//     var a = 30;
// }


// console.log(a);

// {
//     let x = 50;
//     const y = 40;
// }

// console.log(x, y)


// Hoisting
// Closure
// Async JS
// higher order function
// Map filter reduce forEach

// let cbfn = ele => console.log(ele);

// let arr = [10, 32, 67, 54, 78, 52];

// let sum = 

// for(let i = 0; i<arr.length; i++){
//     sum = sum + arr[i]
// }

// let addition = arr.reduce((acc, ele)=>{
//     return acc + ele
// });



// let filteredArray = arr.filter(ele=>ele >= 50)

// console.log(addition);



// arr.forEach((ele, idx, arr) => console.log(ele, "---->", idx, "---->", arr));

// let gracedNumber = arr.map(ele=>ele + 5)

// console.log(gracedNumber);





// function cbfn(ele){
//     console.log(ele);
// }


// console.log(window);
// console.log(this);


// function aahello(){
//     console.log("Hi everyone!");
// }
// function aahi(){
//     console.log("Hi everyone!");
// }

// aahello();
// window.aahello();
// this.aahello();


// console.log(window);


// let obj = {
//     name : "Bengal Coding Academy",
//     age : "3 Y",
//     isCertified : true,
//     job: function(){
//         // console.log("Coding");
//         console.log(this);
        
//     },
//     courses: ["FSWD", "JRM", "DSA"], 
//     obj2: {
//         student : ["Sagnik", "Pol", "Arju", "Suman"],
//         time : "9:30 am to 11: 30 am IST Sat Sun",
//         activity: function(){
//             // console.log("Coding Tutorial");
//             console.log(this);
            
//         }
//     }
// }

// obj.obj2.activity();

// console.log(obj['obj2']['student'][2]);


// console.log(obj['name']);

// obj['job']();


// obj.obj2.student[3]

// obj.obj2.activity()


// obj.courses.forEach((ele, idx) =>console.log(ele, "---->", idx))

// console.log(obj.courses[2])


// let a = '10';
// let b = 10

// console.log(a === b); //strict comparison operator


// console.log(typeof(a), typeof(b));





// let obj1 = {
//         name : "Bengal Coding Academy",
//         age : "3 Y",
//         isCertified : true,
//     };


// obj2 = {...obj1} //Shallow Copy




// obj2.age = "5 Y"

// console.log(obj1.age, obj2.age);


// Syntax : {...obj1}

// let obj2 = obj1; //Deep Copy

// obj2.age = "5 Y";

// console.log(obj1.age, obj2.age);


// let arr1 = "Hello";

// let arr2 = [45, 67, 89, ...arr1, 123, 456, 987]

// console.log(arr2);

// console.log(window);

// function f1(a, b, c){
//     return a + b + c;
// }

// console.log(f1(5, 6, 7))

// let print = function(a, b, c){
//     console.log(a+b+c);
// }

// let print = (a, b, c)=>{
//     console.log(a+b+c);
// }

// let print = (a, b, c) => console.log(a+b+c);

// let print = (a,b,c) => console.log(a+b+c);

// print(10, 20, 30)

// let f1 = a => console.log(a);

// f1(20)

// let a = 20;
// let b = 30;


// 1. getElementById(), => 1 ref
// 2. getElementsByClass(),
// 3. getElementsByTagName(),
// 4. querySelector()

getElement














