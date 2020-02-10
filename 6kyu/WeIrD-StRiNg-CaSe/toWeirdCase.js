const toWeirdCase = string => {
  const isEven = num => num % 2 === 0;

  const wordArr = string.split(' ');
  const newWordArr = wordArr.map(word => {
    const characterArr = word.split('');
    const newCharacterArr = characterArr.map((letter, index) =>
      isEven(index) ? letter.toUpperCase() : letter.toLowerCase()
    );

    return newCharacterArr.join('');
  });

  return newWordArr.join(' ');
};

module.exports = toWeirdCase;
