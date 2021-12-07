let navbars = []

function updateMenu(){
    if (window.innerWidth < 500){
        navbars[0].style = "display:none;"
        navbars[1].style = ""
    } else {
        navbars[0].style = ""
        navbars[1].style = "display:none;"
    }
}

function toggleMenu(){
    if (hamburger.classList.contains("is-active")){
        hamburger.classList.remove("is-active")
        dropdown.classList.remove("visible")
    } else {
        hamburger.classList.add("is-active")
        dropdown.classList.add("visible")
    }
}

function hideMenu(){
    if (hamburger.classList.contains("is-active")){
        hamburger.classList.remove("is-active")
        dropdown.classList.remove("visible")
    }
}

window.addEventListener("load",()=>{
    hamburger = document.getElementById("hamburger")
    dropdown = document.getElementsByClassName("dropdown")[0]
    navbars[0] = document.getElementById("full")
    navbars[1] = document.getElementById("compressed")

    sections = [document.getElementById("home"),document.getElementById("about"),document.getElementById("menu"),document.getElementById("contact")];

    let cell = document.getElementsByClassName("cell")[0]
    let grid = document.getElementById("project-grid")

    for (let x = 0; x <  projects.length; x++){
        let newCell = cell.cloneNode(true);
        newCell.style = "border-color:"+projects[x][0]+";background-image:url('"+projects[x][1]+"')";
        newCell.href = projects[x][2]
        newCell.getElementsByTagName("h1")[0].innerHTML = projects[x][3]
        newCell.getElementsByTagName("p")[0].innerHTML = projects[x][4]
        grid.appendChild(newCell)
    }

    hamburger.addEventListener("click",toggleMenu)
    updateMenu()
    window.addEventListener('resize', updateMenu);
})