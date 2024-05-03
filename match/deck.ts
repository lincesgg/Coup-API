import {randInt} from "../utils.js"

export default class deck<T>{
    deck: T[]
    cardTypes: T[]

    // ----
    constructor(cardTypes:T[]){
        this.cardTypes = cardTypes
    }

    // ----
    shuffle() {
        const deckSize = this.deck.length

        if (deckSize <= 0) throw Error("Your Deck should Have Cards to Be Shuffled!")

        for (let crrCardIdx=0; crrCardIdx<deckSize; crrCardIdx++){
            const newCardIdx = randInt(0, deckSize-1)
            const otherCardSwapped = this.deck[newCardIdx]

            this.deck[newCardIdx] = this.deck[crrCardIdx]
            this.deck[crrCardIdx] = otherCardSwapped
        }
    }

    initDeck(cardCopiesAmount:number): void{
        this.deck = []

        // Putting Characters Card Into Deck
        for (let card of this.cardTypes){
            for (let i=0; i<cardCopiesAmount; i++){
                this.deck.push(card)
            }
        }
    }
}