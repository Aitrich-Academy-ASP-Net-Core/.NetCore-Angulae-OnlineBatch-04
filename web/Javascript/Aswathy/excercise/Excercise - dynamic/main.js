var shortlist=[
   { name:"Alen",image:"images/member (1).png",qualification:"MCA",experience:"3 Years",location:"Banglore"},
   { name:"Sarah",image:"images/person5.png",qualification:"MSC",experience:"2 Years",location:"Chennai"},
   { name:"Vivek",image:"/images/member (2).png",qualification:"Btech",experience:"5 Years",location:"Thiruvanathapuram"},
   { name:"Deepa",image:"images/member (3).png",qualification:"Btech",experience:"2 Years",location:"calicut"},
]
// for (i=0 ;i<=shortlist.length ;i++)
//  {
//    console.log(shortlist[i].image);
//    console.log(shortlist[i].name);
//    console.log(shortlist[i].qualification);
//    console.log(shortlist[i].experience);
//    console.log(shortlist[i].location);
// }
shortlistdata();
function shortlistdata()
{
const contentarea=document.getElementById('employee-table');
const table=document.createElement('table');
table.style.border=1;
for (let i=0 ;i<shortlist.length ;i+=2)
{
   const tr=document.createElement('tr');
  if(i<shortlist.length){
   
      const td1=document.createElement('td');
      const img1=document.createElement('img');
      img1.src=shortlist[i].image;
      img1.width=100;
      img1.height=100;
      td1.appendChild(img1);
      const div1=document.createElement('div');
      div1.innerHTML=`<b>${shortlist[0].name}</b><br>
      <p>Qualification:${shortlist[0].qualification}<br>
      Experience:${shortlist[i].experience}<br>
      Location:${shortlist[i].location}</p>`;
      console.log(div1)
      td1.appendChild(div1);
      tr.appendChild(td1);
   }
   if(i+1<shortlist.length)
   {
      const td2=document.createElement('td');
      const img2=document.createElement('img');
      img2.src=shortlist[i+1].image;
      img2.width=100;
      img2.height=100;
      td2.appendChild(img2);
      const div2=document.createElement('div');
      div2.innerHTML=`<b>${shortlist[i+1].name}</b><br>
      <p>Qualification:${shortlist[i+1].qualification}<br>
      Experience:${shortlist[i+1].experience}<br>
      Location:${shortlist[i+1].location}</p>`;
      // td2.textContent= shortlist[i+1].name+''+
      // shortlist[i+1].qualification +
      // shortlist[i+1].experience+
      // shortlist[i+1].location;
      td2.appendChild(div2);
      tr.appendChild(td2);
   }
   table.appendChild(tr);
}

contentarea.appendChild(table);
console.log(shortlist);
}
