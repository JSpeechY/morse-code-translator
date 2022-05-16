export const ref = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
    "/": " ",
    "-.-.--": "!",
    ".-.-.-": ".",
    "--..--": ",",
    "..--..": "?",
};

export const ref2 = Object.fromEntries(
    Object.entries(ref).map((a) => a.reverse())
);

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

const outputField = document.querySelector(".container_Output");
const inputField = document.querySelector(".container_Input");
const buttonGenerate = document.querySelector(
    ".buttonsContainer_Button-Generate"
);
const buttonSwitchMode = document.querySelector(
    ".buttonsContainer_Button-Switch"
);
const modeIndicator = document.querySelector(".wrapper_Text");
let mode = false;

const switchMode = (event) => {
    event.preventDefault();
    mode = !mode;
    let tmp = outputField.value;
    outputField.innerHTML = inputField.value;
    inputField.value = tmp;

    if (mode === false) {
        return (modeIndicator.innerHTML = "Decoding Morse");
    } else {
        return (modeIndicator.innerHTML = "Generating Morse Code");
    }
};

const generateOutput = (event) => {
    event.preventDefault();
    if (mode === true) {
        outputField.innerHTML = translate(inputField.value);
    } else {
        outputField.innerHTML = decode(inputField.value);
    }
};

buttonGenerate.addEventListener("click", generateOutput);
buttonSwitchMode.addEventListener("click", switchMode);
