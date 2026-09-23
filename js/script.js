const board = document.getElementById("game-board");
const timerDisplay = document.querySelector('#timerDisplay');
const result = document.querySelector('#result');
const reset = document.querySelector('#reset');

let dimension = 150;
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matchedCount = 0;

let seconds = 0;
let timerInterval = null;

let imgStart = Math.floor(Math.random() * 100) + 1;

let images = [];
for (let i = 0 ; i < 8 ; i++) {
    images.push(`https://picsum.photos/id/${imgStart + i}/${dimension}/${dimension}`);
}

let cards = [...images, ...images];

function shuffle(array) {
    for(let i = array.length -1 ; i > 0 ; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function checkMatch(card1, card2) {
    if (card1.dataset.value == card2.dataset.value) {
        card1.classList.add("matched");
        card2.classList.add("matched");

        firstCard = null;
        secondCard = null;
        lockBoard = false;
        matchedCount = matchedCount + 2;
        checkVictory();
    }

    else {
        setTimeout(() => {
            card1.innerHTML = "";
            card2.innerHTML = "";

            firstCard = null;
            secondCard = null;
            lockBoard = false;
        }, 800);


        
    }
}

function handleCardClick(card) {
    if (card === firstCard || card.classList.contains("matched") || lockBoard == true) {
        return;
    }

    card.innerHTML = `<img src="${card.dataset.value}">`;

    if (firstCard === null) {
        firstCard = card;
    }
    else if (secondCard === null && firstCard != null) {
        secondCard = card;
        lockBoard = true;
        moves++;
        checkMatch(firstCard, secondCard);

        
    }
}

function formatTime(sec) {
    let min = Math.floor(sec /60);
    let secondesRestantes = sec % 60;


    let minStr = String(min).padStart(2, '0');
    let secStr = String(secondesRestantes).padStart(2,'0');
    
    return `${minStr}:${secStr}`;
}

function startTimer() {
    timerInterval = setInterval(() => {
        seconds++;
        timerDisplay.textContent = formatTime(seconds);
    }, 1000)    
}

function checkVictory() {
    if (matchedCount === cards.length) {
        result.textContent = "Score : " + moves;
        clearInterval(timerInterval);
    }
    else {
        
        return
    }
}

function initGame() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    moves = 0;
    matchedCount = 0;
    seconds = 0;
    clearInterval(timerInterval);
    timerInterval = null;
    imgStart = Math.floor(Math.random() * 100) + 1;
    images = [];
    for (let i = 0 ; i < 8 ; i++) {
        images.push(`https://picsum.photos/id/${imgStart + i}/${dimension}/${dimension}`);
    }
    cards = [...images, ...images];

    shuffle(cards);
    board.innerHTML = "";
    
    cards.forEach( imgUrl => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.dataset.value = imgUrl;
        
        card.setAttribute("role", "button");
        card.setAttribute("tabindex", "0");
        board.appendChild(card);

        card.addEventListener('click', () => handleCardClick(card));
    });
    startTimer();    
}

reset.textContent = "Relancé une partie";
reset.addEventListener('click', () => {
    initGame();
});

initGame();