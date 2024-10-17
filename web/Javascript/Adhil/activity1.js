/* Qn1 */
console.log("");

console.log("Qn1");
let price = 200;
let shipping_fee = 19;
let total_cost= price+shipping_fee
console.log("Total Cost is: "+total_cost);

/* Qn2 */
console.log("");

console.log("Qn2");
let array=[1,2,3,4,5]
console.log("Array: "+ array);
array.shift();
/*OR    array.splice(0,1) */
console.log("Array after deletion: "+array);

/* Qn3 */
console.log("");

console.log("Qn3");
let firstname="Adhil"
let lastname="PN"
let fullname= firstname+lastname
console.log("Concatenated string: "+fullname);

/* Qn4 */
console.log("");

console.log("Qn4");
let array2=[1,2,3,4,5]
console.log("Array: "+ array2);
array2.pop();
/*OR    array.splice(4,1) */
console.log("Array after deletion: "+array2);

/* Qn5 */
console.log("");

console.log("Qn5");
let array3=[1,2,3,4,5]
console.log("Array: "+ array3);
array3.splice(1,2);
console.log("Array after deletion: "+array3);

/*Qn 7*/
console.log("");

console.log("Qn7");
let array4=[4,1,3,5,2]
console.log("Array: "+ array4);
array4.sort();
console.log("Array after sorting: "+array4);

/*Qn 8 */
console.log("");
console.log("Qn8");
let word="hello"
let count=0
for (i of word){
    if(i=="a"||i=="e"||i=="i"||i=="o"||i=="u"){
        count+=1;
    }
}
console.log("There are "+count+" vowels in "+word);

/* Qn9 */
console.log("");

console.log("Qn9");
let array6=[1,2,3,4,5]
console.log("Array: "+ array6);
array6.reverse();
console.log("Array after reversing: "+array6);

/* Qn10 */
console.log("");

console.log("Qn10");
let num1=45;
let num2=200;
let num3=15;

let avg= (num1+num2+num3)/3
console.log("The average of "+num1+", "+num2+", "+num3+" is "+avg);

/* Qn11 */
console.log("");

console.log("Qn11");
let array7=[0,2,4,5,6]
let index = array.indexOf(5)
console.log("The index position is "+index);

/* Qn12 */
console.log("");

console.log("Qn12");
let even_odd=0;
let Type=typeof(even_odd)
if(even_odd%2==0){
    console.log(even_odd+" is an even number");
    
}else if((even_odd+1)%2==0){
    console.log(even_odd+" is an odd number");
    
}
else {
    console.log(Type+" input given, please provide an integer number as input");
    
}

/* Qn13 */
console.log("");

console.log("Qn13");
let length=23;
let width=10;
let area=length*width
console.log("The area of the rectangle provided length="+length+", width="+width+" is "+area);

/* Qn14 */
console.log("");

console.log("Qn14");
let hours=2.75
let mins=hours*60
console.log(hours+" hr(s) is "+mins+" min");

/* Qn15 */
console.log("");

console.log("Qn15");
let num=60
let array8=[1,23,3,44,56,60,78,88,98,100]
let array9=[]



for(i of array8){
    if(i<=num){
        array9.push(i)
    }
}
console.log("Array after filtering out numbers greater than "+num+" is: "+"["+array9+"]");

/* Qn17 */
console.log("");

console.log("Qn17");
let celsius=1
let farenheit=celsius*33.8
console.log(celsius+" degree(s) celsius is "+farenheit+" degrees farenheit");

/* Qn18 */
console.log("");

console.log("Qn18");
console.log("Array: "+"["+array+"]");
let sum=0;
for(i of array){
    if(i%2==0){
        sum=sum+i;
    }
}
console.log("Sum of even numbers in this array is "+sum);

/* Qn19*/
console.log("");

console.log("Qn19");
let weight_kg=80;
let height_m=1.6;
let height_m_sq=height_m**2
let BMI= weight_kg/height_m_sq
let roundedBMI=Math.round(BMI*10)/10
if(BMI >25 && BMI<30 ){
    console.log("Your BMI provided height as "+height_m+"m and weight "+weight_kg+"kg is: "+BMI+", thus you are overweight");
    

}else if(BMI<18.5){
    console.log("Your BMI provided height as "+height_m+"m and weight "+weight_kg+"kg is: "+roundedBMI+", thus you are underweight");
}else if(BMI>30){
    console.log("Your BMI provided height as "+height_m+"m and weight "+weight_kg+"kg is: "+roundedBMI+", thus you are obese");
}else{
    console.log("Your BMI provided height as "+height_m+"m and weight "+weight_kg+"kg is: "+roundedBMI+", thus you are in the normal BMI range");
}


/* Qn20*/
console.log("");

console.log("Qn20");
let year=2024

if(year%4==0){
    console.log(year+" is a leap year");
    
}else{
    console.log(year+" is not a leap year");
    
}

/* Qn21*/
console.log("");

console.log("Qn21");
console.log("Array: "+array);
let new_array=[]
for(i of array){
    y=i*2;
    new_array.push(y);

}
console.log("New Array: "+new_array);

/* Qn22*/
console.log("");

console.log("Qn22");
num1=20
num2=30
num3=40
let num4=50
let num5=60
avg=(num1+num2+num3+num4+num5)/5
console.log("Tha average of "+num1+","+num2+","+num3+","+num4+","+num5+" is: "+avg);

/* Qn23 */
console.log("");

console.log("Qn23");
let first_name="Adhil"
let last_name="PN"
let full_name= first_name+last_name
console.log("Full Name: "+full_name);

/* Qn24 */
console.log("");

console.log("Qn24");
let original_price=500
let discount=original_price*(10/100)
total_cost=original_price-discount
console.log("Original Price: "+original_price);
console.log("Discount: "+discount);
console.log("Total Price: "+ total_cost);

/* Qn25 */
console.log("");

console.log("Qn25");
price=1000
let tax=price*(5/100)
total_cost=price+tax
console.log("Original Price: "+price);
console.log("Tax: "+tax);
console.log("Total Price: "+ total_cost);

/* Qn26 */
console.log("");

console.log("Qn26");
console.log("Array: "+ array);
let number=5
count=0
let result
for(i of array){
    if(i==number){
        count+=1
        
    }
}
if(count>=1){
    console.log(true);
    
}else{
    console.log(false);
    
}


/* Qn27 */
console.log("");

console.log("Qn27");
let km=5
let miles=km*(62/100)
console.log("Kilometer(s): "+km);
console.log("Mile(s): "+miles);

/* Qn28 */
console.log("");

console.log("Qn28");
num1=298
num2=876
sum=num1+num2
console.log("Number1: "+num1);
console.log("Number2: "+num2);
console.log("Sum: "+sum);


/* Qn29 */
console.log("");
console.log("Qn29");

num1=12
num2=3
let product=num1*num2
console.log("Number1: "+num1);
console.log("Number2: "+num2);
console.log("Product: "+product);


/* Qn30 */
console.log("");
console.log("Qn30");

let street="Rashid Street,"
let city=" Rumeilah,"
let state=" Ajman, "
let zip_code=4988
let address=street+city+state+zip_code
console.log("Address is: "+address);

