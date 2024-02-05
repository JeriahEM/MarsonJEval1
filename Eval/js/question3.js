let btnDark = document.getElementById('btnDark');
let btnLight = document.getElementById('btnLight');
let darkModeClicked  = true;
let bg2  = document.getElementById('bg2');
let body1  = document.getElementById('body');







        btnDark.addEventListener('click', function(e){
        let bodyTag = document.getElementById('body') ;
        bodyTag.classList.add( "menuBG");
    });

        btnLight.addEventListener('click',function(e){

          body1.className = "menuBG";

        });
 