/* ------------------------ Toggle Button----------------------------*/
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const closeIcon = document.getElementById("nav-close");

navLink.forEach((link) => (
    link.addEventListener("click" , () => {
        navMenu.classList.add("hidden")
    })
))

closeIcon.addEventListener("click" , () => {
    navMenu.classList.add("hidden")
})

hamburger.addEventListener("click" , () => {
    navMenu.classList.remove("hidden")
})

/* ------------------------ Light AND LIGHT THEME----------------------------*/
const html = document.querySelector("html");
const themBtn = document.getElementById("theme-toggle");

if(localStorage.getItem("mode") == "dark") {
    darkMode();
}else{
    lightMode();
}

themBtn.addEventListener("click", (e) => {
    if(localStorage.getItem("mode") == "light"){
        darkMode();
    }else{
        lightMode();
    }
})

function darkMode() {
    html.classList.add("dark");
    themBtn.classList.replace("ri-moon-line" ,"ri-sun-line");
    localStorage.setItem("mode","dark");
}

function lightMode() {
    html.classList.remove("dark");
    themBtn.classList.replace( "ri-sun-line" ,"ri-moon-line");
    localStorage.setItem("mode","light");
}


/* ------------------------ TABS----------------------------*/
let tabs =document.querySelectorAll('.tab');
let indicator =document.querySelector('.indicator');
// my recent work wale me jo all, uiux,branding ,apps hai use click  kare toh wahi  porsiton open hona chahiye.
const all = document.querySelectorAll(".work_card");
const uiux = document.querySelectorAll(".uiux");
const apps = document.querySelectorAll(".app");
const branding = document.querySelectorAll(".branding");

indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + "px";

tabs.forEach((tab) => {
    tab.addEventListener( "click" , () =>  {
        indicator.style.width = tab.getBoundingClientRect().width + "px";
        indicator.style.left = tab.getBoundingClientRect().left - tab. parentElement.getBoundingClientRect().left + "px";

        tabs.forEach(t => t.classList.remove("text-whiteColor"));
        tab.classList.add("text-whiteColor");

        // my recent work tabs
        const tabval = tab.getAttribute("data-tabs");

        all.forEach( item => {
            item.style.display = "none"
        });

        if(tabval == "uiux"){
            uiux.forEach( item => {
                item.style.display = "block"
            });
        }else if(tabval == "branding"){
            branding.forEach( item => {
                item.style.display = "block"
            });
        }else if(tabval == "apps"){
            apps.forEach( item => {
                item.style.display = "block"
            });
        }else{
            all.forEach( item => {
                item.style.display = "block"
            });
        }
    })
})

/* ------------------------ Change Background Header----------------------------*/
const scrollHeader = () => {
    const navbar = document.getElementById("navbar");
    const aTag = document.querySelectorAll("nav ul li ");
    const themeToggle = document.getElementById("theme-toggle");
    const hamburger = document.getElementById("hamburger");
    const logo = document.getElementById("logo");
    // const whiteLogo = document.getElementById("white_logo");


    if(this.scrollY >= 200){
        navbar.classList.add("bg-primaryColor");
        aTag.forEach((item) =>{
            item.classList.add("text-whiteColor")
        })

        themeToggle.classList.add("text-whiteColor");
        hamburger.classList.add("text-whiteColor");
    }else{
        navbar.classList.remove("bg-primaryColor");
        aTag.forEach((item) =>{
            item.classList.remove("text-whiteColor")
        })

        themeToggle.classList.remove("text-whiteColor");
        hamburger.classList.remove("text-whiteColor");
    }
}


window.addEventListener("scroll", scrollup)


/* ------------------------ Show Scroll Up ----------------------------*/
const scrollup = () => {
    const scrollupBtn = document.getElementById("scroll-up");

    if(this.scrollY >= 250){
        scrollupBtn.classList.remove("-bottom-1/2");
        scrollupBtn.classList.add("bottom-4");
    }else{
        scrollupBtn.classList.add("-bottom-1/2");
        scrollupBtn.classList.remove("bottom-4");
    }
};

window.addEventListener("scroll", scrollup)


/* ------------------------ Scroll Sections Active Link----------------------------*/
const activelink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "hero";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if(this.scrollY >= sectionTop - 60){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(item => {
        item.classList.remove("active");
        if(item.href.includes(current)){
        item.classList.add("active");
        }
    })
}

window.addEventListener("scroll", activelink)

/* ------------------------ Scroll Reveal Animation----------------------------*/
const sr = scrollReveal ({
    origin: "top",
    distance: "60px",
    duration: 2500 ,
    delay: 400
});

sr.reveal(".hero__image");
sr.reveal(".hero__content", { origin: "bottom" , delay: 1200 });

