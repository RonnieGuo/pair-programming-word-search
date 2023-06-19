const wordSearch = (letters, word) => { 
    if (word === '') {
        return false; // If the word is empty, return false
      }


    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    const transposedLetters = transpose(letters);
    const verticalJoin = transposedLetters.map(ls => ls.join(''));
  
    for (let l of verticalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
  
    return false;
  };
  
  const transpose = function(matrix) {
    const arrays = matrix[0].length;
    let newMatrix = [];
    
    for (let i = 0; i < arrays; i++) {
      newMatrix.push(matrix.map((row) => row.shift()));
    }
    
    return matrix = newMatrix;
  };
  
  module.exports = wordSearch;