// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  //define alpha
  let trueAlphabet = 'abcdefghijklmnopqrstuvwxyz'
  
  //set up sub alpha
  function unique(alphabet) {
    return new Set(alphabet).size == alphabet.length;
  }
    //encode
    function encoder (input, alphabet) {
      if (!alphabet) return false;
      //call helper function of sub alpha
      let uniqueTest = unique(alphabet);
      if (!uniqueTest) return false;
      if (alphabet.length != 26) return false;
//define message and lower case
      let message = '';
      input = input.toLowerCase();
      //loop
      for (let i = 0; i < input.length; i++) {
        //if no input return empty message
      if (input[i] == ' ') {
        message += ' '
      } else { //index the original alpha with input
      let index = trueAlphabet.indexOf(input[i]);
        //message is the alphabet correctly
      message += alphabet[index]
      }
      }
      return message
    }


//decode
  function decoder (input, alphabet) {
    if (!alphabet) return false;
    let uniqueTest = unique(alphabet);
    if (!uniqueTest) return false;
    if (alphabet.length != 26) return false;

    let message = '';
    input = input.toLowerCase();

    for (let i = 0; i < input.length; i++) {
    if (input[i] == ' ') {
      message += ' '
    } else {
    let index = alphabet.indexOf(input[i])
    //message is the encoded alpha
    message += trueAlphabet[index];
    }
    }
    return message
  }
  
  function substitution(input, alphabet, encode = true) {
    if (encode) {
      return encoder(input, alphabet)
      } else {
      return decoder(input, alphabet)
      }
    }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
