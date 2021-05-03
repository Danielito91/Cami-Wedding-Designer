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
    if (y>140) {
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
/*icon_menu.addEventListener('click',function(){
    menu.classList.toggle('attiva');
    icon_menu.classList.toggle('fa-times');
})*/

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
//scroll element
ScrollOut({})