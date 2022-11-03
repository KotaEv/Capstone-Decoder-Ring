// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
 //define cipher code
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const decodingAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', '(i/j)', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ']
  const cipherArray = [11, 21, 31, 41, 51, 12, 22, 32, 42, 52, 13, 23, 33, 43, 53, 14, 24, 34, 44, 54, 15, 25, 35, 45, 55, 00] 
  let square = {1: ['a', 'b', 'c', 'd', 'e'], 2: ['f', 'g', 'h', '(i/j)', 'k'], 3: ['l', 'm', 'n', 'o', 'p'], 4: ['q', 'r', 's', 't', 'u'], 5: ['v', 'w', 'x', 'y', 'z']};
  
 //decode
 function decoder (input) {
   //using .replace revise the input
 let newInput = input.replace(/ /g, '00')
 if (newInput.length % 2 != 0) return false;
   //use the global flag to return all inputs
 let inputArray = newInput.match(/../g);
 
 console.log(inputArray)
 let message = '';
   //loop through returned input array
 for (let i = 0; i < inputArray.length; i++) {
   //blank message if 00
 if (inputArray[i] == '00') {
   message += ' ';
 } //otherwise take an index of the cipherArray and add the decoded letters to the message
   else {
 let alphabetIndex = cipherArray.indexOf(Number(inputArray[i]))
 message += decodingAlphabet[alphabetIndex]
 }
 }
 return message
 }
  
  //encode 
 function encoder (input) {
   //always lowercase, starting with empty string
 let newInput = input.toLowerCase();
 let message = '';
   //loop
 for (let i = 0; i < newInput.length; i++) {
 if (!alphabet.includes(newInput[i])) {
   message += newInput[i];
 } //allow i/j to be 42
 if (newInput[i] == 'i' || newInput[i]=='j'){
     message += '42'
   } //if square/row has the input, add to message as a string
 for (let row in square) {
   if (square[row].includes(newInput[i])) {
     message += `${square[row].indexOf(newInput[i])+1}` + `${row}`
   }
 }
 } //maintain spaces
    for (let j = 0; j< message.length; j++) {
 message = message.replace('-','')
 }
 return message
 };
   
   
 function polybius(input, encode = true) {
 if (encode) {
   return encoder(input)
 } else {
   return decoder(input)
 }
 }
   
 
   return {
     polybius,
   };
 })();

module.exports = { polybius: polybiusModule.polybius };
