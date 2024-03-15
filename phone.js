const parsePhoneNumber  = require('libphonenumber-js');
const {isPossiblePhoneNumber, isValidPhoneNumber, validatePhoneNumberLength, AsYouType, findPhoneNumbersInText}  = require('libphonenumber-js');

// console.log(parsePhoneNumber('+19034220335'))

// console.log(isPossiblePhoneNumber('1 (903) 422-03-35', 'US'))
// console.log(isValidPhoneNumber('8 (800) 555-35-35', 'US'))

// console.log(validatePhoneNumberLength('8 (800) 555 999 9', 'RU'))
// console.log(validatePhoneNumberLength('(800) 555 999', 'US'))

// const phoneNumber = parsePhoneNumber('+19034220335')

// console.log(phoneNumber.formatInternational())
// console.log(phoneNumber.formatNational())
// console.log(phoneNumber.getURI())


console.log(new AsYouType().input('+12133734'))

console.log(new AsYouType('US').input('2133734'))


console.log(findPhoneNumbersInText('Here is a long text where i want to call +919034220339  from here. but i dont know its valid or not'), [])