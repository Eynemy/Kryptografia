const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let intervals = {};

function animateText(event) {
    let iteration = 0;
    
    clearInterval(intervals[event.target.dataset.value]);
    
    intervals[event.target.dataset.value] = setInterval(() => {
        event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
            if(index < iteration) {
            return event.target.dataset.value[index] === "_" ? " " : event.target.dataset.value[index];
            }
        
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
        
        if(iteration >= event.target.dataset.value.length){ 
        clearInterval(intervals[event.target.dataset.value]);
        }
        
        iteration += 1 / 3;
    }, 50);
}

document.querySelectorAll("#animatedText").forEach(element => {
    element.onmouseover = animateText;
    window.addEventListener('load', () => animateText({target: element}));
});
