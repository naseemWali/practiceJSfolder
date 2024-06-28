
let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".choices");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
console.log(userscorepara);
const computerscorepara=document.querySelector("#computer-score")
console.log(computerscorepara);



const generatecompchoice=() => {
  const options=["rock","paper","scissor"];
  const ranindx= Math.floor(Math.random()*3);
  return options[ranindx];
     
};

const drawgame=() => {
  // console.log("game was draw");
  msg.innerText="game draw";
  msg.style.backgroundColor="#081b31";
}

const showWinner=(userwin,userchoice,compchoice) => {
if (userwin) {
  userscore++;
  userscorepara.innerText=userscore;
  msg.innerText=`you win ! your ${userchoice} beats ${compchoice}`;
  msg.style.backgroundColor="green";
  // console.log("you win");
}else{
  computerscore++;
  computerscorepara.innerText=computerscore;
   msg.innerText=`computerwin ! ${compchoice} beats ${userchoice}`;
  // console.log("computer win");
  msg.style.backgroundColor="red";
}
}

const playgame=(userchoice) => {
console.log("user choice",userchoice);
//we can genertae  computer choice here in user choice with but we will do it above and here we will call the function
const compchoice=generatecompchoice();
console.log("comp choice",compchoice);

// for checking winning conditions but first we will check for the draw condition.
if (userchoice===compchoice) {
  // draw game
  drawgame();
}else{
  // for winning conditions
  let userwin=true;
  if (userchoice==="rock") {
     // scissor ,paper
     userwin=compchoice==="paper" ? false:true
  }else if (userchoice==="paper") {
    // rock ,scissor
    userwin=compchoice==="rock" ?true:false
  } else {
    // rock,paper
    userwin=compchoice==="paper"?true:false
  }
  showWinner(userwin,userchoice,compchoice);
}


}


choices.forEach((choice) => {
  // console.log(choice);
   choice.addEventListener("click",() => {
    const userchoice=choice.getAttribute("id")
    playgame(userchoice);
    // console.log("clicked is done",userchoice); // this is for to check the user choice after that the user choice is passed in playgame function as parameter and there computer choice is also generated 
   })
});













































