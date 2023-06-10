//trying functons
//1.Capitalize the strings
function capitalize(text){
    result =text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    return result
}

module.exports = capitalize;
//or export default capitalize;