var m=document.getElementsByClassName("bnt").length;
var i=0;
for(i=0;i<m;i++)
{
    document.getElementsByClassName("bnt")[i].addEventListener("click",function()
    {
        var k=this.textContent;
        console.log(k);
        var audio=new Audio("xylo-sounds/"+k+".mp3");
        audio.play();
    });
}