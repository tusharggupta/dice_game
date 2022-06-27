
/********************************Generating random number for first dice image*************************************************/

var randomNumber1 = Math.floor(Math.random()*6)+1;

document.getElementsByClassName('img1')[0].setAttribute("src",'images/dice'+randomNumber1+'.png');

/********************************Generating random number for second dice image*************************************************/

var randomNumber2 = Math.floor(Math.random()*6)+1;

document.getElementsByClassName('img2')[0].setAttribute("src",'images/dice'+randomNumber2+'.png');

/********************************                   Declaring the winner        *************************************************/


if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 Wins";
}

else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 2 Wins";
}

else
{
  document.querySelector("h1").innerHTML="Draw";
}
