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

function caesarCipher (string,shiftFactor) {
    let result = ""
    for (let i = 0; i < string.length; i++)
    {
        let char = string[i];
        if (char.match(/[a-zA-Z]/)) {
            if (char.toUpperCase() === string[i]) {
                let ch =  String.fromCharCode((char.charCodeAt(0) + shiftFactor - 65) % 26 + 65);
                result += ch;
            } else if (char.toLowerCase() === string[i]) {
                let ch = String.fromCharCode((char.charCodeAt(0) + shiftFactor - 97) % 26 + 97);
                result += ch;
            }
        } else {
            result += char;
        }
    }
    return result;
}

export {sum,capitalize,reverseString,calculator,analyzeArray,caesarCipher};