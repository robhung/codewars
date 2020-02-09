const toWeirdCase = require('./toWeirdCase');

describe('toWeirdCase', function() {
  it('should return the correct value for a single word', function() {
    expect(toWeirdCase('This')).toBe('ThIs');
    expect(toWeirdCase('is')).toBe('Is');
  });
  it('should return the correct value for multiple words', function() {
    expect(toWeirdCase('Weird string case')).toBe('WeIrD StRiNg CaSe');
    expect(toWeirdCase('This is a test')).toBe('ThIs Is A TeSt');
  });
});
