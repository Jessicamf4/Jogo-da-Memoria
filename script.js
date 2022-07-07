const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockboard = false;

function flipCard() {
    if(lockboard) return;

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
}
 
function unflipCards() {
    lockboard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        lockboard = false;
    }, 1500);
    //recebe uma função em um tempo
}
cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})

