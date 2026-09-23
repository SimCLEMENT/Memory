const board = document.getElementById("game-board");

let dimension = 150;
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matchedCount = 0;
const imgStart = Math.floor(Math.random() * 100) + 1;

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


function initGame() {
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
}
initGame();