$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

   // toggle menu/navbar script
   $('.menu-btn').click(function(){

        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
   });

   //typing animation script

   var typed = new Typed(".typing", {
       strings: ["Researcher", "Learner", "Statistician", "Coder", "Data Scientist", "Rubik's Cube Enthusiast", "Mathematician", "Teacher", "Machine-learning Specialist", "Full-Stack Developer", "Sports Analyst"],     
       typeSpeed: 100,
       backspeed: 60,
       loop: true
    });

});