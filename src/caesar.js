// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
    //encode 
  function encoder(input, shift) {
    //define lowercase and the key/starting message
      let newInput = input.toLowerCase();
    const key = 'abcdefghijklmnopqrstuvwxyz'
    let newMessage = ''
    //loop
    for (let i = 0; i < newInput.length; i++) {
     
      const letter = newInput[i];
     //see if key has the newInput(letter) add to message
      if (!key.includes(newInput[i])) {
        newMessage += newInput[i]
      } else { //shift
      const letterNum = key.indexOf(letter);
      let newIndex = letterNum + shift;
      //allow for wrap of ending of alphabet
      if (newIndex >= 26) {
        newIndex = newIndex - 26
      }
      if (newIndex < 0) {
        newIndex = newIndex + 26
      }
      newMessage += key[newIndex]
    }
    }
    return newMessage
    }
     
  //decode
      function decoder (input, shift) {
        //lower case and key/new message
  let newInput = input.toLowerCase();
  const key = 'abcdefghijklmnopqrstuvwxyz'
  let newMessage = ''
  //loop
  for (let i = 0; i < newInput.length; i++) {
    //decode the newInput as a string
    const letter = newInput[i];
    if (!key.includes(newInput[i])) {
      newMessage += newInput[i]
    } else {
    const letterNum = key.indexOf(letter);
    
    let newIndex = 0;
    
     
     if (shift >= 0) {
     newIndex = letterNum - shift;
      } else {
        newIndex = letterNum - (shift + 26);
      }
      
    if (newIndex < 0) {
      newIndex = newIndex + 26
    }
    
    newMessage += key[newIndex]
  }
  }
  return newMessage
}

     

  function caesar(input, shift, encode = true) {
    if (!shift || shift > 25 || shift < -25) return false;
    if (encode) {
      return encoder(input, shift)
    } else {
      return decoder(input, shift)
    }
   }
  
  return {
    caesar,
  };
})();


module.exports = { caesar: caesarModule.caesar };
