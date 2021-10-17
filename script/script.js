let order = [];
let clickedOrder = [];
let score = 0;

// 0 == green
// 1 == red;
// 2 == yellow
// 3 == blue

const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const green = document.querySelector('.green');


// create random color order
let shuffledOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// shows the selected color
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

// check wheter the clicked bottoms are the same as the random order or not
let checkedOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\n Acertou miseravi!`);
        nextLevel();
    }
}

// clicked function
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkedOrder();
    }, 250)
}

//color response function
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//next level function
let nextLevel = () => {
    score++;
    shuffledOrder();
}

//game over function
let gameOver = () => {
    alert(`Pontuação: ${score}\n Você perdeu! \n Clique OK para iniciar um novo jogo`)
    order = [];
    clickedOrder = [];

    playGame();
}

//start game function
let playGame = () => {
    alert(`Iniciando novo jogo`);
    score = 0;
    
    nextLevel();
}

//click event for the colors
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// start game
playGame();