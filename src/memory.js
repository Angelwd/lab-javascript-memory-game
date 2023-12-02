class MemoryGame {
  constructor(cards) {
    this.cards = cards,
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    if(!this.cards){
      return undefined
    }
        for(let i = this.cards.length -1; i > 0; i--){
          let randomCard = Math.floor(Math.random() * (i + 1))
          let temporary = this.cards[i];
          this.cards[i] = this.cards[randomCard];
          this.cards[randomCard] = temporary;
        
    }
    return this.cards
  }

  checkIfPair(card1, card2) {
    // ... write your code here
       if(card1 === card2){
         this.pairsGuessed++
         this.pairsClicked++
         return true
       }
       else if(card1 !== card2){
         this.pairsClicked++
         return false
       }
       

  }

  checkIfFinished() {
    // ... write your code here

    if(this.pairsGuessed === 0){
      return false
    }
    else if(this.pairsGuessed > 0 && this.pairsGuessed < 12){
      return false
    }
    else if(this.pairsGuessed === 12){
      return true
    }
  }
}
