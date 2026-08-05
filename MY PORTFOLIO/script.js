const text = [
    "Professional Graphic Designer",
    "Logo Designer",
    "Brand Identity Designer",
    "Social Media Designer"
];

let textIndex = 0;
let charIndex = 0;
const typing = document.getElementById("typing");

function type() {
    if (charIndex < text[textIndex].length) {
        typing.textContent += text[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typing.textContent = text[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textIndex = (textIndex + 1) % text.length;
        setTimeout(type, 500);
    }
}

type();