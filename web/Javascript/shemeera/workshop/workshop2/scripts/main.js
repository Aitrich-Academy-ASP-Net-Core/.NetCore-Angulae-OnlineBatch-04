function showForm(buttonVal)
{
    var id=document.getElementById('myTextBox');
    
    var skillButton=document.getElementById('myButton');


    if(buttonVal=="myButton1")
    {
    id.style.display='block';
    skillButton.style.display='block';
    }

    else if(buttonVal=="myButton2")
    {

        var id=document.getElementById('eduTextBox');
        var eduButton=document.getElementById('eduButton');
      
        id.style.display='block';
        eduButton.style.display='block';
    }

    else if(buttonVal=="myButton3")
        {
    
            var id=document.getElementById('AbtTextBox');
            var abtButton=document.getElementById('AbtButton');
          
            id.style.display='block';
            abtButton.style.display='block';
        }



    else if(buttonVal=="myButton4")
        {
    
            var id=document.getElementById('ExpTextBox');
            var expButton=document.getElementById('expButton');
          
            id.style.display='block';
            expButton.style.display='block';
        }
    



    
    else if(buttonVal=="myButton5")
        {
    
            var id=document.getElementById('resTextBox');
            var resButton=document.getElementById('resButton');
          
            id.style.display='block';
            resButton.style.display='block';
        }

    
    
}

function add(text)
{
    if(text=="skill")
    {
    var data=document.getElementById('myTextBox').value;
    var textBox=document.getElementById('myTextBox');
    var listId=document.getElementById('skillList');
    var skills=[]
    skills.push(data);
    console.log(skills);
    for(i=0;i<skills.length;i++)
    {
       
        var li = document.createElement('li');

       
            li.textContent = skills[i];

            
             listId.appendChild(li);
             textBox.value='';

    }
}

 else if(text=="edu")
 {

    var data=document.getElementById('eduTextBox').value;
     var textBox=document.getElementById('eduTextBox');
     var listId=document.getElementById('eduList');
     var edu=[]
    edu.push(data);
     console.log(edu);
    for(i=0;i<edu.length;i++)
    {
     var li = document.createElement('li');

             li.textContent = edu[i];
             listId.appendChild(li);
              textBox.value='';

    }
 }

 else if(text=="abt")
    {
   
       var data=document.getElementById('AbtTextBox').value;
        var textBox=document.getElementById('AbtTextBox');
        var listId=document.getElementById('abtList');
        var abt=[]
       abt.push(data);
        console.log(abt);
       for(i=0;i<abt.length;i++)
       {
        var li = document.createElement('li');
   
                li.textContent = abt[i];
                listId.appendChild(li);
                 textBox.value='';
   
       }
    }

    else if(text=="exp")
        {
       
           var data=document.getElementById('ExpTextBox').value;
            var textBox=document.getElementById('ExpTextBox');
            var listId=document.getElementById('explist');
            var exp=[]
           exp.push(data);
            console.log(exp);
           for(i=0;i<exp.length;i++)
           {
            var li = document.createElement('li');
       
                    li.textContent = exp[i];
                    listId.appendChild(li);
                     textBox.value='';
       
           }}

           else if(text=="res")
            {
           
               var data=document.getElementById('resTextBox').value;
                var textBox=document.getElementById('resTextBox');
                var listId=document.getElementById('resumelist');
                var res=[]
               res.push(data);
                console.log(res);
               for(i=0;i<res.length;i++)
               {
                var li = document.createElement('li');
           
                        li.textContent = res[i];
                        listId.appendChild(li);
                         textBox.value='';
           
               }
            }
        


}