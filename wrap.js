const wrap = (line, maxLen) => {
    if (line.length <= maxLen) {
        return line;
    } else {
        let words = line.split(' ');
        let counter = 0;
        let left = [];

        while (counter <= maxLen) {
            if (counter + words[0].length <= maxLen) {
                let newWord = words.shift();
                left.push(newWord);
                counter += newWord.length + 1;                
            } else if (words[0].length > maxLen) {
                
            } else {
                counter = Infinity;
            }
        }

        let right = words.join(' ');    
        return `${left.join(' ')}\n${wrap(right, maxLen)}` 
    }
};
module.exports = wrap;