


document.getElementById("btn").addEventListener("click",function(){

  const image =  document.getElementById("myImage");

    if(image.style.display =='none' || image.style.display==''){
        image.style.display ='block';
    }
    else{
        image.style.display ='none';
    }

});

