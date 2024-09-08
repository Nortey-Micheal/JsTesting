import {sum,capitalize,reverseString,calculator,analyzeArray,caesarCipher} from "./index.js";

test("Done",() => {

})

test("Add 1 + 2 to equal 3", () => {
    expect(sum(1,2)).toBe(3)
})

test("Capitalize a string", () => {
    expect(capitalize("goat")).toBe("Goat")
})

test("Reverse a string", () => {
    expect(reverseString("goat")).toBe("taog")
})

test("Calculator's add function", () => {
    expect(calculator().add(4,2)).toBe(6);
})

test("Calculator's subtract function",() => {
    expect(calculator().subtract(4,1)).toBe(3);
})

test("Calculator's divide function",() => {
    expect(calculator().divide(4,2)).toBe(2);
})

test("Calculator's multiply function",() => {
    expect(calculator().multiply(4,2)).toBe(8);
})

test("Analyzing the provided array", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     });
})

test("Make a caesar cipher of texts", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
})