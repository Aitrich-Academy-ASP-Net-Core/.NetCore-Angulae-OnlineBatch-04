function validateForm()
{
    
    var jobTitle=document.myForm.jobTitle.value;  
    var description=document.myForm.jobDescription.value;  
    var salary=document.myForm.salary.value;
  
    var location=document.myForm.location.value; 
    const salaryPattern=/^[0-9]/

    if(jobTitle==null || jobTitle=="")
    {
        alert(jobTitle+"Please enter your job title");
        return false;
    }
     if(description==null || description=="")
    {
        alert("Please enter your job description");
        return false;

    }
    
    if(!salaryPattern.test(salary))
    {
        alert("Salary must be in Digits");
        return false;

    }
    if(location==null ||location=="")
    {
        alert("Please enter your location");
        return false;

    }
    

}

function validateCharacter(inputChar)
{
   
    const regex = /^[a-zA-Z]+$/; // regular expression pattern for alphabetical characters
    if(!regex.test(inputChar))
    {
        alert("Allowed alphabets")
        return false;
    }

}

