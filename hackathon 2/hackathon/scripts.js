// const shuffledDeck = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

// const apiBaseURL = "https://deckofcardsapi.com/api/deck/";
// const drawCard = "/draw/?count=";

// let deckId;

// let deckOfCards = [];

// const cardImageElement = document.getElementById('card-image');
// const drawCardBtnOne = document.getElementById('draw-card-btn-1');
// const drawCardBtnTwo = document.getElementById('draw-card-btn-2');


// axios.get(`${shuffledDeck}`)
//     .then(deck => {
//         deckOfCards = deck.data;
//         deckId = deck.data.deck_id;
//         drawCardBtnOne.addEventListener('click', () => {
//             axios.get(`${apiBaseURL}${deckId}${drawCard}1`)
//                 .then(response => {
//                     const card = response.data.cards[0];
//                     const cardImage = document.getElementById('card-image-1');
//                     cardImage.src = card.image;
//                     cardImage.alt = `${card.value} of ${card.suit}`;
//                 })
//                 .catch(error => console.log(error));
//         });
//     }).catch(error => console.log(error));

//     axios.get(`${shuffledDeck}`)
//     .then(deck => {
//         deckOfCards = deck.data;
//         deckId = deck.data.deck_id;
//         drawCardBtnTwo.addEventListener('click', () => {
//             axios.get(`${apiBaseURL}${deckId}${drawCard}1`)
//                 .then(response => {
//                     const card = response.data.cards[0];
//                     const cardImage = document.getElementById('card-image-2');
//                     cardImage.src = card.image;
//                     cardImage.alt = `${card.value} of ${card.suit}`;
//                 })
//                 .catch(error => console.log(error));
//         });
//     }).catch(error => console.log(error));



//     let drawnCards = [];


//     function checkForWin() {
//         if (drawnCards.length < 2) { 
//           return;
//         }
//         const values = drawnCards.map(card => card.value);
//         if (values[0] === values[1]) {
//           alert("It's a tie!");
//         } else {
//           const winner = Math.floor(Math.random() * 2) + 1;
//           setTimeout(() => {
//             // alert(`Player ${winner} wins!`);
//             const winnerBanner = document.querySelector('.winner__banner');
//             winnerBanner.textContent = `Player ${winner} Wins!`;
//           }, 1000);
//         }
//       }

//     drawCardBtnOne.addEventListener('click', () => {
//       axios.get(`${apiBaseURL}${deckId}${drawCard}1`)
//         .then(response => {
//           const card = response.data.cards[0];
//           const cardImageOne = document.getElementById('card-image-1');
//           const cardImageTwo = document.getElementById('card-image-2');
//           drawnCards.push(card);
//           cardImageOne.src = card.image;
//           cardImageOne.alt = `${card.value} of ${card.suit}`;
//           if (drawnCards.length === 2) {//was 2 changed to 1
//             cardImageTwo.src = drawnCards[1].image;
//             cardImageTwo.alt = `${drawnCards[1].value} of ${drawnCards[1].suit}`;
//             checkForWin();
//           }
//         })
//         .catch(error => console.log(error));
//     });

//     drawCardBtnTwo.addEventListener('click', () => {
//       axios.get(`${apiBaseURL}${deckId}${drawCard}1`)
//         .then(response => {
//           const card = response.data.cards[0];
//           const cardImageOne = document.getElementById('card-image-1');
//           const cardImageTwo = document.getElementById('card-image-2');
//           drawnCards.push(card);
//           cardImageTwo.src = card.image;
//           cardImageTwo.alt = `${card.value} of ${card.suit}`;
//           if (drawnCards.length === 2) {
//             cardImageOne.src = drawnCards[0].image;
//             cardImageOne.alt = `${drawnCards[0].value} of ${drawnCards[0].suit}`;
//             checkForWin();
//           }
//         })
//         .catch(error => console.log(error));
//     });


// // display Name 1
// function displayNameOne() {
//   let name1 = document.getElementById("name1").value;
//   document.getElementById("output1").innerHTML = "Player 1: " + name1;
//   document.getElementById("form-container-one").style.display = "none";
// }

// // display Name 2
// function displayNameTwo() {
//   let name2 = document.getElementById("name2").value;
//   document.getElementById("output2").innerHTML = "Player 2: " + name2;
//   document.getElementById("form-container-two").style.display = "none";
// }


const shuffledDeck = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

const apiBaseURL = "https://deckofcardsapi.com/api/deck/";
const drawCard = "/draw/?count=";

let deckId;

let deckOfCards = [];

const cardImageElement = document.getElementById('card-image');
const drawCardBtnOne = document.getElementById('draw-card-btn-1');
const drawCardBtnTwo = document.getElementById('draw-card-btn-2');


axios.get(`${shuffledDeck}`)
    .then(deck => {
        deckOfCards = deck.data;
        deckId = deck.data.deck_id;
        drawCardBtnOne.addEventListener('click', () => {
            axios.get(`${apiBaseURL}${deckId}${drawCard}1`)
                .then(response => {
                    console.log(response.data.cards[0]);
                    const card = response.data.cards[0];
                    const cardImage = document.getElementById('card-image-1');
                    cardImage.src = card.image;
                    cardImage.alt = `${card.value} of ${card.suit}`;
                })
                .catch(error => console.log(error));
        });
    }).catch(error => console.log(error));


let drawnCards = {
    '1': null,
    '2': null
};

function checkForWin() {
    if (drawnCards['1'] && drawnCards['2']) {
        const values = Object.values(drawnCards).map(card => {
            if (card.value === "ACE") {
                return 14;
            } else if (card.value === "KING") {
                return 13;
            } else if (card.value === "QUEEN") {
                return 12;
            } else if (card.value === "JACK") {
                return 11;
            } else {
                return parseInt(card.value);
            }
        });
        if (values[0] === values[1]) {
            const winnerBanner = document.querySelector('.winner__banner');
            winnerBanner.textContent = `Draw!`;
            // alert("It's a tie!");
        } else if (values[0] > values[1]) {
            setTimeout(() => {
                const winnerBanner = document.querySelector('.winner__banner');
                winnerBanner.textContent = `Player 1 Wins!`;
                //   alert("Player 1 wins!");
            }, 2000);
        } else {
            setTimeout(() => {
                const winnerBanner = document.querySelector('.winner__banner');
                winnerBanner.textContent = `Player 1 Wins!`;
                //   alert("Player 2 wins!");
            }, 2000);
        }
    }
}

drawCardBtnOne.addEventListener('click', () => {
    if (drawnCards['1']) {
        return;
    }
    axios.get(`${apiBaseURL}${deckId}${drawCard}1`)
        .then(response => {
            const card = response.data.cards[0];
            const cardImage = document.getElementById('card-image-1');
            cardImage.src = card.image;
            cardImage.alt = `${card.value} of ${card.suit}`;
            drawnCards['1'] = card;
            checkForWin();
        })
        .catch(error => console.log(error));
});

drawCardBtnTwo.addEventListener('click', () => {
    if (drawnCards['2']) {
        return;
    }
    axios.get(`${apiBaseURL}${deckId}${drawCard}1`)
        .then(response => {
            const card = response.data.cards[0];
            const cardImage = document.getElementById('card-image-2');
            cardImage.src = card.image;
            cardImage.alt = `${card.value} of ${card.suit}`;
            drawnCards['2'] = card;
            checkForWin();
        })
        .catch(error => console.log(error));
});



//  

// display Name 1
function displayNameOne() {
    let name1 = document.getElementById("name1").value;
    document.getElementById("output1").innerHTML = "Player 1: " + name1;
    document.getElementById("form-container-one").style.display = "none";
}

// display Name 2
function displayNameTwo() {
    let name2 = document.getElementById("name2").value;
    document.getElementById("output2").innerHTML = "Player 2: " + name2;
    document.getElementById("form-container-two").style.display = "none";
}
