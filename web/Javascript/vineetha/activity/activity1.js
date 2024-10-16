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
  arr3.filter(num=>num>20);
  console.log(arr3);

// Even or odd

let a=10;
if(a%2==0)
{
    console.log("even");

}
else{
    console.log("odd");

}