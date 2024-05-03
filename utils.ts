//General
export function onTimeout(ms:number): Promise<undefined>{
    return new Promise((resolve, rej) => setTimeout(resolve, ms))
}

// Math
export function randInt(min:number, max:number): number {
    return min + Math.round(Math.random()*(max-min))
}

