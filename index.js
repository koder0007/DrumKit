 
var btnlen= document.querySelectorAll('.drum').length
for (let index = 0; index < btnlen; index++) {
 
    
    document.querySelectorAll('.drum')[index].addEventListener('click', function(){
    

        var key = document.querySelectorAll('.drum')[index].innerHTML

palysound(key)
animation(key)
       


    })   
}


document.addEventListener("keydown", function(event){
    var keypress= event.key

    
  palysound(keypress)
  animation(keypress)

})




// --------------------------------------------------------------------------------------------------


function palysound(pressedkey){

    switch (pressedkey) {
        case 'w':
            var audio  =new Audio('sounds/tom-1.mp3')
            audio.play()
            break;
        case 'a':
            var audio  =new Audio('sounds/tom-2.mp3')
            audio.play()
            break;
        case 's':
            var audio  =new Audio('sounds/tom-3.mp3')
            audio.play()
            break;
                        
        case 'd':
            var audio  =new Audio('sounds/tom-4.mp3')
            audio.play()
            break;
        case 'j':
         var audio  =new Audio('sounds/crash.mp3')
         audio.play()
            break;
        case 'k':
         var audio  =new Audio('sounds/kick-bass.mp3')
         audio.play()
       break;
       case 'l':
        var audio  =new Audio('sounds/snare.mp3')
        audio.play()                                             
        default:
            
    }

}

function animation(currentkey){

  var activebtn=  document.querySelector("."+currentkey);
  activebtn.classList.add('animation')

  setTimeout(() => {
    activebtn.classList.remove('animation')
  }, 100);
}