const wordSearch = (letters, word) => { 
    if (!word || typeof word !== 'string'){
        return false
    }
    word = word.toUpperCase();

    let words = [];

    //horizontal looping
    for (let item in letters) {
        let word = letters[item].join('');
        words.push(word);
    }

    //vertical looping
    for (let x = 0; x < letters[0].length; x++) {
        let array = [];
        for (let y = 0; y <letters.length; y++) {
            array.push(letters[y][x]) 
        }let word = array.join('')
        words.push(word);
    }
    //console.log(words)

    //check if string is one of the items in the arrays
    for (let item of words){
        if(item.includes(word)){
            console.log(word)
            return true;
        }
    }
    return false;
}

console.log(wordSearch([
    ['A', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'R', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'A', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'N', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'K', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], undefined));

//

module.exports = wordSearch





