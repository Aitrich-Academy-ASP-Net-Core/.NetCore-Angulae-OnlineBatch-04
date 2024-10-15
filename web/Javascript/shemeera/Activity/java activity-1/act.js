//1
var price=30;
var shippingfee=40;
var total=price+shippingfee;
console.log(total);

//2
let myArray=[1,2,3,4];
myArray.shift();
console.log(myArray);


const fruits=["mango","banana","orange"];
fruits.shift();
console.log(fruits);

//3
let firstName="shemeera";
let secondname="razak";
console.log(firstName+secondname);


//4
let colors=["blue","pink","orange"];
colors.pop();
console.log(colors);

//5
let fruit=["apple","banana","grapes","plum"];
fruit.splice(1,2);
console.log(fruit);


//7
let array=[2,3,1,5,4];
array.sort();
console.log(array);


//8
let string="webdeveloper";
let vowel=0;
for(let i=0;i<string.length;i++){
    if(string[i]=='a' || string[i]=='e'||
        string[i]=='i' || string[i]=='o'|| string[i]=='u'){vowel++;}
    
}

console.log(vowel);

//9
let color=["blue","pink","orange"];
color.reverse();
console.log(color);


//10
var num1=30;
var num2=48;
var  num3=28;
var result=(num1+num2+num3)/3;
console.log("average:"+result);

// 11 index
let frt=["apple","banana","grapes","plum"];
let index=frt.indexOf("grapes");
console.log(index);

// 12 odd or even
let no=5;
let reminder=(no % 2)
if(reminder==0){
    console.log("is a even number");
}else{
    console.log("number is odd")
}


//13
let length=5;
let width=2;
let area=length*width;
console.log("area of a rectangle:"+area);



// 14 convertion of hours to minutes
const hours=5;
const minutes=hours*60;
console.log(minutes+"minutes");


// 15 filtersout

 let age=[45,35,55,65];
 age.filter(num=>num>35);
 console.log(age);
 
 


//17
const celsuiusToFahrenheit=(celsuius)=>{
    return(celsuius*9)/5+32;

};
console.log("result",celsuiusToFahrenheit(24));



// 18 even numbers
 let nums=[2,5,11,16];
 let sum=0;
 for(i=0;i<=nums.length;i++){
    if(nums[i]%2==0){
        sum+=nums[i];
    }
 }
console.log(sum);


// 19 bmi
let weight=25;
let height=20;
const BMI=weight/height*height;
console.log("BMI="+BMI);





// 20 leapyear
let year=2024;
if(year%400==0){
    console.log("is a leapyear");
} else{
    console.log("not a leap year");
    
}


//21
 let digits=[3,8,10,14];
 let newnum;
 for(i=0;i<digits.length;i++){
    newnum=digits[i]*2;

 }
console.log("21:"+digits);

 





//23
 let firstname="john";
 let lastname="ronald";
  console.log(firstname+lastname);





// 24 totalprice

const priceab=68;
const discount=40;
let totalpriceab=priceab*discount/100;
console.log(totalpriceab);


// 25 totalcost

const itemprice=500;
const tax=7.25;
let totalitemprice= 7.25/100*itemprice;
console.log(totalitemprice);




// 26 
const fruitsa=["banana","apple","orange","grape"];
console.log(fruitsa.includes("apple"));
console.log(fruitsa.includes("orange"));





//27 convert
function convert(){
var km=5;
const factor=0.621371;
const miles=km*factor;
console.log(miles);
}



//28
const number1=25;
const number2=35;
const nototal=number1+number2;
console.log(nototal);


//29
const pricea=14;
const priceb=25;
const totalprice=pricea*priceb;
console.log(totalprice);



// 30 address
let street="Gandhi streets";
let city="Ernakulam";
let state="kerala";
let code="6853565";
let  combine=street+" "+city+" "+state+" "+code;
console.log(combine);

