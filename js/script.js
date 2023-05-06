


var all_btn=document.getElementById("all");
all_btn.style.backgroundColor="var(--main-color)";
var graphics=document.getElementsByClassName("graphics");
var webs=document.getElementsByClassName("webs");
var graph_btn=document.getElementById("graphics");
var web_btn=document.getElementById("webs");

document.getElementById('port-btns').addEventListener('click', function (evt) {
    var target = evt.target;
  


    if (target.id == "graphics") {
        graph_btn.style.backgroundColor="var(--main-color)";
        web_btn.style.backgroundColor="var(--bg-color)";
        all_btn.style.backgroundColor="var(--bg-color)";
    
   
        for(let i=0;i<webs.length;i++){
            webs[i].style.display="none";
           }

        for(let i=0;i<graphics.length;i++){
            graphics[i].style.display="block";
            graphics[i].style.animation="fadee 0.7s";
           }
     
    }
    else if(target.id == "webs"){
    
        web_btn.style.backgroundColor="var(--main-color)";
        graph_btn.style.backgroundColor="var(--bg-color)";
        all_btn.style.backgroundColor="var(--bg-color)";
        for(let i=0;i<graphics.length;i++){
            graphics[i].style.display="none";
           }
           for(let i=0;i<webs.length;i++){
            webs[i].style.display="block";
            webs[i].style.animation="fadee 0.8s";
           }
    }
    else{
        
        all_btn.style.backgroundColor="var(--main-color)";
        web_btn.style.backgroundColor="var(--bg-color)";
        graph_btn.style.backgroundColor="var(--bg-color)";
      
           for(let i=0;i<webs.length;i++){
            webs[i].style.display="block";
            webs[i].style.animation="port-anim 1s";
           }
           for(let i=0;i<graphics.length;i++){
            graphics[i].style.display="block";
            graphics[i].style.animation="port-anim 1s";
           }
    }
});

// Contact Faq Script
var arrowShift=document.getElementsByClassName("arrowShift");
var answers=document.getElementsByClassName("answers");




document.getElementById('faqs').addEventListener('click', function (evt) {
    var target = evt.target;
  
 
    if (target.id == "firstQues" || target.id == "farrow") {
       if(answers[0].style.display==="block"){ 
        answers[0].style.display="none";
        arrowShift[0].setAttribute('class', 'bx bx-chevrons-right arrowShift');
       }
       else{
        answers[0].style.display="block";
  arrowShift[0].setAttribute('class', 'bx bx-chevrons-down arrowShift');
       answers[0].textContent="The time required to build a website can vary depending on the complexity and requirements of the project.";
       }
    }
    
    else if (target.id == "secondQues"  || target.id == "sarrow" ) {
        if(answers[1].style.display==="block"){
            answers[1].style.display="none";
            arrowShift[1].setAttribute('class', 'bx bx-chevrons-right arrowShift');
           }
           else{
            arrowShift[1].setAttribute('class', 'bx bx-chevrons-down arrowShift');
           answers[1].style.display="block";
           answers[1].textContent="The cost of a website can vary greatly depending on factors such as complexity, features and customization.";
           }
    }

    else if (target.id == "thirdQues" || target.id == "tarrow" ) {
        if(answers[2].style.display==="block"){
            answers[2].style.display="none";
            arrowShift[2].setAttribute('class', 'bx bx-chevrons-right arrowShift');
           }
           else{
            arrowShift[2].setAttribute('class', 'bx bx-chevrons-down arrowShift');
           answers[2].style.display="block";
           answers[2].textContent="Yes we can convert your UI/UX Design into Website";
           }
    }

    else if (target.id == "fourthQues"  || target.id == "fourtharrow") {
        if(answers[3].style.display==="block"){
            answers[3].style.display="none";
            arrowShift[3].setAttribute('class', 'bx bx-chevrons-right arrowShift');
           }
           else{
            arrowShift[3].setAttribute('class', 'bx bx-chevrons-down arrowShift');
           answers[3].style.display="block";
           answers[3].textContent="I can promote your business as a web developer by optimizing your website, integrating social media, creating engaging content, and developing a comprehensive digital marketing strategy in collaboration with marketing experts and designers.";
           }
    }



  
 
});


// Form Validation
const inputs=document.querySelector('form');
var user_name=""
document.getElementById("submit").onclick=function(){

if(document.getElementById("email").value==""){
    document.getElementById("email-valid").textContent="Email field is required*";
// alert("hi");
// document.getElementById("email-valid").textContent="Email field is required";
// var des=document.createElement("div");
// des.textContent="Email Field Is Required";
// des.style.backgroundColor="red";
// des.style.padding="25px";
// des.style.width="200px";
// des.style.position="absolute";
// des.style.zIndex="200";
// // des.style.marginLeft="75%";
// des.style.marginTop="25%";
// des.style.left="80%";
// des.style.transform="translateX(-10%)";
// des.style.animation="des 1s ease";
// des.style.transition="all 0.2s";
// // des.style.top="100%";
// // des.style.top="95%";
// // document.getElementsByClassName("con-div")[0].style.position="static";
// document.getElementById("contact").insertBefore(des,document.getElementsByClassName("con-div")[0]);

}
else{
Email.send({
SecureToken : "72eaf7c3-df12-4af9-a8f7-1e87fc3e0822", 
To : 'zeeshannoorofficial@gmail.com', 
From:"zeeshannoorofficial@gmail.com",
Subject:"Contact Us query",
Body: "<br><b>User Name:</b>" + inputs.elements["name"].value + "<br><b>User Email:</b>" + 
inputs.elements["email"].value + "<br><b>User Slected Service:</b>" + inputs.elements["services"].value + "<br><b>User Message:</b>"+inputs.elements["msg"].value 
}).then(
message =>           Swal.fire({
icon: 'success',
title: 'Thank you for contacting us',
text: ' We will get back to you as soon as possible.',

}).then(
reset()

)
);
}
function reset(){
document.getElementById("email-valid").textContent="";
for(let i=0;i<inputs.elements.length;i++){

inputs.elements[i].value="";
}

}
}
// Header Menu Bar Icon Changing on clicking
let menu_icon = document.getElementById("menu-icon");
menu_icon.onclick = function () {
    var mobile_view = document.getElementById("mobile-view");


    if (mobile_view.style.display === "block") {
        mobile_view.style.display = "none";
        var h4x = document.getElementById("h4x");

        var menu_add = document.createElement("i");
        menu_add.setAttribute('class', 'bx bx-menu');
        menu_add.setAttribute('id', 'menu-bar');
        document.getElementById("menu-icon").replaceChild(menu_add, h4x);
  
    }
    else {
    
        mobile_view.style.display = "block";
        mobile_view.style.height = "25rem";
        let mobile_menu = document.getElementById("mobile-menu");
        var h4 = document.createElement("h4");
        h4.setAttribute('id', 'h4x');
        h4.textContent = "X";
        document.getElementById("menu-icon").replaceChild(h4, document.getElementById("menu-bar"));
        
        mobile_menu.style.display = "flex";
        mobile_menu.style.flexDirection = "column";
        mobile_menu.style.alignItems = "center";
        mobile_menu.style.justifyContent = "center";

        mobile_menu.style.gap = "1rem";

        mobile_menu.onclick=function(){
            mobile_view.style.display="none";
            var h4x = document.getElementById("h4x");

var menu_add = document.createElement("i");
menu_add.setAttribute('class', 'bx bx-menu');
menu_add.setAttribute('id', 'menu-bar');
document.getElementById("menu-icon").replaceChild(menu_add, h4x);

        }

    }




}
 // Header scrolling on clicking onhome
 document.getElementById("home").onclick=function(){
    window.scrollTo(0,0);
  }