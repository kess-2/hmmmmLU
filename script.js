const messages = [
    "Tem certeza?",
    "CERTEZA??",
    "De verdade ??",
    "Meu bem...",
    "Pensa bem.",
    "Repensa um pouquinho...",
    "To ficando triste...",
    "MUITO triste...",
    "Vou parar...",
    "Diz SIM porfavoor ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}