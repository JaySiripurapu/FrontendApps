
function hidePanel(){ 
    let mainpage=document.getElementById("main");
    mainpage.classList.add("panelClose");
    let icon=document.getElementById("navbarS");
    icon.style.display="inline";
   
}

function showNavbar(){
    let mainpage=document.getElementById("main");
    mainpage.classList.remove("panelClose");
    let icon=document.getElementById("navbarS");
    icon.style.display="none"; 
}
