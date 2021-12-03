document.getElementById("sidebar").style.display = "none";
let count = 0;
function showSidebar() {
    if (count % 2 === 0) {
        document.getElementById("sidebar").style.display = "block";
    }
    else{
        document.getElementById("sidebar").style.display = "none";
    }
    count++;
}


