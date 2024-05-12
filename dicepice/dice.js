var random1=Math.floor(Math.random()*6+1);
var image="dice"+random1+".png";
var imagePath="./images/"+image;
var r1=document.querySelectorAll("img")[0].setAttribute("src",imagePath);

var random2=Math.floor(Math.random()*6+1);
var image1="dice"+random2+".png";
var imagePath1="./images/"+image1;
var r2=document.querySelectorAll("img")[1].setAttribute("src",imagePath1);
var heading=document.querySelector("h1");
if(random1>random2)
{
    heading.innerHTML="Player 1 Wins..🎁"
}
else if(random2>random1)
{
    heading.innerHTML="Player 2 Wins..🎁"
}
else{
    heading.innerHTML="Draw Try again.."
}