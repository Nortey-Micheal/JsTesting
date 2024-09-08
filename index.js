function sum (a,b) {
    return a + b;
}

function capitalize (word) {
    let newWord = word.slice(1)
    let capital = word[0].toUpperCase();
    return capital + newWord;
}

function reverseString (word) {
    let newString = ""
    for (let index = word.length - 1; index >= 0; index--) {
        newString += word[index]
    }
    return newString;
}

function calculator() {
    const add = (a,b) => {
        return a + b;
    }

    const subtract = (a,b) => {
        return a - b;
    }

    const divide = (a,b) => {
        return a / b;
    }

    const multiply = (a,b) => {
        return a * b;
    }

    return {
        add,
        subtract,
        divide,
        multiply
    }
}

function analyzeArray (array) {
    let fx = 0;
    for (let index = 0; index < array.length; index++) {
        fx += array[index]
    }
    
    return {
        "average": fx / array.length,
        "length": array.length,
        "max": Math.max(...array),
        "min": Math.min(...array)
    }
}

export {sum,capitalize,reverseString,calculator,analyzeArray};