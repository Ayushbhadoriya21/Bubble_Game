timer = 60;
var score = 0 ;
var hitrn = 0 ;
function bubble()
{
    var cluster ="";

    for(var i = 0 ; i<96 ;i++)
    {
        var rd = Math.floor(Math.random()*10);
        cluster += `<div id="bubble">${rd}</div>`;
    }

    document.querySelector("#pdown").innerHTML=  cluster;

}

function runTimer()
{
    var timerint  = setInterval(() => {
        if(timer>0)
        {
            timer--;
            document.querySelector(".timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pdown").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}
function getNewHit()
{
   hitrn = Math.floor(Math.random()*10);
   document.querySelector(".nexthit").textContent = hitrn;
}
function increaseScore()
{
    
    document.querySelector(".incscore").textContent = score;
    score+=10;
}


document.querySelector("#pdown")
.addEventListener("click" , function (details) {
    var clickedNumber = (Number(details.target.textContent));

    if(clickedNumber === hitrn)
    {
        increaseScore();
        bubble();
        getNewHit();
    }
})
   

getNewHit();
bubble();
runTimer();
increaseScore(); 