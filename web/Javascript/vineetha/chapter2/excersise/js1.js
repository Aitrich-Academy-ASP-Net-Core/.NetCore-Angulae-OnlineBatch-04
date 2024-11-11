var interviewList=[
    {image:"images/Group 1126.png",jobTitle:"Social Media Assistant",location:"online",date:"16-06-23",time:"10 am"},
    {image: " images/Logo.png" ,jobTitle:"Brand Designer",location:"offline",date:"19-06-23",time:"12 pm"},
    {image: " images/Logo 27.png" ,jobTitle:"Customer manager",location:"online",date:"20-06-23",time:"12 pm"},
];
listInterview();
function listInterview()
{
    // let inerviewList=document.createElement('div');
    let table=document.createElement('table');
    let body=document.getElementById('body');

   
    
    for(let i=0; i<=2;i++)
    {
        console.log(i);
        let row=document.createElement('tr');
       let td=document.createElement('td');
       let content = document.getElementById('content');
    
    //    td.textContent=interviewList[0].jobtitle;
       td.innerHTML=`<div>
                    <img src="${interviewList[i].image}",alt=" "><br><br>
                     <strong>${interviewList[i].jobTitle}</strong><br><br>
                     Location:${interviewList[i].location}<br><br>
                     Date: ${interviewList[i].date}<br><br>
                     Time: ${interviewList[i].time}
                     </div><br>`
           
      row.appendChild(td);
      
      table.appendChild(row);
    }
    content.appendChild(table);
    // document.body.appendChild(table);

}

