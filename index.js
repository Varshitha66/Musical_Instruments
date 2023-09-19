var pia=document.getElementById("pia");
pia.onclick=function()
{
    pia.classList.add("pressed");
    setTimeout(function()
        {
             pia.classList.remove("pressed");
        },100);
};
var dru=document.getElementById("dru");
dru.onclick=function()
{
    dru.classList.add("pressed");
    setTimeout(function()
        {
             dru.classList.remove("pressed");
        },100);
}
var tab=document.getElementById("tab");
tab.onclick=function()
{
    tab.classList.add("pressed");
    setTimeout(function()
        {
             tab.classList.remove("pressed");
        },100);
}