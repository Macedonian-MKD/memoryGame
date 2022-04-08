const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "icecream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "icecream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

// randomly sort an array
cardArray.sort(() => Math.random() - 0.5);

const grid = document.querySelector("#grid");
const resultDisplay = document.getElementById("result");
const clicks = document.getElementById("clicks");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];
let tries = 0;
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.src = "images/blank.png";
    card.dataset.id = i;
    card.addEventListener("click", flipCard);
    grid.append(card);
  }
}

createBoard();

function flipCard() {
  const cardId = this.dataset.id;
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.src = cardArray[cardId].img;
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
    tries++;
    clicks.innerText = tries;
  }
}
function checkMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  if (optionOneId === optionTwoId) {
    cards[optionOneId].src = "images/blank.png";
    cards[optionTwoId].src = "images/blank.png";
    alert("YOu clicked twice on same img");
  }
  if (cardsChosen[0] === cardsChosen[1]) {
    cards[optionOneId].src = "images/white.png";
    cards[optionTwoId].src = "images/white.png";
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].src = "images/blank.png";
    cards[optionTwoId].src = "images/blank.png";
  }
  resultDisplay.textContent = cardsWon.length;
  cardsChosen = [];
  cardsChosenIds = [];
  if (cardsWon.length === cardArray.length / 2) {
    grid.innerHTML =
      "<div class='congrats'>Congratulations! 🎉</div><div class='again'>Try Again</div>";
    const again = document.querySelector(".again");
    again.addEventListener("click", function () {
      // window.location.reload();
      grid.innerHTML = "";
      resultDisplay.textContent = 0;
      clicks.textContent = 0;
      createBoard();
    });
  }
}
