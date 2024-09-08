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
    let average = fx / array.length;
    let min = Math.min(...array);
    let max = Math.max(...array);
    let length = array.length;
    
    return {
        "average": average,
        "length": length,
        "max": max,
        "min": min
    }
}

export {sum,capitalize,reverseString,calculator,analyzeArray};