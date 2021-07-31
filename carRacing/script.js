

const score=document.querySelector('.score');
const gameArea=document.querySelector('.gameArea');
const start = document.querySelector('.start');

const d=0;
var i=0;

let keys ={
    ArrowUp : false,
    ArrowDown : false,
    ArrowLeft : false,
    ArrowRight : false
}

let player = { 
    speed : 3,
    speedl : 5,
    point :0
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


function isColide(a,b){
   
    aPos=a.getBoundingClientRect();
    bPos=b.getBoundingClientRect();

    return !((aPos.bottom<bPos.top) || (bPos.bottom<aPos.top) || (aPos.right < bPos.left) ||(aPos.left > bPos.right));
}


function moveLines(){
   
    let lines= document.querySelectorAll('.lines');

    lines.forEach((line)=>{

          if(line.y>=750)line.y=-300;
           line.y += player.speedl;
           line.style.marginTop=line.y +"px";
    })

}

function endGame()
{
    player.st=false;
    start.classList.remove('hide');
   // gameArea.classList.add('hide');
   start.innerHTML="Game Over <br> Your final score is : "+player.point +"<br> Click here to restart the game !"
    
}

function moveEcar(car){
   
    let ecars= document.querySelectorAll('.ecar');

    ecars.forEach((cr)=>{
          

        if(isColide(car,cr)){
           endGame();
        }

          if(cr.y>=750){
              cr.y=-300;
              cr.style.left=Math.floor(Math.random()*350)+"px";
          }
           cr.y += player.speedl;
           cr.style.top=cr.y +"px";
    })

}





start.addEventListener('click',startGame);


console.log(player);

function startGame()
{    

      player.st=true;
      player.point=0;
      i=0;

     // gameArea.classList.remove('hide');
      gameArea.innerHTML="";

      score.classList.remove('hide');
      start.classList.add('hide');

      
      let car=document.createElement('div');
      car.setAttribute('class','car');
      gameArea.appendChild(car);



       
      
       for(x=0;x<1;x++){
          let line=document.createElement('div');
          line.setAttribute('class','lines');
          line.y=x+10;
          line.style.marginTop=line.y+"px";
          
          gameArea.appendChild(line);
      }

      
      for(x=0;x<3;x++){
        let ecar=document.createElement('div');
      
        ecar.y=((x+1)*350)*-1;
        ecar.style.top=ecar.y+"px";
        ecar.style.left=Math.floor(Math.random()*350)+"px";
        
        ecar.setAttribute('class','ecar');
        //ecar.style.backgroundColor=randomColor();
        ecar.style.backgroundImage='url(ecar' + index() + '.png)';

        
        gameArea.appendChild(ecar);
    }
      
    


      player.x= car.offsetLeft;
      player.y= car.offsetTop;
     

      window.requestAnimationFrame(playGame);

     
      

    
}

function playGame(){

    console.log("I m excited !!!");
    let car=document.querySelector('.car');
    let road=gameArea.getBoundingClientRect();
    
    

   
    
   if(player.st) {

    if(keys.ArrowUp  &&  player.y > (road.top+70))player.y-=player.speed;
    if(keys.ArrowDown  &&  player.y <(road.bottom-105))player.y+=player.speed;
    if(keys.ArrowLeft && (player.x>0)) player.x-=player.speed;
    if(keys.ArrowRight  && (player.x<(road.width-50)))player.x+=player.speed;
    
    car.style.top=player.y+"px";
    car.style.left=player.x+"px";

     moveLines();
     moveEcar(car);
       
       window.requestAnimationFrame(playGame);
    
       player.point++;
       const ps=player.point-1;
       score.innerText ="Score : " + ps; 

   }


}


// function randomColor(){
//     function c(){
//         let hex=Math.floor(Math.random()*256).toString(16);//hexa decimal string
//         return ("0"+String(hex)).substr(-2);
//     }
//     return "#"+c()+c()+c();
// }



function index()
{
    if(i>5)i=0;
    i++;
    return i;
}



  



