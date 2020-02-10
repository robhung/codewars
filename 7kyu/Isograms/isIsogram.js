const isIsogram = string => {
  if (typeof string === 'string') {
    const lowercase = string.toLowerCase();
    const set = new Set(lowercase);
    const convertedString = [...set].join('');
    const hasNoRepeatingLetters = lowercase === convertedString;

    return hasNoRepeatingLetters;
  }
};

module.exports = isIsogram;
