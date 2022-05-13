const ref = {
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

const ref2 = Object.fromEntries(Object.entries(ref).map((a) => a.reverse()));

console.log(ref);
console.log(ref2);
console.log(Object.entries(ref2).join(","));

// create a function where a string which is a sentence is converted into morse code
// create a function where a string of morse code is converted into a sentence

const outputText = [];

const translate = (inputText) => {
    const arr = inputText.toLowerCase().split("");
    const output = arr.map((character) => ref2[character]);
    const final = output.join(" ");
    console.log(final);
    return final;
};

translate("I like you do you like me?");

const decode = (morseCode) => {
    const arr = morseCode.split(" ");
    const output = arr.map((index) => ref[index]);
    const final = output.join("");

    return final;
};

decode(
    ".. / .-.. .. -.- . / -.-- --- ..- / -.. --- / -.-- --- ..- / .-.. .. -.- . / -- . ··--··"
);

const outputField = document.querySelector(".wrapper_Output");
const inputField = document.querySelector(".wrapper_Input");
const buttonGenerate = document.querySelector(".wrapper_Button-Generate");
const buttonChangeMode = document.querySelector(".wrapper_Button-Mode");
const modeIndicator = document.querySelector(".wrapper_Container_Mode");
let mode = false;

const changeMode = (event) => {
    event.preventDefault();
    mode = !mode;
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
buttonChangeMode.addEventListener("click", changeMode);
