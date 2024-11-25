const boxes = document.querySelectorAll(".box");
const resetButton = document.getElementById('reset-button');
const scO = document.querySelector(".scoreO");
const scX = document.querySelector(".scoreX");
const bgEffect = document.querySelector(".video");

const winningpatterns= [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turnO = false;
let win = document.querySelector(".winner");
let x = 0;
let o = 0;

boxes.forEach((box)=>{
  box.addEventListener("click", ()=>{
    if(!turnO){
      box.style.color = "red"
      box.innerText = "X";
      turnO = true
    }
    else{
      box.style.color = "blue"
      box.innerText = "O";
      turnO = false;
    }
    box.disabled = true;
    checkForWin();
  })
})

const endGame = (trig)=>{
  boxes.forEach((box)=>{
      box.disabled = trig;
  })
}

function checkForWin() {
  for(let pattern of winningpatterns){
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if(pos1 != "" && pos2 != "" && pos3 != ""){
      
      if(pos1 === pos2 && pos2 === pos3){ 
        document.body.classList.add('disable-clicks');
        boxes[pattern[0]].style.backgroundColor = "green";
        boxes[pattern[1]].style.backgroundColor = "green";
        boxes[pattern[2]].style.backgroundColor = "green";
        win.innerHTML = `<div class= "winn">WINNER IS ${pos1}</div>`;
        if (pos1 == 'X' )
        {
          endGame(true);
          x++;
          {
            bgEffect.innerHTML = `<video class="vid" autoplay src="videoo/winning_vid.mp4">`;
            let vid = document.getElementsByClassName("vid");
            vid.playbackRate = 2;
            setTimeout(()=>{
              bgEffect.innerHTML = '';
              endGame(false);
            },3000);
          }
          scX.innerHTML = ` <b>X</b> - ${x}`;
        }
        else{
          o++;
          endGame(true);
          {
            bgEffect.innerHTML = `<video class="vid" playbackRate=2 autoplay src="videoo/winning_vid.mp4">`;
            let vid = document.getElementsByClassName("vid");
            vid.playbackRate = 2;
            setTimeout(()=>{
              bgEffect.innerHTML = '';
              endGame(false);
            },10000);
          }
          scO.innerHTML = ` <b>O</b> - ${o}`
        }
        setTimeout(reset,3000);
        return;
      }
    }
  }
  CheckForDraw();
}

function CheckForDraw(){
  for(box of boxes){
    if(box.innerText =="")
      return;
  }
  win.innerHTML = `<div class= "draw">DRAW</div>`;
  setTimeout(reset,3000);
}


function reset(){
  for(box of boxes){
    box.disabled = false;
    box.innerText = "";
    box.style.backgroundColor = "rgb(255, 255, 255)";
  }
  win.innerText = "";
  bgEffect.removeAttribute(video);
  // turnO = false;
}


resetButton.addEventListener("click",reset);



let  modebtn = document.getElementById("mode");
let flag = true;

modebtn.addEventListener("click",()=>{
  if (!flag){
    document.querySelector("#heading").style.color = "white";
     document.body.style.backgroundColor = "black";
     modebtn.innerText = "Light Mode";
  }
  else{
    document.querySelector("#heading").style.color = "black";
    document.body.style.backgroundColor = "#ffe4c4";
    modebtn.innerText = "Dark Mode";
  }
  flag = !flag;
})
