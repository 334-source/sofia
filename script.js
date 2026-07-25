// ---------------- LOADER ----------------

window.addEventListener("load", () => {

setTimeout(() => {

document.getElementById("loader").style.display = "none";

},2000);

});

// ---------------- COUNTDOWN ----------------

const birthday = new Date("August 19, 2026 14:00:00").getTime();

const timer = setInterval(() =>{

const now = new Date().getTime();

const distance = birthday - now;

const days = Math.floor(distance/(1000*60*60*24));

const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

if(distance < 0){

clearInterval(timer);

document.querySelector(".countdown h2").innerHTML =
"🎉 Happy Birthday Sofiyyah!";

}

},1000);

// ---------------- ENTER BUTTON ----------------

const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click",()=>{

window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

});

startConfetti();

});

// ---------------- FADE ANIMATION ----------------

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("fade");

observer.observe(section);

});

// ---------------- BACK TO TOP ----------------

const topBtn = document.createElement("button");

topBtn.id="topBtn";

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

window.onscroll=function(){

if(document.documentElement.scrollTop>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ---------------- SIMPLE CONFETTI ----------------

function startConfetti(){

const colors=["#FFD700","#ffffff","#F7F1E8","#C99700"];

for(let i=0;i<120;i++){

let confetti=document.createElement("div");

confetti.style.position="fixed";

confetti.style.width="8px";

confetti.style.height="14px";

confetti.style.background=
colors[Math.floor(Math.random()*colors.length)];

confetti.style.left=Math.random()*100+"vw";

confetti.style.top="-20px";

confetti.style.opacity="1";

confetti.style.zIndex="9999";

confetti.style.borderRadius="2px";

confetti.style.transition="transform 4s linear, opacity 4s linear";

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.style.transform=
`translateY(${window.innerHeight+100}px)
rotate(${Math.random()*720}deg)`;

confetti.style.opacity="0";

},50);

setTimeout(()=>{

confetti.remove();

},4200);

}

}

// ---------------- CARD HOVER ----------------

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-15px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});

// ---------------- WELCOME MESSAGE ----------------

console.log("✨ Welcome to Simply Fifteen ✨");
