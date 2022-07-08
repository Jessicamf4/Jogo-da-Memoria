const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockboard = false;

function flipCard() {
    if(lockboard) return;
    if(this === firstCard)
    return;

    this.classList.add('flip');
    //quando o contexto for chamado vai acidonar o que você estivier clicando no memento
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
        //vmos ver se o has.. está setado como true
        //first vai retornar this , ou seja, o elemento que foi clicado
    }
    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}
//classList.toggle =>toggle = adiciona e tira carta váris vezes
//classList.add => add só adiviona a class uma vez

function checkForMatch() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
        //verifica se os dois cards são iguais, se forem eles irão virar
    }
    unflipCards();

}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}
 
function unflipCards() {
    lockboard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

    resetBoard();
        //para que seja possível jogar novamente
    }, 1500);
    //recebe uma função em um tempo
}

function resetBoard(){
    [hasFlippedCard, lockboard] = [false, false];
    //Temos o primeiro array e o segundo com as propriedades
    // seta os dois como falsos
    [firstCard, secondCard] = [null, null];
    //vão ser tratadas como zero nula
}


//função é renderisada quando for chamada = encapsula ela dentro de um parênteses
//e invoca ela como uma função ()

//oder número inteiro, vai alerr o cantainer
//flex conteine, cada um recebe um número, temos divs com 2 imagens cada uma das imagens vai ter um número

(function shuffle() {
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 6);
        card.style.order = randomPosition;

    })
}) ();


//Math.floor = arredonda o resultado da expressão
    //número de 0 a 5


cards.forEach((card) => {
    card.addEventListener('click', flipCard)
});