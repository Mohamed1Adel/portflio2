
(function (){
    console.log(window.innerHeight)
})()







const title = document.querySelector(".title")




let typed1 = new Typed(".name",{
    strings:["Mohamed Adel <br /> Frontend Developer"],
    typeSpeed:100,
    looped:true

})
// let typed2 = new Typed(".title",{
//     strings:["Frontend Developer"],
//     typeSpeed:100,
//     looped:false

// })



// side menu 

const menu = document.querySelector(".menu");

const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click",(e)=>{
    console.log(menu)
    menu.classList.toggle("active");
})



// back to top button 

const toTop = document.querySelector(".to-top");


// side prigress 
let el = document.querySelector(".scroller");

let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll",()=>{

    // console.log(this.scrollY)
    let scrollTop = document.documentElement.scrollTop
    el.style.width =  `${(scrollTop / height) * 100}%`










    if(this.scrollY > 0){
        toTop.style.display="block";

    }else{
        toTop.style.display="none"

    }
    toTop.addEventListener("click",(e)=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    })



    
})






// contact me 

const form = document.querySelector(".form");

const sendMsg = document.querySelector(".send-msg");

form.addEventListener("submit",(e)=>{
    window.location.assign("/pages/thankyou.html")
})








