// 1.Total cost of an Item
var price = 10000;
var shippingFee = 2000;
var totalCost = price + shippingFee;
console.log("totsl cost is:", totalCost);

// 2. Delete First element from array
let array = [1, 2, 3, 4, 5]
console.log("The given array is:-",array);
array.shift();
console.log("The array after deleting first element:-",array);

// 3.Concatenates two different strings in to one string
let string1="God is";
let string2=" Love";
let string=string1+string2;
console.log("The combined string is:-",string);

//4. Delete last element of the array

let array1 = [1, 2, 3, 4, 5]
console.log("The given array is:-",array1);
array1.pop();
console.log("The array after deleting last element:-",array1);

// 5.Delete  2nd and 3rd element of arry using splice method
let arraydisplay=[1,2,3,4,5];
console.log("The given array is:-",arraydisplay);
arraydisplay.splice(1,2);
console.log("New array after deletion of 2nd and 3rd element",arraydisplay);

// 7.program to sort the array in asenting order
arraydisplay=[5,3,1,6,4]
console.log("The given array is:-",arraydisplay);
arraydisplay.sort((a,b)=>a-b);
console.log("New array after deletion of 2nd and 3rd element",arraydisplay);

// 8.counts the number of vowels present in given string and prints the count

// function countVowels(str)
// {
//     const vowels='aeiouAEIOU';
//     let count=0;
//     for(let char of str)
//         {
//          if(vowels.includes(char))
//          {
//             count++;
//          }
//         }
// return count;  
//     }
// let strings="hello World";
// console.log("Number of vowels:-",count);

// 9.Reverse the order of the array elements

let arrayorder=[2,6,8,10,12];
console.log("The given array is:-",arrayorder);
arrayorder.reverse();
console.log("The given array  elements in reverse order is:-",arrayorder);

// 10.Average of three numbers

let a=20;
let b=30;
let c=40;
let number=3;
let average=(a+b+c)/number;
console.log("Average of three numbers is:-",average);



















