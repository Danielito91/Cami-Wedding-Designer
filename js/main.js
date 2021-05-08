/*=========================================
//--//-->  Preloader
===========================================*/
document.body.style.overflowY = "hidden";
function showPage() {
    setInterval(() => {
    document.getElementById('preloader').style.display = 'none';
    document.body.style.overflowY = "scroll";
},2500);
}
/*=========================================
//--//-->  Clicco
===========================================*/
var chat = document.getElementById('chat');
var container_chat = document.getElementById('footer-chat-icon');
var icone = document.getElementById('icone_chat');
chat.addEventListener('click',function compari() {
    icone.classList.toggle("compari");
})
window.onscroll = function() {
    let y = window.pageYOffset;
    if (y>2400) {
        container_chat.style.right="-999px";
        icone.classList.remove("compari"); 
    } else if (y>140 ) {
        container_chat.style.right="15px";
       
    } else {
        container_chat.style.right="-999px";
        icone.classList.remove("compari"); 
    }
}
/*=========================================
//--//-->  Funzioni per menu
===========================================*/
let icon_menu = document.getElementById('menu_open');
let menu = document.getElementById('menu');
let li_menu = document.querySelectorAll('.nav li');
//al clicco compari e scompari menu
icon_menu.onclick=()=>{
    menu.classList.toggle('attiva');
    icon_menu.classList.toggle('fa-times');
}
//nascondere menu al clicco di un li(elenco)
for (let i= 0; i< li_menu.length; i++) {
    let li_definitivi= li_menu[i];
    li_definitivi.onclick=()=> {
        menu.classList.remove('attiva');
        icon_menu.classList.remove('fa-times');
    }
}

//sezione lavori
$(document).ready(function() {
    $('.button').click(function() {
        var value = $(this).attr('data-filter');
        $('.filter').not("." + value).hide();
        $('.filter').filter("." + value).show();
    })
})
 //cambio testo foto homepage
 if ($('.testo-inner').length == 1) {
    var typed_strings = $('.testo_items').text();
        var typed = new Typed('.testo-inner', {
            strings: typed_strings.split(','),
            typeSpeed: 80,
            loop: true,
            backDelay: 1100,
            backSpeed: 30
        });
    }



 //cambio immagini
 var secondi=1;
 var num=0;
 function CambiaImmagine() {
     var immagini=new Array();
     var change = document.getElementById("change");
     immagini[0]="/assets/torta16.jpeg";
     immagini[1]="/assets/ritomasseria.jpeg";
     immagini[2]="/assets/torta6.jpeg"; 
     immagini[3]="/assets/tavolata.jpeg";
     immagini[4]="/assets/torta8.jpeg";
     immagini[5]="/assets/allestimenti-vari1.jpg"; 
     immagini[6]="/assets/allestimenti-vari.jpeg";
     immagini[7]="/assets/torta11.jpeg";
     immagini[8]="/assets/sedie.jpg"; 
     immagini[9]="/assets/fiori.jpg";
     immagini[10]="/assets/torta10.jpeg";
     change.src=immagini[num];
     num=(num+1>=immagini.length)?0:num+1;
     setTimeout("CambiaImmagine()",secondi*4000);
 }
 CambiaImmagine();  

 //implemento libreria 

 (function ($) {
    var magnifPopup = function() {
        $('.popup-img').magnificPopup({
          type: 'image',
          removalDelay: 300,
          mainClass: 'mfp-with-zoom',
          gallery: {
            enabled: true
          },
          zoom: {
            enabled: true,
            duration: 300, // durata in millesecondi
            easing: 'ease-in-out', //transizione
            opener: function(openerElement) {
              return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
          }
        });
      };
      magnifPopup();})(jQuery);
     
    //sezione lavori
    $(document).ready(function() {
        $('.button').click(function() {
            var value = $(this).attr('data-filter');
            $('.elenco-foto img').show();
            $('.elenco-foto').css('height','auto');
            $('.filter').not("." + value).hide();
            $('.filter').filter("." + value).show();
        })
    })
    //swiper
    var swiper = new Swiper(".mySwiper", {
        effect: "flip",
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });