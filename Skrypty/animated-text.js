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
    }, 25);
}

document.querySelectorAll("#animatedText").forEach(element => {
    element.onmouseover = animateText;
    window.addEventListener('load', () => animateText({target: element}));
});

document.querySelectorAll(".hamburger-menu #animatedText").forEach(element => {
    let isAnimating = false; 
    setInterval(function() {
        const test = document.querySelector('.hamburger-menu');
        if (test && test.classList.contains('active') && !isAnimating) {
            isAnimating = true; 
            animateText({target: element});
        } else if (!test.classList.contains('active')) {
            isAnimating = false; 
        }
    }, 100);
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

var parents2 = document.querySelectorAll('#hover2');
parents2.forEach(parent => {
    parent.onmouseover = function() {
        var element3 = document.querySelector('#animatedText3');
        var element4 = document.querySelector('#animatedText4');
        animateText({target: element3});
        animateText({target: element4});
    }
});

var parents3 = document.querySelectorAll('#hover3');
parents3.forEach(parent => {
    parent.onmouseover = function() {
        var element5 = document.querySelector('#animatedText5');
        var element6 = document.querySelector('#animatedText6');
        animateText({target: element5});
        animateText({target: element6});
    }
});

var parents4 = document.querySelectorAll('#hover4');
parents4.forEach(parent => {
    parent.onmouseover = function() {
        var element7 = document.querySelector('#animatedText7');
        var element8 = document.querySelector('#animatedText8');
        animateText({target: element7});
        animateText({target: element8});
    }
});

var parents5 = document.querySelectorAll('#hover5');
parents5.forEach(parent => {
    parent.onmouseover = function() {
        var element9 = document.querySelector('#animatedText9');
        var element10 = document.querySelector('#animatedText10');
        animateText({target: element9});
        animateText({target: element10});
    }
});

var parents6 = document.querySelectorAll('#hover6');
parents6.forEach(parent => {
    parent.onmouseover = function() {
        var element11 = document.querySelector('#animatedText11');
        var element12 = document.querySelector('#animatedText12');
        animateText({target: element11});
        animateText({target: element12});
    }
});






