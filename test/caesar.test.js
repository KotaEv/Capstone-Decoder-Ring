const {expect} = require("chai");
const {caesar} = require("../src/caesar");



describe("caesar shift function", () => {
    
    it ("should return false if shift value is equal to 0, less than -25, greater than 25, or not present", () => {
    const shiftValues = [0, -26, 26, null, undefined];
    const actual = shiftValues.every((shift) => {
    return !caesar("bob", shift);
    });
    expect(actual).to.be.true;
    });

    it ("should ignore capital letters", () => {
    const testInput = "A";
    const expected = "b"
    const actual = caesar("A", 1);
    expect(actual).to.equal(expected)
    });

    it ("handles shifts that go past z", () => {
        const test = "z";
        const expected = "a";
        const actual = caesar("z", 1);
        expect(actual).to.equal(expected)
    });

    it ("handles shifts that go left past a", () => {
        const test = "a";
        const expected = "z";
        const actual = caesar("a", -1);
        expect(actual).to.equal(expected)
    });

    it ("spaces and characters are maintained when encoding", () => {
        const test = "a b!";
        const expected = "b c!";
        const actual = caesar("a b!", 1);
        expect(actual).to.equal(expected)
    });

    it ("spaces and characters are maintained when decoding", () => { 
        const test = "b c!";
        const expected = "a b!"
        const actual = caesar(test, 1, false);
        expect(actual).to.equal(expected);
    });

});
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

