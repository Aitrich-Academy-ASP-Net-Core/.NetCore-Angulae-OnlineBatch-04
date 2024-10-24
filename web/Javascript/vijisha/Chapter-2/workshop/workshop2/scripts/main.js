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


        let Aboutme=document.getElementById("AboutMe")

        let  Aboutadd=document.getElementById("AboutButton")
        Aboutme.style.display='block';
        Aboutadd.style.display='block';

    }else if(buttonVal=="button4"){

        let resume=document.getElementById("resume")

        let  Aboutresume=document.getElementById("resumeButton")
        resume.style.display='block';
        Aboutresume.style.display='block';


    }else{
            let Experience=document.getElementById("Experience")
            let ExperienceButton=document.getElementById("ExperienceButton")
            Experience.style.display='block';
            ExperienceButton.style.display='block'





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
        // Create a new list item
        var li = document.createElement('li');

         // Set the text content of the list item
            li.textContent = skills[i];

             // Append the list item to the list element
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
        // Create a new list item
        var li = document.createElement('li');

         // Set the text content of the list item
            li.textContent = edu[i];

             // Append the list item to the list element
             listId.appendChild(li);
             textBox.value='';

    }
}else if(text=="Experience")
    {
var data=document.getElementById('Experience').value
var textBox=document.getElementById('Experience');
var listId=document.getElementById('Experiencelist');
var Experience=[];
Experience.push(data);
for(i=0;i<Experience.length;i++)
{

    var li=document.createElement('li')
    li.textContent=Experience[i];
    listId.appendChild(li);
   textBox.value=''
}




    }else if(text=="Aboutme")
        {
            let data=document.getElementById('AboutMe').value;
            let textbox=document.getElementById('AboutMe');
            let listId=document.getElementById('selfintro');
            let Aboutme=[];
            Aboutme.push(data)
            for(i=0;i<Aboutme.length;i++)
            {

                
                let span=document.createElement('span')
                span.textContent=Aboutme[i]
                listId.appendChild(span);
                textbox.value='';
                            }


        }else if(text=="cv")
        {
            let data=document.getElementById('resume').value
            let textBox=document.getElementById('resume')
            let listid=document.getElementById('profile')
            let cv=[];
            cv.push(data);

            for(i=0;i<cv.length;i++)
            {

                let newli=document.createElement('li')
                newli.textContent=cv[i];
                listid.appendChild(newli);
                textBox.te=''

            }




        }else{}




    


}