function whitchinputtype1(){
    const choice = document.getElementById("Selecting1").value;
    var inputtype = document.getElementById("key1");
    if (choice === "Plotkowy") {
        inputtype.type = 'number';
        document.getElementById("key1").value = '';
    }else if (choice === "Kolumnowy") {
        inputtype.type = 'text';
        document.getElementById("key1").value = '';
    }
}


function whichoption1_enc() {
    const choice = document.getElementById("Selecting1").value;
    if (choice === "Plotkowy") {
        Plotkowy_enc();
    } else if (choice === "Kolumnowy") {
        Kolumnowy_enc();
    }
}
function whichoption1_dec() {
    const choice = document.getElementById("Selecting1").value;
    if (choice === "Plotkowy") {
        Plotkowy_dec();
    } else if (choice === "Kolumnowy") {
        Kolumnowy_dec();
    }
}
function Plotkowy_enc() {
    var input = document.getElementById('input_selecting1').value;
    let key = document.getElementById("key1").value;
    let result = szyfrPlotkowy(input, key);
    document.getElementById('output_selecting1').value = result;
}
function Plotkowy_dec() {
    var output =  document.getElementById('output_selecting1').value;
    let key = document.getElementById("key1").value;
    let result = railFenceCipherDecrypt(output, key);
    document.getElementById('input_selecting1').value = result;
}

function Kolumnowy_enc() {
    var input = document.getElementById('input_selecting1').value;
    let key = document.getElementById("key1").value;
    let result = columnarCipherEncrypt(input, key);
    document.getElementById('output_selecting1').value = result;
}
function Kolumnowy_dec() {
    var output =  document.getElementById('output_selecting1').value;
    let key = document.getElementById("key1").value;
    let result = columnarCipherDecrypt(output, key);
    document.getElementById('input_selecting1').value = result;
}

function szyfrPlotkowy(input, key) {
    let szyfr = [];
    for(let i = 0; i < key; i++)
        szyfr[i] = [];
    let direction = -1;
    let row = 0;

    for(let i = 0; i < input.length; i++) {
        if(row === 0 || row === key - 1)
            direction *= -1;
        szyfr[row].push(input[i]);
        row += direction;
    }

    let result = '';
    for(let i = 0; i < key; i++)
        result += szyfr[i].join('');

    return result;
} 
function railFenceCipherDecrypt(output, key) {
    let cipher = [];
    for(let i = 0; i < key; i++)
        cipher[i] = [];
    let direction = -1;
    let row = 0;
    let index = 0;

    for(let i = 0; i < output.length; i++) {
        if(row === 0 || row === key - 1)
            direction *= -1;
        cipher[row].push(null);
        row += direction;
    }

    for(let i = 0; i < key; i++) {
        for(let j = 0; j < cipher[i].length; j++) {
            cipher[i][j] = output[index];
            index++;
        }
    }

    let result = '';
    row = 0;
    direction = -1;

    for(let i = 0; i < output.length; i++) {
        if(row === 0 || row === key - 1)
            direction *= -1;
        result += cipher[row].shift();
        row += direction;
    }

    return result;
}

function columnarCipherEncrypt(input, key) {
    let encryptedinput = "";
    const numRows = Math.ceil(input.length / key.length);
    let matrix = Array(numRows).fill(null).map(() => Array(key.length).fill(' '));

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < key.length; j++) {
            let charIndex = i * key.length + j;
            if (charIndex < input.length) {
                matrix[i][j] = input[charIndex];
            }
        }
    }

    let keyIndices = Array.from(key).map((char, index) => index);
    keyIndices.sort((a, b) => key[a].localeCompare(key[b]));

    for (let k = 0; k < keyIndices.length; k++) {
        for (let i = 0; i < numRows; i++) {
            encryptedinput += matrix[i][keyIndices[k]];
        }
    }

    return encryptedinput;
}
function columnarCipherDecrypt(output, key) {
    let decryptedText = "";
    const numRows = Math.ceil(output.length / key.length);
    let matrix = Array(numRows).fill(null).map(() => Array(key.length).fill(' '));

    let keyIndices = Array.from(key).map((char, index) => index);
    keyIndices.sort((a, b) => key[a].localeCompare(key[b]));

    let charIndex = 0;
    for (let k = 0; k < keyIndices.length; k++) {
        for (let i = 0; i < numRows; i++) {
            if (charIndex < output.length) {
                matrix[i][keyIndices[k]] = output[charIndex];
                charIndex++;
            }
        }
    }

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < key.length; j++) {
            decryptedText += matrix[i][j];
        }
    }

    return decryptedText.trim();
}


function Cezar_enc() {
    var input = document.getElementById('selecting2-inout').value;
    var key = parseInt(document.getElementById('cezar_key').value);
    var checkbox = document.getElementById('PL');
    if (checkbox.checked) {
        var result = szyfrcezara_szyfrowanie_pl(input, key);
    } else {
        var result = szyfrcezara_szyfrowanie(input, key);
    }
    document.getElementById('selecting2-inout').value = result;
}
function Cezar_dec() {
    var input = document.getElementById('selecting2-inout').value;
    var key = parseInt(document.getElementById('cezar_key').value);
    var checkbox = document.getElementById('PL');

    if (checkbox.checked) {
        
        var result = deszyfrujSzyfrCezara_pl(input, key);
    } else {
        var result = deszyfrujSzyfrCezara(input, key);
    }
    document.getElementById('selecting2-inout').value = result;
}

function szyfrcezara_szyfrowanie(input,key ) {
    var result = '';

    for (var i = 0; i < input.length; i++) {
        var code = input.charCodeAt(i);

        if (code >= 65 && code <= 90) {
            result += String.fromCharCode((code - 65 + key) % 26 + 65);
        } else if (code >= 97 && code <= 122) {
            result += String.fromCharCode((code - 97 + key) % 26 + 97);
        } else {
            result += input.charAt(i);
        }
    }

    return result;
}

function szyfrcezara_szyfrowanie_pl(input, key) {
    var lowerAlphabet = 'aąbcćdeęfghijklłmnńoóprsśtuwyzźż';
    var upperAlphabet = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ';
    var result = '';

    for (var i = 0; i < input.length; i++) {
        var char = input[i];
        var isUpper = char === char.toUpperCase();
        var currentAlphabet = isUpper ? upperAlphabet : lowerAlphabet;

        var index = currentAlphabet.indexOf(char);
        if (index !== -1) {
            var encryptedIndex = (index + key) % currentAlphabet.length;
            var encryptedChar = currentAlphabet[encryptedIndex];
            result += encryptedChar;
        } else {
            result += input[i];
        }
    }

    return result;
}

function deszyfrujSzyfrCezara(input, key) {
    var result = '';
    for (let i = 0; i < input.length; i++) {
        let letter = input[i];
        if (letter.match(/[a-z]/i)) {
            let code = input.charCodeAt(i);
            let a = (letter == letter.toUpperCase()) ? 65 : 97;
            result += String.fromCharCode(a + ((code - a - key + 26) % 26));
        } else {
            result += letter;
        }
    }
    return result;
}
function deszyfrujSzyfrCezara_pl(input, key) {
    var lowerAlphabet = 'aąbcćdeęfghijklłmnńoóprsśtuwyzźż';
    var upperAlphabet = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ';
    var result = '';

    for (var i = 0; i < input.length; i++) {
        var char = input[i];
        var isUpper = char === char.toUpperCase();
        var currentAlphabet = isUpper ? upperAlphabet : lowerAlphabet;

        var index = currentAlphabet.indexOf(char);
        if (index !== -1) {
            var decryptedIndex = (index - key + currentAlphabet.length) % currentAlphabet.length;
            var decryptedChar = currentAlphabet[decryptedIndex];
            result += decryptedChar;
        } else {
            result += input[i];
        }
    }

    return result;
}

// var visible_checkbox = document.querySelector('#switch_div');
// visible_checkbox.display = 'none';
function whitchinputtype2(){
    const choice = document.getElementById("Selecting2").value;
    var visible_checkbox = document.querySelector('#switch_div');
    var visible_input = document.querySelector('#key2');
    var space = document.querySelector('.form_spacing')
    if (choice === "Atbasz") {
        visible_checkbox.style.display = '';
        visible_input.style.display = 'none';
        space.style.margin = '50px 0px 0px 0px';
    } else if (choice === "Playfair") {
        visible_checkbox.style.display = 'none';
        visible_input.style.display = '';
        space.style.margin = '32px 0px 0px 0px';
    }
}

function whichoption2_enc() {
    const choice = document.getElementById("Selecting2").value;
    if (choice === "Atbasz") {
        Atbasz_enc();
    } else if (choice === "Playfair") {
        Playfair_enc();
    }
}
function whichoption2_dec() {
    const choice = document.getElementById("Selecting2").value;
    if (choice === "Atbasz") {
        Atbasz_dec();
    } else if (choice === "Playfair") {
        Playfair_dec();
    }
}

function Atbasz_enc(){
    var input = document.getElementById('input_selecting2').value;
    var checkbox = document.getElementById('PL2');
    var alfabet;
    if (checkbox.checked) {
        alfabet = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ';
        var result = szyfrAtbash(input, alfabet);
    } else {
        alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = szyfrAtbash(input, alfabet);
    }
    document.getElementById('output_selecting2').value = result;
}

function Atbasz_dec(){
    var output = document.getElementById('output_selecting2').value;
    var checkbox = document.getElementById('PL2');
    var alfabet;
    if (checkbox.checked) {
        alfabet = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ';
        var result = deszyfrAtbash(output, alfabet);
    } else {
        alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = deszyfrAtbash(output, alfabet);
    }
    document.getElementById('input_selecting2').value = result;
}



function szyfrAtbash(input,alfabet) {

    var alphabet = alfabet;
    var przesunietyAlfabet = alphabet.split('').reverse().join('');
    var result = '';

    for (var i = 0; i < input.length; i++) {
        var litera = input[i].toUpperCase();
        var indeks = alphabet.indexOf(litera);

        if (indeks !== -1) {
            result += przesunietyAlfabet[indeks];
        } else {
            result += input[i];
        }
    }

    return result;
}

function deszyfrAtbash(output, alfabet) {

    var alphabet = alfabet;
    var przesunietyAlfabet = alphabet.split('').reverse().join('');
    var result = '';

    for (var i = 0; i < output.length; i++) {
        var litera = output[i].toUpperCase();
        var indeks = przesunietyAlfabet.indexOf(litera);

        if (indeks !== -1) {
            result += alphabet[indeks];
        } else {
            result += output[i];
        }
    }

    return result;
}



function Playfair_enc(){
    var key = document.getElementById('key2').value;
    var preparedKey = prepareKey(key);
    var input_to_correct = document.getElementById('input_selecting2').value;
    var input = correctInput(input_to_correct);
    var result = playfairCipher(input, preparedKey);
    document.getElementById('output_selecting2').value = result;
}
function Playfair_dec(){
    var key = document.getElementById('key2').value;
    var preparedKey = prepareKey(key);
    var input_to_correct = document.getElementById('output_selecting2').value;
    var input = correctInput(input_to_correct);
    var result = playfairCipher(input, preparedKey);
    document.getElementById('input_selecting2').value = result;
}

function prepareKey(key) {
    var alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    var preparedKey = "";
    for (var i = 0; i < key.length; i++) {
        if (preparedKey.indexOf(key[i]) === -1) {
            preparedKey += key[i];
        }
    }
    for (var i = 0; i < alphabet.length; i++) {
        if (preparedKey.indexOf(alphabet[i]) === -1) {
            preparedKey += alphabet[i];
        }
    }
    return preparedKey;
}
function generatePlayfairKey(preparedKey) {
    var key = preparedKey;
    var alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    var playfairKey = "";

    for (var i = 0; i < key.length; i++) {
        if (playfairKey.indexOf(key[i]) === -1) {
            playfairKey += key[i];
        }
    }
    for (var i = 0; i < alphabet.length; i++) {
        if (playfairKey.indexOf(alphabet[i]) === -1) {
            playfairKey += alphabet[i];
        }
    }
    return playfairKey;
}
function correctInput(input_to_correct) {
    var input = input_to_correct;
    var correctedInput = "";
    for (var i = 0; i < input.length; i++) {
        var char = input[i];
        if (char >= 'a' && char <= 'z') {
            // Convert lowercase letters to uppercase
            correctedInput += char.toUpperCase();
        } else if (char >= 'A' && char <= 'Z') {
            correctedInput += char;
        }
    }
    // If the length of the input is odd, add an 'X' at the end
    if (correctedInput.length % 2 !== 0) {
        correctedInput += 'X';
    }
    return correctedInput;
}


function playfairCipher(input, preparedKey) {
    var key = preparedKey;
    var playfairKey = generatePlayfairKey(key);
    var output = "";
    console.log('klucz: '+key + ' , fair-klucz: ' + playfairKey + ' , input: ' + input + ' ,  output: ' + output);
    for (var i = 0; i < input.length; i += 2) {
        var firstLetter = playfairKey.indexOf(input[i]);
        var secondLetter = playfairKey.indexOf(input[i + 1]);
        var row1 = Math.floor(firstLetter / 5);
        var col1 = firstLetter % 5;
        var row2 = Math.floor(secondLetter / 5);
        var col2 = secondLetter % 5;
        if (row1 === row2) {
            output += playfairKey[row1 * 5 + ((col1 + 1) % 5)];
            console.log('aoutput-to:' + output);
            output += playfairKey[row2 * 5 + ((col2 + 1) % 5)];
        } else if (col1 === col2) {
            output += playfairKey[((row1 + 1) % 5) * 5 + col1];
            output += playfairKey[((row2 + 1) % 5) * 5 + col2];
        } else {
            output += playfairKey[row1 * 5 + col2];
            output += playfairKey[row2 * 5 + col1];
        }
    }

    return output;
}

function Playfair_enc(){
    var key = document.getElementById('key2').value;
    var preparedKey = prepareKey(key);
    var input_to_correct = document.getElementById('input_selecting2').value;
    var input = correctInput(input_to_correct);
    var result = playfairCipher(input, preparedKey);
    document.getElementById('output_selecting2').value = result;
}
function Playfair_dec(){
    var key = document.getElementById('key2').value;
    var preparedKey = prepareKey(key);
    var input_to_correct = document.getElementById('output_selecting2').value;
    var input = correctInput(input_to_correct);
    var result = playfairCipher(input, preparedKey);
    document.getElementById('input_selecting2').value = result;
}

function prepareKey(key) {
    var alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    var preparedKey = "";
    for (var i = 0; i < key.length; i++) {
        if (preparedKey.indexOf(key[i]) === -1) {
            preparedKey += key[i];
        }
    }
    for (var i = 0; i < alphabet.length; i++) {
        if (preparedKey.indexOf(alphabet[i]) === -1) {
            preparedKey += alphabet[i];
        }
    }
    return preparedKey;
}
function generatePlayfairKey(preparedKey) {
    var key = preparedKey;
    var alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    var playfairKey = "";

    for (var i = 0; i < key.length; i++) {
        if (playfairKey.indexOf(key[i]) === -1) {
            playfairKey += key[i];
        }
    }
    for (var i = 0; i < alphabet.length; i++) {
        if (playfairKey.indexOf(alphabet[i]) === -1) {
            playfairKey += alphabet[i];
        }
    }
    return playfairKey;
}
function correctInput(input_to_correct) {
    var input = input_to_correct;
    var correctedInput = "";
    for (var i = 0; i < input.length; i++) {
        var char = input[i];
        if (char >= 'a' && char <= 'z') {
            // Convert lowercase letters to uppercase
            correctedInput += char.toUpperCase();
        } else if (char >= 'A' && char <= 'Z') {
            correctedInput += char;
        }
    }
    // If the length of the input is odd, add an 'X' at the end
    if (correctedInput.length % 2 !== 0) {
        correctedInput += 'X';
    }
    return correctedInput;
}


function playfairCipher(input, preparedKey) {
    var key = preparedKey;
    var playfairKey = generatePlayfairKey(key);
    var output = "";
    console.log('klucz: '+key + ' , fair-klucz: ' + playfairKey + ' , input: ' + input + ' ,  output: ' + output);
    for (var i = 0; i < input.length; i += 2) {
        var firstLetter = playfairKey.indexOf(input[i]);
        var secondLetter = playfairKey.indexOf(input[i + 1]);
        var row1 = Math.floor(firstLetter / 5);
        var col1 = firstLetter % 5;
        var row2 = Math.floor(secondLetter / 5);
        var col2 = secondLetter % 5;
        if (row1 === row2) {
            output += playfairKey[row1 * 5 + ((col1 + 1) % 5)];
            console.log('aoutput-to:' + output);
            output += playfairKey[row2 * 5 + ((col2 + 1) % 5)];
        } else if (col1 === col2) {
            output += playfairKey[((row1 + 1) % 5) * 5 + col1];
            output += playfairKey[((row2 + 1) % 5) * 5 + col2];
        } else {
            output += playfairKey[row1 * 5 + col2];
            output += playfairKey[row2 * 5 + col1];
        }
    }

    return output;
}


