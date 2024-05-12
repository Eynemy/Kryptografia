
const toggleNav = () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
    }

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = 2;

const animateText = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
            if(index < iteration) {
            return event.target.dataset.value[index];
            }
        
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
        
        if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
        }
        
        iteration += 1 / 3;
    }, 30);
}
setInterval(() => animateText({ target: document.querySelector(".name1") }), 8000);

setInterval(() => animateText({ target: document.querySelector(".name2") }), 10000);
setInterval(() => animateText({ target: document.querySelector(".name3") }), 12000);
setInterval(() => animateText({ target: document.querySelector(".name4") }), 14000);


alphabet = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
letter_count = 0;
el = $("#loading");
word = el.html().trim();
finished = false;

el.html("");
for (var i = 0; i < word.length; i++) {
el.append("<span>"+word.charAt(i)+"</span>");
}

setTimeout(write, 75);
incrementer = setTimeout(inc, 1000);

function write() {
for (var i = letter_count; i < word.length; i++) {
    var c = Math.floor(Math.random() * 36);
    $("span")[i].innerHTML = alphabet[c];
}
if (!finished) {
    setTimeout(write, 75);
}
}

function inc() {
$("span")[letter_count].innerHTML = word[letter_count];
$("span:eq("+letter_count+")").addClass("glow");
letter_count++;
if (letter_count >= word.length) {
    finished = true;
    setTimeout(reset, 15000);  
} else {
    setTimeout(inc, 1000);
}
}

function reset() {
letter_count = 0;
finished = false;
setTimeout(inc, 500); 
setTimeout(write, 75); 
$("span").removeClass("glow");
}


const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}