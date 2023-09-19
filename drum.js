document.addEventListener("keypress", function(event) {
    switch(event.key)
    {
        case "a":
            var tom1= new Audio("drum-sounds/sounds_clap.wav");
            tom1.play();
            break;
        case "s":
            var tom1= new Audio("drum-sounds/sounds_hihat.wav");
            tom1.play();
            break;
        case "d":
            var tom1= new Audio("drum-sounds/sounds_kick.wav");
            tom1.play(); 
            break;    
        case "f":
            var tom1= new Audio("drum-sounds/sounds_openhat.wav");
            tom1.play(); 
            break;        
        case "g":
            var tom1= new Audio("drum-sounds/sounds_boom.wav");
            tom1.play(); 
            break;  
        case "h":
            var tom1= new Audio("drum-sounds/sounds_ride.wav");
            tom1.play(); 
            break;  
        case "j":
            var tom1= new Audio("drum-sounds/sounds_snare.wav");
            tom1.play(); 
            break; 
        case "k":
            var tom1= new Audio("drum-sounds/sounds_tom.wav");
            tom1.play(); 
            break;  
        case "l":
            var tom1= new Audio("drum-sounds/sounds_tink.wav");
            tom1.play(); 
            break;      
    }
    });
    document.getElementsByClassName("key")[0].addEventListener("click",function()
    {
               var audio=new Audio("drum-sounds/sounds_clap.wav");
               audio.play();
    });
    document.getElementsByClassName("key")[1].addEventListener("click",function()
    {
               var audio=new Audio("drum-sounds/sounds_hihat.wav");
               audio.play();
    });
    document.getElementsByClassName("key")[2].addEventListener("click",function()
    {
               var audio=new Audio("drum-sounds/sounds_kick.wav");
               audio.play();
    });
    document.getElementsByClassName("key")[3].addEventListener("click",function()
    {
               var audio=new Audio("drum-sounds/sounds_openhat.wav");
               audio.play();
    });
    document.getElementsByClassName("key")[4].addEventListener("click",function()
    {
               var audio=new Audio("drum-sounds/sounds_boom.wav");
               audio.play();
    });
    document.getElementsByClassName("key")[5].addEventListener("click",function()
    {
               var audio=new Audio("drum-sounds/sounds_ride.wav");
               audio.play();
    });
    document.getElementsByClassName("key")[6].addEventListener("click",function()
    {
               var audio=new Audio("drum-sounds/sounds_snare.wav");
               audio.play();
    });
    document.getElementsByClassName("key")[7].addEventListener("click",function()
    {
               var audio=new Audio("drum-sounds/sounds_tom.wav");
               audio.play();
    });
    document.getElementsByClassName("key")[8].addEventListener("click",function()
    {
               var audio=new Audio("drum-sounds/sounds_tink.wav");
               audio.play();
    });