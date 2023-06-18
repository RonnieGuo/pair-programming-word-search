const wordSearch = (letters, word) => { 
    if (word === '') {
        return false; // If the word is empty, return false
      }

    // If the word is found horizontally, return true
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    // If the word is found vertically, return true
    for (let row of letters) {
        const columnJoin = row.join('');
        if (columnJoin.includes(word)) {
          return true; 
        }
      }
    
      return false; 
};

module.exports = wordSearch;