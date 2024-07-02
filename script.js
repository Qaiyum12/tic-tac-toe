let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector(".reset") 
let msgcontainer = document.querySelector(".msg-container")
let newgamebtn = document.querySelector("#newgame");
let message = document.querySelector("#msg");

let turnO = true; // player-X ,player-O

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame = () => {
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box clicked");
        if(turnO){
            box.innerText="O";
            turnO = false;
        }else{
            box.innerText="X";
            turnO = true
        }
        box.disabled = true;
        checkwinner();
    })

});

const checkwinner = () =>{
    for(pattern of winpattern) {
            let pos1val = boxes[pattern[0]].innerText
            let pos2val = boxes[pattern[1]].innerText
            let pos3val = boxes[pattern[2]].innerText
            if(pos1val != "",pos2val != "",pos3val != ""){
                if(pos1val === pos2val && pos2val === pos3val){
                    console.log("winner",pos1val);
                    showWinner(pos1val);
                }
            }
        }
    };

    const disableboxes = () => {
        for(let box of boxes){
            box.disabled=true;
        }
    };
    
    const enableboxes = () => {
        for(let box of boxes){
            box.disabled=false;
            box.innerText = "";
        }
    }
    
    const showWinner = (winner) =>{
    message.innerText=`Congratulations Winner is ${winner}`;
    msgcontainer.classList.remove("hide")
    disableboxes();
}

resetbtn.addEventListener("click",resetgame);
newgamebtn.addEventListener("click",resetgame);