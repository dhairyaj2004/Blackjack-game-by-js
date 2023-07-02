let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el"); //Both are same querySelector is more dynamic //let sumEl=document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el");
let player = {
    name: "Dj",
    Get: 20
};
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + " Gets: $" + player.Get;
function getrandomCard() {
    let random = Math.floor(Math.random() * 13) + 1;
    if (random === 1) {
        return 11;
    } else if (random > 10) {
        return 10;
    }
    return random;
}

function startGame() {
    let firstcard = getrandomCard();
    let secondcard = getrandomCard();
    isAlive = true;
    sum = firstcard + secondcard;
    cards = [firstcard, secondcard];
    renderGame();
}
function renderGame() {
    sumEl.textContent = "Sum:" + sum;

    for (let i = 0; i < cards.length; i++) {
        allcards = cards[i];
        console.log(allcards);
    }
    cardsEl.textContent = "Cards:" + cards;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        if(isAlive===true){
            playerEl.textContent = player.name + " Gets: $" + player.Get;
        }
    } else if (sum === 21) {
        message = "woah!!!Blackjack";
        hasBlackJack = true;
        if(hasBlackJack===true){
            player.Get=20*1.5
            playerEl.textContent = player.name + " Gets: $" + player.Get;
        }
    } else {
        message = "Busted!!! Better luck next time";
        isAlive = false;
        if(isAlive===false){
            player.Get=0
            playerEl.textContent = player.name + " Gets: $" + player.Get;
        }
    }
    messageEl.textContent = message;
}
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newcard = getrandomCard();
        sum += newcard;
        cards.push(newcard);
        renderGame();
    }
}
