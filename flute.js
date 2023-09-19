document.addEventListener("keypress", function(event) {
    switch(event.key)
    {
        case "a":
            var tom1= new Audio("flute-sounds/"+event.key+".wav");
            tom1.play();
            break;
        case "s":
            var tom1= new Audio("flute-sounds/"+event.key+".wav")
            tom1.play();
            break;
        case "d":
            var tom1= new Audio("flute-sounds/"+event.key+".wav")
            tom1.play(); 
            break;    
        case "f":
            var tom1= new Audio("flute-sounds/"+event.key+".wav")
            tom1.play(); 
            break;        
        case "g":
            var tom1= new Audio("flute-sounds/"+event.key+".wav")
            tom1.play(); 
            break;  
        case "h":
            var tom1= new Audio("flute-sounds/"+event.key+".wav")
            tom1.play(); 
            break;  
        case "j":
            var tom1= new Audio("flute-sounds/"+event.key+".wav")
            tom1.play(); 
            break; 
        case "k":
            var tom1= new Audio("flute-sounds/"+event.key+".wav")
            tom1.play(); 
            break;  
        case "l":
            var tom1= new Audio("flute-sounds/"+event.key+".wav")
            tom1.play(); 
            break; 
        case "p":
            var tom1= new Audio("piano-sounds/key"+event.key+".wav")
            tom1.play(); 
            break;       
    }
    });
    var m=document.getElementsByClassName("bnt").length;
    var i=0;
    for(i=0;i<m;i++)
    {
        document.getElementsByClassName("bnt")[i].addEventListener("click",function()
        {
    
            var luc=this.textContent;
            var ky=luc.toLowerCase();
            var audio=new Audio("flute-sounds/"+ky+".wav");
            audio.play();
        });
    }