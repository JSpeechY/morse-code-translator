import { ref, ref2 } from "./data";

export const translate = (inputText) => {
    const arr = inputText.toLowerCase().split("");
    const output = arr.map((character) => ref2[character]);
    const final = output.join(" ");
    return final;
};

export const decode = (morseCode) => {
    const arr = morseCode.split(" ");
    const output = arr.map((index) => ref[index]);
    const final = output.join("");
    return final;
};
