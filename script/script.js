let order = []
let clickOrder = []
let score = 0

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4)
    order[order.length] = colorOrder
    clickOrder =  []

    for(let i in order) {
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i) + 1)
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500
    setTimeout( () => {
        element.classList.add('selected')
    }, number - 250)
    setTimeout(() => {
        element.classList.remove('selected')
    })
}

//checa se a ordem apertada esta certa
let checkOrder = () => {
    for(let i in clickOrder) {
        if( clickOrder[i] != order[i]) {
            GameOver()
            break
        }
    }
    if(clickOrder.length == order.length) {
        alert(`Pontuacao: ${score}\nVoce acertou a sequencia\n vamos para o proximo nivel`)
        nextLevel()
    }
}

//funcao para o click do usuario

let click = (color) => {
    clickOrder[clickOrder.length] = color
    createColorElement(color).classList.add('selected')
    
    setTimeout( () => {
        createColorElement(color).classList.remove('selected')
        checkOrder()
    }, 250)
}

//funcao que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green
    } else if(color == 1) {
        return red
    } else if(color == 2) {
        return yellow
    } else if(color == 3) {
        return blue
    }
}

////funcao para subir de nivel do jogo
let nextLevel = () => {
    score++
    shuffleOrder()
}

//funcao de fim de jogo
let GameOver = () => {
    alert (`Fim de Jogo\nPontuacao: ${score}\n click em Ok para reiniciar o jogo`)
    order = []
    clickOrder = []

    playGame()
}

//funcao iniciar o jogo
let playGame = () => {
    score = 0
    alert('bem vindo ao Genius!\n Iniciando novo jogo')

    nextLevel()
}

green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

playGame()