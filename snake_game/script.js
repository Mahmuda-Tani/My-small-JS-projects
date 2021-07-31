

const cvs = document.getElementById("snake");
const  ctx = cvs.getContext("2d");

const box=32;

const ground= new Image();
ground.src = "img/ground.png";


const foodImage= new Image();
foodImage.src = "img/foodImage.png";

const dead = new Audio();
const eat= new Audio();
const up= new Audio();
const left = new Audio();
const right = new Audio();
const down = new Audio();


dead.src="audio/dead.mp3"
eat.src="audio/eat.mp3"
up.src="audio/up.mp3"
left.src="audio/left.mp3"
right.src="audio/right.mp3"
down.src="audio/down.mp3"

let snake=[];

snake[0]={
    x: 9*box,
    y: 10*box

}

let food = {
    x: Math.floor(Math.random()*17+1)*box,
    y: Math.floor(Math.random()*15+3)*box

}


let score=0;



document.addEventListener("keydown",direction);


let d;
function direction(event){
  

  if(event.keyCode==37 && d!="RIGHT")left.play(),d="LEFT";
  else if(event.keyCode==38 && d!="DOWN") up.play(),d="UP";
  else if(event.keyCode==39 && d!="LEFT")right.play(),d="RIGHT";
  else if(event.keyCode==40 && d!="UP")down.play(),d="DOWN";

}



 function collision(head,array){

    for(let i=0;i<array.length;i++){
        if(head.x==array[i].x && head.y==array[i].y)return true;
    }

    return false;
 }

function draw(){

    ctx.drawImage(ground,0,0);

    for(let i=0 ; i<snake.length;i++){
        ctx.fillStyle= (i==0)? "green" : "white";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);  

        ctx.strokeStyle="white";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);  


      }
      ctx.drawImage(foodImage,food.x,food.y);
      ctx.strokeStyle="white";
     
     
      let sx=snake[0].x;
      let sy=snake[0].y;


      if(d=="LEFT")sx-=box;
      if(d=="UP")sy-=box;
      if(d=="RIGHT")sx+=box;
      if(d=="DOWN")sy+=box;

      if(sx==food.x && sy==food.y){
        score++;
        eat.play();
        food={
          x: Math.floor(Math.random()*17+1)*box,
          y: Math.floor(Math.random()*15+3)*box
        }

        
    }
    else{
        snake.pop();
    }

    let newhead={
        x:sx,
        y:sy
    }

      
     if(sx<box || sx>17*box || sy<3*box || sy>17*box || collision(newhead,snake) ){
         clearInterval(game);
         dead.play();

         setTimeout(()=>{ const scr=document.querySelector(".score");
        //  cvs.classList.add('hide');
         scr.classList.remove('hide');
         scr.innerHTML="Game Over !!! <br><br>Your final score is : "+score +"<br> Reload to restart the game!"},1500)
        
       
     }
      
  
    snake.unshift(newhead);

    
    
      ctx.drawImage(foodImage,food.x,food.y);
      ctx.fillStyle="white";

      ctx.font="45px Changa one";
      ctx.fillText(score,2*box,1.6*box);
     


}


let game=setInterval(draw,100);