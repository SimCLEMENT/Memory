const board = document.getElementById("game-board");

let dimension = 150;
const imgStart = Math.floor(Math.random() * 100) + 1;

let images = [];
for (i = 0 ; i < 8 ; i++) {
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

function initGame() {
    shuffle(cards);
    board.innerHTML('');
    
    cards.forEach( imgUrl => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.dataset.value = imgUrl;
        
        card.setAttribute("role", "button");
        card.setAttribute("tabindex", "0");
        board.appendChild(card);
    });
}
