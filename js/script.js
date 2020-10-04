var typed = new Typed('.type', {
    strings: ['Web Designer', 'Web Developer', 'Wordpress Expert'],
    typeSpeed:40,
    backSpeed:40,
    loop:true,
    backDelay: 1400
     
});

AOS.init();

var rellax = new Rellax('.rellax');

$(document).ready(function(){

    $(window).on("scroll",function(){
        if(scrollY>20)
        {
            $("#header").addClass("head");
        }
        else{
            $("#header").removeClass("head");
        }
    })
   
    var waypoints = $('.skill_bar_header').waypoint(function(direction) {
        $('#bar1').barfiller();
        $('#bar2').barfiller();
        $('#bar3').barfiller();
        $('#bar4').barfiller();
        $('#bar5').barfiller();
      }, {
        offset: '280px'
      })

      $(".list").click(function(){
          const value=$(this).attr('data-filter');
          if(value=='all'){
              $(".itemBox").show('1000');
          }
          else{
            $(".itemBox").not('.'+value).hide('1000');
            $(".itemBox").filter('.'+value).show('1000');
          }
      })
      $(".list").click(function(){
          $(this).addClass('active').siblings().removeClass('active');
      })

      $('.port_ovrflw').magnificPopup({
        delegate: '.magnific_pop',
        type: 'image',
        gallery: {
            enabled: true
          }
      });
      $('.counter').counterUp({
        delay: 10,
        time: 1500
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $(".ham_menu").click(function(){
        $("nav ul").slideToggle();
    });

    // $(window).on("load",function(){
    //     $(".loader").fadeToggle();
   // })
    setTimeout(function(){
        $(".loader").fadeOut();
    },2000)


    $("#header .nav ul li").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

    $("#calculator .cal_btn").on("click",function(){
        $("#calculator").toggleClass("active");
        $(this).toggleClass("active");
    })

    $(window).on("scroll",function(){
        if(scrollY)
        {
            $("#calculator").removeClass("active");
            $("#calculator .cal_btn").removeClass("active");
        }
    })

   

});

function clock(){
    var hour=document.getElementById('hour');
    var minute=document.getElementById('minute');
    var second=document.getElementById('second');
    var ampm=document.getElementById('ampm');

    var h=new Date().getHours();
    var m=new Date().getMinutes();
    var s=new Date().getSeconds();
    var am="AM";

    if(h>12){
        h=h-12;
        var am="PM";
    }
    else if(h==0)
    {
        h=h+12;
    }
    h=(h<10) ? "0" +h :h
    m=(m<10) ? "0" +m :m
    s=(s<10) ? "0" +s :s

    hour.innerHTML=h;
    minute.innerHTML=m;
    second.innerHTML=s;
    ampm.innerHTML=am;
}
setInterval(clock,1000);


function hamburger_menu()
{
    var v=document.getElementById("ham");
    var n=v.className;
    if(n=="fa fa-bars")
    {
        v.className="fa fa-times";
    }
    else if(n=="fa fa-times")
    {
        v.className="fa fa-bars";
    }
}

window.addEventListener('scroll',function(){
    var scroll=document.getElementById("gotop");
    scroll.classList.toggle("gotop_btn",window.scrollY>500)
})

function scrolltop(){
    window.scrollTo({
        top: 0
    });
}

