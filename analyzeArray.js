function analyzeArray(array){
    let min = array[0]
    let max = array[0]
    let average = 0
    let length = 0
    let finalObject = 0

    //obtaining length
    length = array.length
    //obtaining average
    let averagesum = 0
    for (let i = 0; i < array.length; i++) {
        averagesum = averagesum+array[i]
      }
      
    average = averagesum /length
    
    //obtaining min
    for (let i = 0; i < array.length; i++) {
        if(array[i]<min){
            min = array[i]
        }
      }
    //obtaining max
    for (let i = 0; i < array.length; i++) {
        if(array[i]>max){
            max = array[i]
        }
      }
  
      finalObject = {
           average:average,
           min: min,
           max: max,
           length: length
      }
      return finalObject
}


module.exports= analyzeArray