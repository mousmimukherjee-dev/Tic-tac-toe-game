let boxes = document.querySelectorAll(".box");
let btn_reset = document.querySelector("#btn_reset");
let msgContainer = document.querySelector(".msgContainer");
let btnRestart = document.querySelector("#btnRestart");
let msg = document.querySelector("#msg");

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


let turnO = true;


const resetGame=()=>{

  let turnO = true;
  enableBoxes();

}


const enableBoxes=()=>{

  for (let box of boxes){
    box.disabled=false;
    box.innerText='';
    msgContainer.classList.add('hide');
  }
}

let clickCount=0;
let winner='';


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked!");
    clickCount++;
    if (turnO) {
      box.innerText = "O";
      box.classList.add('oClass');
      turnO = false;}
      
    else {
      box.innerText = "X";
      box.classList.add('xClass');
      turnO = true;
      
    }
    box.disabled = true;
    console.log(clickCount);

    if(clickCount=== 9 && !winner){

      alert('game is draw');
    }
    

    checkWinner();

    
  });
});

const disabledBoxes=()=>{

  for (let box of boxes){

    box.disabled=true;
  }
}

const showWinner = (winner) => {
  msg.innerText = `Congratulations! winner is${winner}`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    //console.log(pattern[0],pattern[1],pattern[2]);
    //console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

    let posVAL1 = boxes[pattern[0]].innerText;
    let posVAL2 = boxes[pattern[1]].innerText;
    let posVAL3 = boxes[pattern[2]].innerText;

    if (posVAL1 != "" && posVAL2 != "" && posVAL3 != "") {
      if (posVAL1 === posVAL2 && posVAL2 === posVAL3) {
        console.log("winner!", posVAL1);
        winner=posVAL1;
        showWinner(posVAL1);
      }
    }
  }
};

btnRestart.addEventListener('click',resetGame);
btn_reset.addEventListener('click',resetGame);

