let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let game = document.querySelector(".game");
let msg = document.querySelector(".msg");
let newGame= document.querySelector(".newGame");
let msgContainer = document.querySelector(".msg-container");
let turnO = true;
let count= 0;
const resetGame = () =>{
      turnO= true;
      count= 0;
      enableBoxes();
      msgContainer.classList.add("hide");
};

let  outCome = [[0,1,2],[0,3,6],
                [0,4,8],[1,4,7],
                 [2,5,8],[2,4,6],
                [3,4,5],[6,7,8]];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
      if(turnO === true){
        box.innerText = "O";
        turnO=false;
    }else{
        box.innerText= "X";
        turnO= true;
      }
      box.disabled=true;
      count++;

      let isWinner = checkWinner();
  
      if (count === 9 && !isWinner) {
        gameDraw();
      }
    });
});
const gameDraw = ()=>{
   msg.innerText = `Game is Draw!`;
   msgContainer.classList.remove("hide");
   diableBoxes();
};

 const showWinner = (winner)=>{
       msg.innerText = `Congratulations! The winner is ${winner}`;
       msgContainer.classList.remove("hide");
};
 const diableBoxes = ()=>{
    for ( let box of boxes){
        box.disabled= true;
    }
 }
 const enableBoxes = ()=>{
  for (let box of boxes){
        box.disabled = false;
        box.innerText= "";
} }

 const checkWinner = ()=>{
  for ( let pattern of outCome ){
      let pos1 = boxes[pattern[0]].innerText;
      let pos2 = boxes[pattern[1]].innerText;
      let pos3 =boxes[pattern[2]].innerText;

      if ( pos1!= "" && pos2 != "" && pos3 !="" ){
        if  (pos1 === pos2 && pos2 === pos3){
         showWinner(pos1);   
         diableBoxes();
        }
      }
}
 };
 newGame.addEventListener("click", resetGame );
 reset.addEventListener("click", resetGame);
