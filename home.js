// -------------------------------------------Navigation var Start--------------------------------------------------------- //
 let logo_img=document.getElementById("logo-img"); // id="logo-img"
 logo_img.addEventListener("click",function(){
    let url="home.html";
    window.open(url,"_self")
 })

let logo_head=document.getElementById("logo-head"); // id="logo-head"
logo_head.addEventListener("click",function(){
    let url="home.html";
    window.open(url,"_self")
 })

let manu_icon=document.getElementById('manu-icon');  // id="manu-icon
manu_icon.addEventListener("click",function(){
    let ul=document.getElementById('ul-res'); // id="ul-res"
    ul.classList.toggle("ul-respons");
})

// ///////////////////// This is for Products ul
// function prod_ul(){
//     let prod_ul=document.getElementById("prod-ul") //id='prod-ul'
//     prod_ul.classList.toggle("prod-active");
// }
// ////////////////////


// -------------------------------------------Navigation var End--------------------------------------------------------- //