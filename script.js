var empAge = 25;
var empName = "Pria";
var empSal = 22000;
var empDesg = "Developer";

document.write("Employee age = " + empAge);
document.write("<br>");
document.write("Employee name = " + empName);
document.write("<br>");
document.write("Employee Salary = " + empSal);
document.write("<br>");
document.write("Employee Designation = " + empDesg);


var x = ++num //num = 20//21
var y = num++ //num = 10//10

//post & practice questions Post & Pre Increment(++) & decrement(--)

var num = 20;
var x = ++num;
console.log(x);//21


var numOne = 10;
var y = numOne++;//10

console.log(y);//10
console.log(numOne);//11


var val = 23;
var t = ++val;//24
val++; //25
console.log(val)//25
console.log(t);//24

var numVal = 30;
var u = --numVal//;29

numVal++;//29
console.log(u);//29
console.log(numVal);//30


var a = 40;
var b = a++;

b++;
console.log(a);//40
console.log(b);//41


var f = 50;
var g = f++;

g--;
console.log(g);//50
console.log(f);//50


var val = 10;
val++;//10
var h = --val;//10
h++;//11
console.log(h);//11
console.log(val);//10


var num = 20;
num++;//20
var t = ++num;//22
num++;//
--num//22
console.log(num, t);//22,22


var num = 10;
--num;//9
var y = ++num + 10;//20
--y;//19
console.log(y);//19
console.log(num);//10

var num = 30;
++num;//31
num++ - 10;//21
console.log(num);//22


