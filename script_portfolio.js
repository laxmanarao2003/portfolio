/* send a message through smtp protocol */
const msgsend=()=>{

    let inp1=document.form1.fname.value;
    let inp2=document.form1.mail.value;
    let inp3=document.form1.comments.value;
    let date=new Date();

    Email.send({
        Host : 'smtp.elasticemail.com',
        Username : 'laxmanarao.arasavilli1308@gmail.com',
        Password : '1EE1B4C3929E11F2D58351EAC8838D7CAA58',
        To :'20kd1a0703@lendi.org',
        From :'20kd1a0703@lendi.org',
        Subject : "Form Enquiry",
        Body : "Name: "+inp1+"<br>" +"Email: "+inp2+"<br>"+"comments: "+inp3+"<br>"+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
                
    })
    .then(message => alert("Message captured successfully"))
    .catch((error)=>alert("Message sending Error"));

}

/* Adding animation effect to Name */
typescript=()=>
{
    var typed=new Typed ("#dynamic-txts1",{
        strings: ["Front-End Developer"],
        typeSpeed:50,
        backSpeed:80,
        loop:true
    });
    var typed=new Typed ("#dynamic-txts2",{
        strings: ["Front-End Developer"],
        typeSpeed:50,
        backSpeed:80,
        loop:true
    });
}

/* hiding navigate to top(HOME Navigator) when scrollTop<320*/
window.addEventListener("scroll",()=>{
    if(document.documentElement.scrollTop>320){
        $("#up-arrow").css({display:"block"});
    }
    else{
        $("#up-arrow").css({display:"none"});
    }
});

/* Hover effects using Jquery */
$(document).ready(function()
{
    $("#linkedin").hover(function()
    {
        $("#linkedin").tooltip();
    });
    $("#insta").hover(function()
    {
        $("#insta").tooltip();
    });
    $("#fb").hover(function()
    {
        $("#fb").tooltip();
    });
    $("#github").hover(function()
    {
        $("#github").tooltip();
    });
    $("#twitter").hover(function()
    {
        $("#twitter").tooltip();
    });
    $("#up-arrow a").hover(function()
    {
        $(this).tooltip();
    });
}); 

/* Scroll reveal JS */
ScrollReveal().reveal('#home',{delay:200,reset:true});
ScrollReveal().reveal('.myprofile', {delay:150,reset:true});
ScrollReveal().reveal('.bio-info', {delay:250,reset:true});
ScrollReveal().reveal('.carousel',{delay:150,reset:true});
ScrollReveal().reveal('.ht_skills',{delay:150,reset:true});
ScrollReveal().reveal('.ht_education',{delay:150,reset:true});
ScrollReveal().reveal('.skills-imgs',{delay:250,reset:true});
ScrollReveal().reveal('#skills',{delay:150,reset:true});
ScrollReveal().reveal('#contact',{delay:150,reset:true});
ScrollReveal().reveal('footer',{delay:100,reset:true});
