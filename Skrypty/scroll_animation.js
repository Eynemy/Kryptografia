const observer_efc1 = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show_efc1');
        }else {
            
        }
    });
});

const hiddenElements_efc1 = document.querySelectorAll('.hidden_efc1');
hiddenElements_efc1.forEach((el) => observer_efc1.observe(el));

const observer_efc2 = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show_efc2');
        }else {
            
        }
    });
});

const hiddenElements_efc2 = document.querySelectorAll('.hidden_efc2');
hiddenElements_efc2.forEach((el) => observer_efc2.observe(el));



const observer_efc3 = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show_efc3');
        }else {
           
        }
    });
});

const hiddenElements_efc3 = document.querySelectorAll('.hidden_efc3');
hiddenElements_efc3.forEach((el) => observer_efc3.observe(el));

const observer_efc4 = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show_efc4');
        }else {
            
        }
    });
});

const hiddenElements_efc4 = document.querySelectorAll('.hidden_efc4');
hiddenElements_efc4.forEach((el) => observer_efc4.observe(el));