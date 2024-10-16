//qsno12:check given number is odd or even?

// let number=57;
// if(number%2==0)
// {
//     console.log(number,"is even number");
    
// }else{
//     console.log(number,"is an odd number");
    
// }


//qsno13:Find Area of rectangle given its length and width stored in a variable and print the result>
// let length=450;
// let width=60;
// Area=length*width;
// console.log("Area of Rectangle is:",Area);

//qsno14:converts hours (stored in avariables)to minuts and print the result.
// let hour=5;
// let minuts=hour*60;
// console.log(hour," Hour=",minuts,"minuts");


//qsno15:write a Js programme that filters out elements greater than a certain value from anumeric array?

let value=[50,82,89,105,79,300]
let flag=100;
let store;
for(num of value)
{
    // console.log(num);
    if(num>flag)
    {
        console.log(num);
        
        store=value.indexOf(num);
        value.splice(store,1)
        
        
        
    }
   
}

console.log(value);
