var a=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
var x=Math.random()*6;
x=Math.floor(x);
var y=Math.random()*6;
y=Math.floor(y);
m="images/"+a[x];
n="images/"+a[y];
document.querySelector(".img1").setAttribute("src", m);
document.querySelector(".img2").setAttribute("src", n);
if(x>y)
{
  document.querySelector("h1").innerHTML="PLAYER 1 WINS";
}
else if(y>x)
{
  document.querySelector("h1").innerHTML="PLAYER 2 WINS";
}
else
document.querySelector("h1").innerHTML="DRAW!!";
