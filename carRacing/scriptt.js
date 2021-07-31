

const score=document.querySelector('.score');
const gameArea=document.querySelector('.gameArea');
const start = document.querySelector('.start');




let keys ={
    ArrowUp : false,
    ArrowDown : false,
    ArrowLeft : false,
    ArrowRight : false
}

document.addEventListener('keydown',keydown);
document.addEventListener('keyup',keyup);


function keydown(e)
{
    e.preventDefault();
    keys[e.key]=true;
}


function keyup(e)
{
    e.preventDefault();
    keys[e.key]=false;
}



start.addEventListener('click',startGame);

function startGame()
{

}