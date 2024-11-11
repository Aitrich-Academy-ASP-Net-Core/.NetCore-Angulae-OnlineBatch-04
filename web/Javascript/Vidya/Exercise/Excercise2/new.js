const fMembers = [
    {   image:"./image/m1.png" ,
        name: "Manu",
        jobRole: "Java Developer",
        phone: "3 year",
        email: "Banglore"
       
    },
    {   image: "./image/olivia-round.png" ,
        name: "Lamiya",
        jobRole: "Marketing Executive",
        phone: "2 year",
        email: "Chennai"
        
    },
    {   image: "./image/p2.png" ,
        name: "Alexander",
        jobRole: "H R Manager",
        phone: "5 year",
        email: "Thiruvananthapuram",
        
    },
    {    image: "./image/member2.png",
        name: "Deepak Roy",
        jobRole: "System Analyst",
        phone: "2 year",
        email: "Calicut",
       
    }
];


    function createTable() {
    const table = document.createElement('table');
    table.style.width="500px";
    // table.style.borderSpacing ="30px";
    table.style.padding ="8px";
    table.style.textAlign ="left";

 
    const tbody = document.createElement('tbody');

   
        for (let i = 0; i < fMembers.length; i+=2) {
         const tr = document.createElement('tr');
      

        const td1 = document.createElement('td');
        td1.innerHTML = `
           <img src="${fMembers[i].image}"><br>
            <strong>${fMembers[i].name}</strong><br>
            Job Role: ${fMembers[i].jobRole}<br>
            Phone: ${fMembers[i].phone}<br>
            Email: ${fMembers[i].email}
        `;
    
    
    
         tr.appendChild(td1);

        
         if (i+1 < fMembers.length) {
       
            const td2 = document.createElement('td');
            td2.innerHTML = `
                <img src="${fMembers[i + 1].image}"><br>
                <strong>${fMembers[i + 1].name}</strong><br>
                Job Role: ${fMembers[i + 1].jobRole}<br>
                Phone: ${fMembers[i + 1].phone}<br>
                Email: ${fMembers[i + 1].email}
            `;
            
            tr.appendChild(td2);
        }

        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    document.getElementById('tableContainer').appendChild(table);
}
