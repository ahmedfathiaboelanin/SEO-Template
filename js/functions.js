window.onscroll = function(){
    var scrollTop = window.scrollY;
    if (scrollTop > 0) {
        document.getElementById("nav").classList.add("scroll");
        document.querySelector(".navbar-brand").classList.add("brandScroll");
        for (let i = 0; i < document.querySelectorAll(".nav-item a").length; i++) {
        document.querySelectorAll(".nav-item a")[i].classList.add("linkScroll");
        }
    } else {
        document.getElementById("nav").classList.remove("scroll");
        document.querySelector(".navbar-brand").classList.remove("brandScroll");
        for (let i = 0; i < document.querySelectorAll(".nav-item a").length; i++) {
        document
            .querySelectorAll(".nav-item a")
            [i].classList.remove("linkScroll");
        }
    }
    if (scrollTop > 200) {
        document.getElementById("up").setAttribute("style", "opacity:1;");
    } else {
        document.getElementById("up").setAttribute("style", "opacity:0;");
    }

    let serv = document.querySelectorAll(".service");
    for (let i = 0; i <= serv.length; i++) {
        serv[i].addEventListener("mouseover", () => {
        serv[i].children[0].children[0].src = "./img/icon-shape-white.png";
        });
        serv[i].addEventListener("mouseout", () => {
        serv[i].children[0].children[0].src = "./img/icon-shape-primary.png";
        });
    }


}
