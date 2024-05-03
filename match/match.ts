// Imports
import deck from "./deck.js"
import player from "./player.js"
import { inputManager, promptInputManager } from "./inputManager.js"

// Var Init
const characters = ["a", "b", 'c']

// Types Declaration
interface matchConfig {
    copiesOfEachCharacters: number,
    maxTimePerTurn: number,
    maxTimeToAccuse: number
}

// ---
class Match{
    // CLass Props
    #ID: string
    config: matchConfig
    
    players: player[]
    crrPlayerIdx: number = 0

    inputManager:inputManager
    charactersDeck: deck<character> = new deck<character>(characters)
    finished: boolean = false

    // ---
    constructor(
        ID:string, 
        config:matchConfig,
        players: player[],
        inputManager:inputManager
    ) {
        this.#ID = ID
        this.config = config
        this.players = players
        this.inputManager = inputManager
    }
    
    // ---
    // Game Utils
    passTurn(){
        this.crrPlayerIdx += 1
        if (this.crrPlayerIdx > this.players.length - 1) {
            this.crrPlayerIdx = 0
        } 
    }
    
    // Game Start
    async initGame(){
        // Init  ---
        this.charactersDeck.initDeck(this.config.copiesOfEachCharacters)
        this.charactersDeck.shuffle()

        // ---
        while (!this.finished){
            const crrPlayer = this.players[this.crrPlayerIdx]
            console.log(`\nComeçou a vez de ${crrPlayer.name}`)

            let result: string = <string> await Promise.race([
                new Promise((resolve) => setTimeout(()=>resolve("No Player Choice"),
                                                     this.config.maxTimePerTurn)),
                this.inputManager.expectInput()
            ])
            this.inputManager.stopInputExpectation()

            this.passTurn()

        }
    }
    
}


const a:any = new Match("AAA", {maxTimePerTurn:2000, maxTimeToAccuse:200, copiesOfEachCharacters:2}, 
            [{name:"a"}, {name:"b"}, {name:"c"}], promptInputManager);
a.initGame()