//qsno17:Converts a temparature(store in a variables) from celsius to Farenheit and print the result

let temparature=37;
let Farenheit=temparature*9/5+32;
console.log( temparature+" Oc means" ,  Farenheit,"F");


//qsno18:sum of all even numbers in an array.

let number=[210,85,75,698,154,20]
let store=0;
for(num of number)
{
    if(num%2==0)
    {
        store=store+num;

    }
}
console.log(store);

//qsno19:Calculate BMI given weight in kg, height in meters then print the BMI value.


let weight=68; //kg
let height=1.6; //m
let BMI=weight/(height)**2;

console.log(BMI);

// qsno20:check leap year or not

let year=2025;
if(year%4 !== 0)
{
console.log(year,"is not a leap year");

}else{
    console.log(year,"is a leap year");
    
}




