let threedots = document.getElementById("threeDots1");
        let threedots1 = document.getElementById("threeDots");

function handleResize() {
    if (window.innerWidth < 768 || window.innerHeight <768) {
        
        threedots.style.display = "none";
        threedots1.style.display = "block";
    } else {
        
        threedots.style.display = "block";
        threedots1.style.display = "none";
    }
}

window.addEventListener('resize', handleResize);


handleResize();