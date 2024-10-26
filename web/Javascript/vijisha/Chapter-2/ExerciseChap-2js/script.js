
document.addEventListener("DOMContentLoaded", function () {
    let table = document.createElement('table');
    // let body=document.getElementsByTagName('body')
    document.body.appendChild(table)
    table.classList.add('shortlist')

    // .style.border="1px"
    // .style.border.style="solid"
    // .style.border.color="black"
    // .style.border = "1px solid black";
    let shortList = [{
        url: 'image/member (1).png',
        name: "Alen",
        Qualification: "Qualification:MCA",
        Experience: "Experience:3 Year",
        Location: "Location:Banglore "
    },

    {
        url: 'image/olivia-round.png',
        name: "Sarah",
        Qualification: "Qualification:MSC",
        Experience: "Experience:2Years",
        Location: "Location:Chennai"
    },
    {
        url: 'image/p2.png',
        name: "Vivek",
        Qualification: "Qualification:Btech",
        Experience: "Experience:5 Year",
        Location: "Location:Thiruvananthapuram"
    },
    {
        url: 'image/member (2).png',
        name: "Deepak Roy",
        Qualification: "Qualification:Btech",
        Experience: "Experience:2Year",
        Location: " Location:Calicut"
    }
    ]


    let num = 0;
    let p = 0;
    for (i = 0; i < shortList.length; i++) {



        let tr = document.createElement('tr');
        //   tr.style.justifyContent="spacebetween"
        table.appendChild(tr);
        for (j = 0; j < 2; j++) {

            let td = document.createElement('td');
            tr.appendChild(td);
            //  td.style.border="1px solid green"


            let keep = ''
            // shortList.map((candidate)=>{

            let candidate = shortList[num]
            let img = document.createElement('img');
            img.src = candidate.url;
            img.style.width = "120px"
            img.classList.add('image')
            td.appendChild(img)
            delete candidate.url;
            let nam = (Object.keys(candidate)[0])
            console.log(nam);

            if (nam === "name") {
                let h3 = document.createElement('h3');
                h3.textContent = candidate.name;
                h3.style.marginLeft = "40px"
                console.log(h3.textContent);

                td.appendChild(h3)
            }
            delete candidate.name;
            for (let obj in candidate) {


                let ul = document.createElement('ul');
                td.appendChild(ul);
                let li = document.createElement('li')
                ul.appendChild(li)
                ul.classList.add('unorderedList')
                // console.log(`${obj}:${candidate[obj]}`);

                li.textContent = `\n${candidate[obj]}`
            }
            num++;
        }



    }
})
