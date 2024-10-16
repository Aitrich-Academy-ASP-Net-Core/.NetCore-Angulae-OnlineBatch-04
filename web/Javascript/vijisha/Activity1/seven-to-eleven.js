
//qs7:-sort the array in descending order
let sort=[25,50,10,5,80]
sort.sort(function(a,b)
{

    return a-b;
})
console.log(sort);

//qsno8:-count how many number vowels are present in a given string
let Word="Abudhabi"
let Vowel="aeiouAEIOU"
let count=0
    for( let i=0;i<=Word.length;i++)
    {
        if(Vowel.indexOf(Word[i]) !==-1)
        {
        //     console.log(Vowel.indexOf(Word[i]));
            count++;
        }
            
    }
console.log(count);



    // qsno:9:Reverse the order of the array element
    
    let mark=[25,85,36,45]
    let position=mark.length;
    for(i=0;i<=mark.length;i++)
    {
        
        console.log(mark[position])
        position--;
    }

    //qsno:10:-calculate the average of three numbers stored in  variables and print the result
    let science=55;
    let maths=82;
    let english=52;
    tot=science+maths+english;
    avarage=tot/3;
    console.log(avarage);


    //qsno:11)Find the index of the specific element in the Array
    let school=["classA","classB","classC","classD"]
    let index=school.indexOf("classC");
    console.log("index of classC",index);
    
    