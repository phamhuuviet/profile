
hambuger.addEventListener("click", ()=>{
    navBar.style.margin = "0 30%";
    hambuger.style.display = "none";
    closeNavbar.style.display = "block";
})

closeNavbar.addEventListener("click", () =>{
    navBar.style.marginLeft = "-100%";
    hambuger.style.display = "block";
    closeNavbar.style.display = "none";    
})