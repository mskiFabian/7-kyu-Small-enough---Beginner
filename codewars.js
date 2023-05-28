// ou will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.


function smallEnough(a, limit){
    let biggerThanLimit = []
    let smallerThanLimit = []
    for(let i = 0; i < a.length; i++) {
      if(a[i] <= limit) {
        smallerThanLimit.push(a[i])
      } else {
        biggerThanLimit.push(a[i])
      }
    }
    return (biggerThanLimit.length === 0) 
}