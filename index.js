/**
 * 
 *  topic 
// 1. A function can be stored in a variable 

// 2.A function  can be stord in an Array
// 3. A function  can be stored as  a   object flied or property
// 4.we can  create function as needed
//5.we can pass function as  an argument
// we can return function  from another function
 */

// function 
function sayName(name) {
    return 'hello ' + name;
}




// 1. A function can be stored in a variable 

var hello = sayName;
// var fun = sayName('sohel');
// console.log(hello);
// console.log(fun);

var resualt = hello('sohel');
console.log(resualt)
var anotherHello = hello;
console.log(anotherHello('sujon hasan'));
// 2.A function  can be stord in an Array
var arr = [1, 3, 5, 56, anotherHello];
arr.push(hello('sohel'))
console.log(arr);
// 3. A function  can be stored as  a   object flied or property
var person = {
    name: 'sohel rana',
    sayName: hello('sohel rana')
}
console.log(person);
// 4.we can  create function as needed
var sum = 10 + (function() { return 20 })();
console.log(sum);
//5.we can pass function as  an argument
function wow(name, fun) {
    return fun();
};

var re = wow('sohel', hello);
console.log(re)
    // we can return function from another fuction

function base(b 2) {
    return function(n) {
        var result = 1;
        for (var i 0; i < b; i++) {
            result *= n;
        }
        return result;
    }
}
var power = base(3)(4);
power
// var squarResult = power(5);
// console.log(squarResult)
function multiply(x, y) {
    return a * b;
}
console.log(multiply(19, 50))