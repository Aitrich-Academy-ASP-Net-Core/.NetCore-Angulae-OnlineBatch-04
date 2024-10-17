
// 11.index of specific element in an Array

let fruits=["Apple","Orange","Plum","Banana"]
let indextofind="Plum"
let indextofind2="Banana"
let index=fruits.indexOf(indextofind);
let index2=fruits.indexOf(indextofind2);
console.log("The index value of plum is:-",index);
console.log("The index value of banana is:-",index2);

// 12.check whether the number is odd or even

let number=8;
if(number%2===0)
{
    console.log("The given number is even number.");
    
}
else
{
    console.log("The given number is odd number.");
    
}
// 13.Area of Rectagle

let Length=10;
let Width=5;
let Area=Length*Width;
console.log("The area of Rectangle is:-",Area);

// 14.Convert hours to Minutes

let hours=6;
let Minutes=hours*60;
console.log("The result is:-",+ Minutes+" Minutes.");

// 15.Filters out elements greater than a certain value from a numeric array
function filterArray(arr,threshold)
{
    return arr.filter (element=>element<=threshold)
}
let numbers=[5,10,15,20,25];
let threshold=15;
let filteredArray= filterArray(numbers,threshold);
console.log("Filtered array:",filteredArray);

// 17.convert a temperature from celsious to farenheit 
let celsious=25;
let farenheit = (celsious*9/5)+32;
console.log(celsious +"C is"+ farenheit+" F.");

// 18.sum of all even numbers in an array

function SumOfEvenNumbers(arr)
    {
        let sum=0;
        for(let i=0;i<arr.length;i++)
        {
         if(arr[i]%2===0)
         {
            sum+=arr[i]
         }
        }
        return sum;
    }
    let numberss=[3,2,8,20,5,2];
    let sumEven=SumOfEvenNumbers(numberss);
    console.log("The sum of all even numbers is:-", sumEven);

    19.// Calculation of BMI

    let weight=65
    let height=1.75
    let bmi=(70/(1.75)**2)
    console.log("BMI is:-",bmi);
    

    // 20.leap year or not
    function isLeapYear(year)
    {
    if((year %4===0 && year% 100!==0) ||(year % 400===0))
    {
        return true;
    }
        else
        {
            return false;
        }
    }
        let year=2003;
        if (isLeapYear(year))
        {
            console.log(year+" is a leap year.");  
        }
        else
        {
            console.log(year+" is not a leap year.");    
        }
        // 21.multiply with 2 and store in new array
        
        const originalArray = [1, 2, 3, 4, 5];
        const newArray = [];
        
        for (let i = 0; i < originalArray.length; i++) {
          newArray.push(originalArray[i] * 2);
        }
        
        console.log(newArray);
        

    // 22.Average of five numbers
    let digits=[10,20,30,40,50];
    let sum=0;
    for(let i=0;i<=digits.length;i++)

        {
            sum=sum+digits[i];
        }
let average= sum/digits.length;
console.log("The average is:",sum);

// 23.Take 1st name and 2nd name sperately and combine to form one name
 let firstName="Aswathy"
 let lastName="Rajan c"
 let fullName=firstName+lastName;
 console.log(fullName);

//  24.Total price of an item after apply discount

let originalPrice=500;
let discountPercent=50/100;
let discountAmount=500*(50/100)
let discountedPrice=originalPrice-discountAmount;
console.log(discountedPrice);

//  25.Find total cost of an item by adding its price and tax

let realPrice =10000;
let tax       =18/100;
let taxRate=(10000*(18/100))
let totalCost =realPrice+taxRate;
console.log( "Real Price:-",realPrice + " Tax Rate:-",taxRate);
console.log("Total cost is:-",totalCost);

// 26.check an Array contains specific element
function containsElement(arr, element) 
{
    for (let i = 0; i < arr.length; i++)
    {
         if (arr[i] === element) 
        {
        return true;
         }
    }
    return false;
  }
  const array = [1, 2, 3, 4, 5];
  console.log(containsElement(array, 3)); 
  console.log(containsElement(array, 6)); 

//  27.convert kilometer to miles
let distance=20;
const value=0.621371;
let miles=distance*value;
console.log("The distance in kilometer:-",distance+ "km");
console.log("The distance in miles after conversion:-",miles+ "mile");

// 28.sum of two values
let number1=50;
let number2=60;
let Sum =number1+number2;
console.log("Sum of two variables:-",Sum);

// 29.Multiplication of two Variables

let value1=60;
let value2=25;
let result=value1*value2;
console.log("Result is:-",result);

// 30.Combines Different strings to one Address String

let street="Nattika";
let city=" Trissur";
let state=" Kerala ";
let zipCode= 680566;
// let address= street+ city+ state+ zipCode;
console.log("The Address is:-","street:-",street + "city:-",city + "state:-",state + "zipcode:-",zipCode );








 










