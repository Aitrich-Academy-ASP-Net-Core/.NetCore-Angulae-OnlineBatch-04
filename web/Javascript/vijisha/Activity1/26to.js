//write a javascript programme that checks if an array contains a specific element and returns true or false.
let array=["salt","sugar","peanut","pistachio"]
let check="jackfruit"
let checked;
let flag=0;
for(Obj of array)
{
checked=array.includes(check);
if(checked==true)
{
    flag=1;
    
}

}
if(flag==0)
{
console.log("false");
}else{
    console.log(" true");
    
}



//qsno27:converts distance in km into miles(km and mile store in variables1).

let distanceinkm=5;
let value=0.621371;
let miles=distanceinkm*value;
console.log(miles);


//qsno28:find sum

let firstvalue=85;
let secondvalue=21;
 let sum=firstvalue+secondvalue;
 console.log(sum);

//qsno29:find product

let numb1=50;
let numb2=20;
let product=numb1*numb2;
console.log(product);

//qsno30:write ajs program that takes street,city,state, and zip code as separate variables,combines them into one address string,and prints it.
let street="Orkkattery";
let city="kozhikkode";
let state="kerala";
let zipcode="673501";
let address=street+","+city+","+state+","+zipcode;
console.log(address);




 

