const message = 'HEllo'
                                      //Methods (without argument)
console.log(message.toLowerCase());  
//always use () after tolowercase and to uppercase this bracket means call karna

console.log(message.toUpperCase());  
/*message.toUpperCase()
'HELLO'->basically it only create new string like HELLO but it will not change the actually message
 like let  newMessage = message.toUpperCase() now this newMesssage will return capital HELLO and jaha chahe
 we can use this newMessage in our code
*/

//---------------------------------------trim--------------------------------------------------------
const faltuMessage = '                  hi, How are you       ';
// const finalMessage = 'hi, How are you';
console.log(faltuMessage)
console.log(faltuMessage.trim())
/**by using trim it will remove the spaces  start k and end k spaces */
// we can do chaining like trim krna fir lower mw then uppr me like this
console.log(faltuMessage.trim().toLowerCase())
console.log(faltuMessage.trim().toLowerCase().toUpperCase())


//-------------------------------------trimStart() and trimEnd()------------------------
//it will remove starting spaces
console.log(faltuMessage.trimStart())//'hi, How are you       '
//it will remove ending spaces
console.log(faltuMessage.trimEnd())  //'                  hi, How are you'



//                                      Methods (with argument)
// ------------------------------1.includes-------------------------------> it basically checks one one all string or letter that is present in given string or  not ..exact 
//letter ko check krta hai ye like agr variable me am hai to it mut be am not Am ..if you are taking extra space to bhi work ni krega and it will return false basically
const finalMessage = 'hi, How are you';
console.log(finalMessage.includes('How')) //true
console.log(finalMessage.includes('How are'))//true
console.log(finalMessage.includes('How are you'))//true
console.log(finalMessage.includes('How are youuuu'))//false

//-------------------------------2.indexOf()-------------------------->variable me jo bhi value diye ho uske index ko btata hai
//const finalMessage = 'hi, How are you';

console.log(finalMessage.indexOf('h'))// 0
console.log(finalMessage.indexOf('i'))// 1
console.log(finalMessage.indexOf('H'))// 4
console.log(finalMessage.indexOf('r'))// 9
console.log(finalMessage.indexOf('u'))// 14
console.log(finalMessage.indexOf('u'))// 14
console.log(finalMessage.indexOf('How'))// 4
console.log(finalMessage.indexOf('hhhhhhhw'))// -1 // jo letter char ni present hota h uska -1 output aata h

//-----------------------------------------.replace()--------------------------------------
 console.log(finalMessage.replace('hi','hey')) //hey, How are you'

 //----------------------------------------padStart()----------------------jo starting me ** type krta h like 16 digit ka account no. h to h (16, '*')
 //krne pr 12 star krega char last k given variable k value ko lega 7886
const lastFourDigit = '7886'
const maskedAccountNumber = lastFourDigit.padStart(16,'*')
 console.log(maskedAccountNumber)   ///************7886


 //----------------------------------------padEnd()----------------------
 console.log(lastFourDigit.padEnd(16,'*'))//7886************



 //--------------------charAt()-------------------- it use to get character and we will give at kis no. ka charater chahiye
 console.log('my name is shweta'.charAt(3))

 //--------------------charCodeAt()-------------------- it use to get character's code ASCii code khte h
//  A to Z has diff code 
//  a to z has diff
//  0 to 9 has diff
 
console.log('My name is shweta'.charCodeAt(3)); // op->110
 
console.log('My name is shweta'.split(' ')) //['My', 'name', 'is', 'shweta']
console.log('My names  is shweta'.split('s')) //['My', 'name', 'is', 'shweta']


//-------------------string template literals-----------
const concatenatedLiterals = ' My account number is '.concat(maskedAccountNumber);
console.log(concatenatedLiterals)
const templateLiterals = `My account number is ${maskedAccountNumber}`
console.log(templateLiterals)

const namee = "Horray!"
console.log(namee.indexOf('r'))