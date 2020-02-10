const isIsogram = string => {
  if (typeof string === 'string') {
    const lowercase = string.toLowerCase();
    const set = new Set(lowercase);
    const hasNoRepeatingLetters = lowercase.length === set.size;

    return hasNoRepeatingLetters;
  }
};

module.exports = isIsogram;
