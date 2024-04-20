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

// document.querySelectorAll(".hamburger-menu #animatedText").forEach(element => {
//     let isAnimating = false; // Dodajemy flagę, która będzie śledzić, czy animacja jest już w trakcie
//     setInterval(function() {
//         const test = document.querySelector('.hamburger-menu');
//         if (test && test.classList.contains('active') && !isAnimating) {
//             isAnimating = true; // Ustawiamy flagę na true, ponieważ zaczynamy animację
//             animateText({target: element});
//         } else if (!test.classList.contains('active')) {
//             isAnimating = false; // Resetujemy flagę na false, ponieważ animacja się zakończyła
//         }
//     }, 100); // Sprawdź co sekundę
// });

document.querySelectorAll(".hamburger-menu #animatedText").forEach(element => {
    let isAnimating = false; // Dodajemy flagę, która będzie śledzić, czy animacja jest już w trakcie
    setInterval(function() {
        const test = document.querySelector('.hamburger-menu');
        if (test && test.classList.contains('active') && !isAnimating) {
            isAnimating = true; // Ustawiamy flagę na true, ponieważ zaczynamy animację
            animateText({target: element});
        } else if (!test.classList.contains('active')) {
            isAnimating = false; // Resetujemy flagę na false, ponieważ animacja się zakończyła
        }
    }, 100); // Sprawdź co sekundę
});






var parents = document.querySelectorAll('.hover');
parents.forEach(parent => {
    parent.onmouseover = function() {
        var element1 = document.querySelector('#animatedText1');
        var element2 = document.querySelector('#animatedText2');
        animateText({target: element1});
        animateText({target: element2});
    }
});






