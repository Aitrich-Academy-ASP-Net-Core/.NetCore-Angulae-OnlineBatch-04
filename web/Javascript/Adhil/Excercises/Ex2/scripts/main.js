




let shortList=[

    {profpic:"./images/contact1.jpg",name:"Alex",qualification:"Qualification: MCA",experience:"3 years",loc:"Manhattan"},
    {profpic:"./images/contact2.jpg",name:"Barry",qualification:"Qualification: MSC",experience:"2 years",loc:"New York"},
    {profpic:"./images/contact3.jpg",name:"Karen",qualification:"Qualification: BTech",experience:"5 years",loc:"Washington"},
    {profpic:"./images/contact4.jpg",name:"Jessica",qualification:"Qualification: BTech",experience:"2 years",loc:"Chicago"}
    
    
   

]


function loadData()
{

    let shortList_table=document.createElement("table")
    shortList_table.classList.add("shortList_table")
    let body=document.getElementById("body")
    body.appendChild(shortList_table)
    


for (let i =0; i<shortList.length;i+=2){
    
        
        console.log(i);
        
        let row=document.createElement('tr')
        let data=document.createElement('td')
        
        data.classList.add("data")
        
        data.innerHTML=`<div>
        
                        <img src="${shortList[i].profpic}" class="pic" alt="${shortList[i].name}"><br>
                        <strong>${shortList[i].name}</strong><br><br>
                        ${shortList[i].qualification}<br><br>
                        ${shortList[i].experience}<br><br>
                        ${shortList[i].loc}

                        </div><br>`
        
        row.appendChild(data);
        

        if(i + 1 < shortList.length) {
            let data2=document.createElement('td')
            data2.classList.add("data")
            data2.innerHTML=`<div>
            
                            <img src="${shortList[i+1].profpic}" class="pic" alt="${shortList[i+1].name}"><br>
                            <strong>${shortList[i+1].name}</strong><br><br>
                            ${shortList[i+1].qualification}<br><br>
                            ${shortList[i+1].experience}<br><br>
                            ${shortList[i+1].loc}
    
                            </div>`
                            
            row.appendChild(data2);
        }

        
        shortList_table.appendChild(row)
                        



}


}