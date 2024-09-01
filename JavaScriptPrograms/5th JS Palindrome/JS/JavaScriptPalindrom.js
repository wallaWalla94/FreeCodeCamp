const inputWord = document.getElementById('text-input');
const resultLabel = document.getElementById('result');
const checkButton = document.getElementById('check-btn');



const isWord = (str) => {
    const regex = /[^a-z]/ig;
    const onlyAlphabet = str.replace(regex, '')
    return onlyAlphabet;
};

const reverseWord = (word) => {
    isWord(word);
    const upperCase = word.toUpperCase();
    return [...upperCase.split('')].reverse();
};

const palindromeCheck = (word) => {
    if (!word) {
        return "Please input a value";
    };
    const arrayWord = isWord(word).toUpperCase().split('');
    const arrayReversed = reverseWord(word);
    for (let i = 0; i < arrayWord.length; i++) {
        if (arrayWord[i] !== arrayReversed[i]) {
            return `${inputWord.value} is not a palindrome`;
        }
        return `${inputWord.value} is a palindrome`;
    }
};


const onClick = () => {
    resultLabel.innerText = palindromeCheck(inputWord.value);
}

checkButton.addEventListener("click", onClick);