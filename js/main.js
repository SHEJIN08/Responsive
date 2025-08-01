// Navigation
let Nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        Nav.classList.add("scroll-on");
    }else{
        Nav.classList.remove("scroll-on")
    }
}
// Nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
}) 

// Counter Design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        const obj = document.getElementById(id);
        let current = start;
        const range = end - start;
        const increment = end > start ? 1 : -1;
        const step = Math.abs(Math.floor(duration / range));
        
        const timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if (current === end) {
                clearInterval(timer);
            }
        }, step);
    }

    counter("count1", 0, 1287, 3000);
    counter("count2", 0, 3786, 2500);
    counter("count3", 0, 1400, 3000);
    counter("count4", 0, 1286, 3000);
});