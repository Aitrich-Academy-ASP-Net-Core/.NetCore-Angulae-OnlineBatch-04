// total cost
let icost=1000;
let scost=200;
let tcost=icost+scost;
console.log(tcost);

// delete first element of an array

let arr=[1,2,3,4];
let deleted=delete arr[2];
console.log("Deleted Element",deleted);
console.log("Remaining Elements",arr);

//  Write a JavaScript program to delete the last element of the array.


let arr1=[1,2,3,4];
arr1.length=arr1.length-1;
console.log(arr1);

// Write a JavaScript program that declares two string variables and concatenates them into one string, then prints it.

const arr2 = ['apple', 'orange', 'grape','banana'];
console.log(arr2);

    const remove =arr2.splice(0,2);
    console.log(remove);

    //sort an array descending order
    
    const a1=['apple', 'orange', 'grape','banana'];
    a1.sort();
    console.log(a1);
    // count vowels in a string


let string="javascript";
let vowel=0;
for(let i=0;i<string.length;i++){
    if(string[i]=='a' || string[i]=='e'||
        string[i]=='i' || string[i]=='o'|| string[i]=='u'){vowel++;}
    
}
console.log(vowel);


// reverse the order of the array elements.
 const a2=['apple', 'orange', 'grape','banana'];
 console.log(a2);
 const a3=a2.reverse();
 console.log("Reverse of an array=",a3);


//  average 
let num1=10;
let num2=20;
let num3=30;
let average=(num1+num2+num3)/2;
console.log("average=",average);

// index
let a4=['apple', 'orange', 'grape','banana'];
let index=a4.indexOf('orange');
console.log(index);

// Even or odd

let a=10;
if(a%2==0)
{
    console.log("even");

}
else{
    console.log("odd");

}
// area of a rectangle
var length=5;
var width=10;
var area=length*width;
console.log("area of rectangle",area);
// hours  to minutes 
  let hr=5;
  let m=hr*60;
  console.log(m,"minutes")

//   filters out elements greater than a certain 
  let arr3=[20,53,45,10,65];
  let filternum=arr3.filter(num=>num>20);
  console.log(filternum);

//   converts a temperature from Celsius to Fahrenheit
let celsius=25;
let faren=(celsius * 1.8) + 32;
console.log(celsius,"Celsius equal to ",faren,"Fahrenheit");
// sum of even numbers in an array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        sum += array[i];
    }
}

console.log("sum=",sum);

// calculate BMI
let h=152;
let hm=152/100;
let w=59;
let bmi=w/hm*hm;
console.log("BMI=",bmi);

// leap year or not

let year=2016;
if(year%4==0)
{
    console.log("leap year");
}
else
{
    console.log("not leap year");
}
// multiplies each element in an array by 2 and returns the new array

let array1=[1,2,3,4,5,6];
let newarray=array1.map(Element=>Element*2);
console.log(newarray);

// average of five numbers
let n1=10;
let n2=20;
let n3=25;
let n4=32;
let n5=85;
let avg=(n1+n2+n3+n4+n5)/2;
console.log(avg);


// combine 2 name
let string1='ammu';
let string2='appu';
let combine=string1+string2;
console.log(combine);

//  total price of an item after applying a discount

let itemprice=100;
let dis=25;
let disamt=(itemprice*dis)/100;
let t=itemprice-disamt;
console.log("discount price=",t);

//  total cost of an item

let cost=1000;
let tax=12;
let  taxamt=cost*tax/100;
let totalcost=cost+taxamt;
console.log("total cost=",totalcost);

//  array contains a specific element and returns true or false.

const array3 = [1, 2, 3, 4, 5];
const elementToFind = 3;

const containsElement = array3.includes(elementToFind);
console.log(containsElement);

// converts a distance in kilometers to miles
let km=65;
let miles = km * 0.621371;
console.log("miles=",miles);

// declares two variables, assigns them numeric values, and prints their sum.

let number1=25;
let number2=12;
let sum1=number1+number2;
console.log("sum=",sum1);

//  multiplies two variables

let d1=4;
let d2=6;
let p=d1*d2;
console.log("product of 2 variables=",p);

//  program that takes street, city, state, and zip code as separate variables, combines them into one address string, and prints it.

let stret=101;
let city='Thrissur';
let state='kerala';
let zipcode=680509;
let address={stret,city,state,zipcode};
console.log(address);
