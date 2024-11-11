

var applicantList = [
    { image: "./img2/images/Company Logo (2).png", companyname: "Social Media Assistant", location: "online", date: "16-10-23", time: "10.00am" },
    { image: "./img2/images/Logo.png", companyname: "Brand Designer", location: "offline", date: "19-06-23", time: "12.00pm" },
    { image: "./img2/images/Logo 27.png", companyname: "Customer Manager", location: "online", date: "20-06-23", time: "12.00pm" },


];

function generateTableRows() {
    let tableDiv = document.getElementById("tablediv");
    let table = document.createElement("table");

    applicantList.forEach((data) => {
        let row = document.createElement("tr");

        // Create cell for image
        let imgCell = document.createElement("td");
        let img = document.createElement("img");
        img.src = data.image;

        imgCell.appendChild(img);
        row.appendChild(imgCell);
        img.style.width = "100px";  
        img.style.height = "auto"
        // Create cell for details
        let detailsCell = document.createElement("td");
        detailsCell.style.fontSize = "18px";
        
        detailsCell.innerHTML = `<span style='font-size: 30px; font-weight: bold;'>${data.companyname}</span><br>
                     <br>
                    Location: ${data.location}<br>
                    <br>
                    Date: ${data.date}<br>
                    <br>
                     Time: ${data.time}<br>
                     <br>
                    <div style='margin-top: 60px;'></div>`;
                    
                                
        row.appendChild(detailsCell);

        // Append the row to the table
        table.appendChild(row);
    });

    // Append the table to the tableDiv
    tableDiv.appendChild(table);
}

 generateTableRows();
