document.addEventListener("keypress", function(event) {
switch(event.key)
{
    case "c":
        var tom1= new Audio("piano-sounds/key"+event.key+".ogg");
        tom1.play();
        break;
    case "o":
        var tom1= new Audio("piano-sounds/key"+event.key+".ogg")
        tom1.play();
        break;
    case "d":
        var tom1= new Audio("piano-sounds/key"+event.key+".ogg")
        tom1.play(); 
        break;    
    case "e":
        var tom1= new Audio("piano-sounds/key"+event.key+".ogg")
        tom1.play(); 
        break;        
    case "s":
        var tom1= new Audio("piano-sounds/key"+event.key+".ogg")
        tom1.play(); 
        break;  
    case "p":
        var tom1= new Audio("piano-sounds/key"+event.key+".ogg")
        tom1.play(); 
        break;  
    case "a":
        var tom1= new Audio("piano-sounds/key"+event.key+".ogg")
        tom1.play(); 
        break; 
    case "r":
        var tom1= new Audio("piano-sounds/key"+event.key+".ogg")
        tom1.play(); 
        break;  
    case "g":
        var tom1= new Audio("piano-sounds/key"+event.key+".ogg")
        tom1.play(); 
        break; 
    case "y":
        var tom1= new Audio("piano-sounds/key"+event.key+".ogg")
        tom1.play(); 
        break;       
}
   console.log(event.key);
    animation(event.key);
});
function animation(name)
{
    console.log("hello");
   var hola=document.getElementById(name);
   console.log(hola);
   hola.classList.add("press");
   setTimeout(function()
   {
    hola.classList.remove("press");
   },200);
}
var m=document.getElementsByClassName("key").length;
var i=0;
for(i=0;i<m;i++)
{
    document.getElementsByClassName("key")[i].addEventListener("click",function()
    {

        var luc=this.textContent;
        var ky=luc.toLowerCase();
        animation(ky);
        var audio=new Audio("piano-sounds/key"+ky+".ogg");
        audio.play();
    });
}