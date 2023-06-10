function reverseString(text){
    const splitted = text.split("")
   let  reversed =splitted.reverse()
   let result = reversed.join('')
    return result
}
module.exports = reverseString;