const words = ["Django apps", "responsive websites", "clean interfaces", "backend systems"];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect(){
    if (!typingElement) {
        return;
    }

    currentWord = words[wordIndex];

    if(!isDeleting){
        typingElement.textContent = currentWord.substring(0, letterIndex + 1);
        letterIndex++;

        if(letterIndex === currentWord.length){
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }

    }else{
        typingElement.textContent = currentWord.substring(0, letterIndex - 1);
        letterIndex--;

        if(letterIndex === 0){
            isDeleting = false;
            wordIndex++;

            if(wordIndex === words.length){
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 100 : 150);
}

typeEffect();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
}
