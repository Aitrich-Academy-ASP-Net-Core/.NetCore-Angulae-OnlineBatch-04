//Question 1 -calculate Total Cost

var cost=1000;
var shippingFee=200;
var totalCost =cost+shippingFee;
console.log(totalCost);

//Question 2 -delete First element of an array

const states =["Kerala","Tamil Nadu","Karnataka","Andra Pradesh"];
states.shift();
console.log(states);

//Question 3 -program that declares two string variables and concatenates them into one string, then prints it.

var string1=" Vidya";
var string2="Narayanan";
var string3=string1+string2;
console.log(string3);
//Question 4 - Write a JavaScript program to delete the last element of the array.

const places =["Kerala","Tamil Nadu","Karnataka","Andra Pradesh"];
places.pop();
console.log(places);

//Question 5 -program to delete the 2nd and 3rd elements of the array using the splice

const jobs=["Developer","Manager","Doctor","Collector","Accountant"];
jobs.splice(1,2);

console.log(jobs);
// Question 7 -program to sort the array in ascending order

const country=["Japan","Bahrain","Oman","America","Austria","Canada","India"];
country.sort();
console.log(country);
//8. Create a program that counts how many vowels are present in a given string variable and prints the count.

let myString ="Apple is a best fruit";
const vowels = "aAeEiIoOuU";
let count=0;
for(let i=0;i<=myString.length;i++)
{  if(vowels.indexOf(myString[i])!==-1)
{
    count+=1
    
}
 
}
console.log(count);


//9.program to reverse the order of the array elements.
const jobdetails =["Aitrich","Thrissur"];
jobdetails.reverse();
console.log(jobdetails);

//10. program that calculates the average of three numbers stored in variables and prints the result.
let a =200;
let b =400;
let c= 500;
let d =(a+b+c)/3;
console.log(d);
//11.JavaScript program to find the index of a specific element in the array

const choclates=["Dairy Milk","Munch","Kitkat","5-star"];
let index = choclates.indexOf("Munch");
let index1 = choclates.indexOf("Dairy Milk");

console.log(index);
console.log(index1);

// 12.program that checks if a number stored in a variable is even or odd and prints an appropriate message

let num =13;

if(num%2==0)
{ console.log("This is an Even Number");
}
else
{
    console.log("This is an Odd Number");
}

//13. program that calculates the area of a rectangle given its length and width (stored in variables) and prints the result.

let length =20;
let width = 10;
let area= length*width;
console.log(area +"cm");

// 14.program that converts hours (stored in a variable) to minutes and prints the result.

let hour = 5;
let minutes= 60*hour;
console.log(minutes+" Minutes");

// 15. program that filters out elements greater than a certain value from a numeric array.
 
            const array=[100,25,10,50,15];
            const n =25;
           for( let i=0; i<=array.length;i++)
            {  
                if(array[i]>n)
                {  let nArray=array[i]
                console.log(nArray);
                
                }

             
           }
            
            
//17 . program that converts a temperature from Celsius (stored in a variable) to Fahrenheit and prints the result.

const celsius= 45;
const Fahrenheit= (celsius*1.8)+32;
console.log(Fahrenheit +" F");

// 18.JavaScript program that calculates the sum of all even numbers in an array.
const allnum =[12,5,7,10,20,11];
let sum =0;
for(let i=0; i<=allnum.length;i++)
{
    if(allnum[i]%2==0){
        sum+=allnum[i];
    }
    
}
console.log(sum);
//19.program that calculates BMI given weight (in kg) and height (in meters), then prints the BMI value.
let weight=63.5;
let height =153;
let BMI = 63.5/(1.53*1.53);
console.log(BMI);

//20.program that checks if a year stored in a variable is a leap year or not, printing an appropriate message
const year =2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) 
{
    console.log(year,"is a leap year.");
    
}else{
    console.log(year,"is  not a leap year.");

}

//21.JavaScript program that multiplies each element in an array by 2 and returns the new array----


const arr = [10,15,5,20];
const newArray =arr.map(n => n*2);
console.log(newArray);

//22.program that calculates the average of five numbers stored in variables and prints the result.

let n1=10,n2=2,n3=5,n4=25,n5=9;
let avg=(n1+n2+n3+n4+n5)/5;
console.log(avg);

// 23 JavaScript program that takes first name and last name as separate variables, combines them into full name, and prints it.

let fname ="MAHATMA ";
let lname ="GANDHI";
console.log(fname+lname);

// 24. program that calculates the total price of an item after applying a discount (stored in a variable) to its original price.

let price = 500;
let discount=(20/100)*500;
let totalPrice =price-discount;
console.log(totalPrice);

//25. program that calculates the total cost of an item given its price and tax rate (both stored in variables) and prints the total cost.
let pCost= 200;
let taxRate =(17/200)*100;
let sellingPrice = pCost+taxRate;
console.log(sellingPrice);

//26.JavaScript program that checks if an array contains a specific element and returns true or false.

const fruits =["Apple","Orange","Grapes","Cherry","Banana"];
const  findFruit= fruits.includes("Cherry");
console.log(findFruit);

// 27. program that converts a distance in kilometers (stored in a variable) to miles and prints the result.(use conversion formula)

let km = 150;
let dis = 150*.621371;
console.log(dis);

//28.JavaScript program that declares two variables, assigns them numeric values, and prints their sum.

let value1;
let value2;
value1=50;
value2=25;
let sumValue;
sumValue=value1+value2;
console.log(sumValue);

//29.JavaScript program that multiplies two variables containing numeric values and outputs the product.

let y1 =1000;
let y2 =55;
let pdt = y1*y2;
console.log(pdt);

// 30.JavaScript program that takes street, city, state, and zip code as separate variables, combines them into one address string, and prints it.

let St= "Queen Street ";
let cty = "Auckland ";
let sState="North-Island ";
let zip ="0600";
let adrs=St+cty+sState+zip;
console.log(adrs);

