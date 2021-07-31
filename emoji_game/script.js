const cards= document.querySelectorAll(".card");
//console.log(cards);

var isflipped=false;
var firstCard;
var secondCard;


cards.forEach((card)=>{
   card.addEventListener("click",flip);
});

function flip()
{
   this.classList.add("flip");

   if(!isflipped)
   {   
       isflipped=true;
       firstCard=this;
   }
   else{
       secondCard=this;
       checkIt();
   }
}


function checkIt()
{  
    var f=firstCard.dataset.image===secondCard.dataset.image;
    f ? success():fail();

    // if(firstCard.dataset.image===secondCard.dataset.image){
    //     success();
    // }
    // else
    //    {
    //        fail();
    //    }
}


function success(){
   // console.log("you win");
    firstCard.removeEventListener('click',flip);
    secondCard.removeEventListener('click',flip);
    reset();
}


function fail()
{
    //console.log("you lose");
    setTimeout(()=>{
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();

    },1000);
   
}

function reset(){
   isflipped=false;
   firstCard=null;  
   secondCard =null;
} 


(function shuffle()
{
    cards.forEach((card)=>{
         
        var index= Math.floor(Math.random()*16);
         card.style.order=index;
        
    });
})();