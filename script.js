let question=document.querySelector(".question");
let reset=document.querySelector(".reset");

let btnNo=document.querySelector(".btn-no");
btnNo.addEventListener("click",()=>{
    let t=Math.floor(Math.random() * 75)+101;
    let l=Math.floor(Math.random() * 180)+151;
    // console.log("top : ",t);
    // console.log("left : ",l);
    btnNo.style.left=l+"px";
    btnNo.style.top=t+"px";
})

let btnYes=document.querySelector(".btn-yes");
btnYes.addEventListener("click",()=>{
    question.innerHTML="I know you are Dumb..";
    reset.innerHTML="Reset!"
    btnNo.style.display="none";
    btnYes.style.display="none";
})

reset.addEventListener("click",()=>{
    window.location.reload(true);
})



