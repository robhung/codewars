const isIsogram = require('./isIsogram');

describe('isIsogram', () => {
  it('should be truthy', () => {
    expect(isIsogram('Dermatoglyphics')).toBeTruthy();
    expect(isIsogram('isogram')).toBeTruthy();
  });
  it('should be truthy as an empty string is a valid isogram', () => {
    expect(isIsogram('')).toBeTruthy();
  });
  it('should be falsey', () => {
    expect(isIsogram('isIsogram')).toBeFalsy();
  });
  it('should be falsey as same chars may not be adjacent', () => {
    expect(isIsogram('aba')).toBeFalsy();
  });
  it('should be falsey as same chars may not be same case', () => {
    expect(isIsogram('moOse')).toBeFalsy();
  });
});
