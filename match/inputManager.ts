export type inputManager = {[key:string]:any}&{
    expectInput: () => Promise<string>,
    stopInputExpectation: () => void
}

//Prompt Input
import readline from "readline"

export const promptInputManager: inputManager = {
    promptInterface: undefined,
    expectInput: () => {
        promptInputManager.promptInterface = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        promptInputManager.promptInterface.resume()
        return new Promise((resolve) => {
            promptInputManager.promptInterface.question("Qual sua Decisão? ", 
            (answer: string) => {
                resolve(answer)
            })
        });
    },
    stopInputExpectation: () => {
        promptInputManager.promptInterface.close()
    }
}