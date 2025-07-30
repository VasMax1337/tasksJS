// Решение Задачи № 1

function getByTimeSeconds(sec) {
    let hour = (Math.trunc(sec / 3600))
    let minutes = (Math.trunc((sec % 3600) / 60))
    let seconds = (sec % 3600) % 60
    if(hour < 10) {
       hour = `0${hour}`
    }
    if(minutes < 10) {
     minutes = `0${minutes}`
    }
    if(seconds < 10) {
     seconds = `0${seconds}`
    }
     
     return console.log(`${hour}:${minutes}:${seconds}`)
 }
 
 getByTimeSeconds(48889)



// Решение Задачи № 2

function maskCardNumber(cardNumber) {
    const lastFourDigits = String(cardNumber).slice(-4); 
    
    return `**** **** **** ${lastFourDigits}`;
}


console.log(maskCardNumber(1236547899874561))



// Решение Задачи № 3

function fullName(first, last) {
    const firstName = first.at(0).toLocaleUpperCase() + first.slice(1).toLowerCase()
    const lastName = last.at(0).toLocaleUpperCase() + last.slice(1).toLowerCase()
    return `${firstName} ${lastName}`
}

console.log(fullName("мАкСИм", "вАсИЛЬев"))



// Решение Задачи № 4

const result = (a, b) => {
        if(a > b) {
            return Math.trunc(Math.random() * 10) 
        } else if(a < b) {
            return Math.trunc(Math.random() * (-10))
        } else {
            return 0
        }
     }
    
     console.log(result(7, 2))
    
    // const result = (a, b) => a - b




// Решение Задачи № 5

function getValueFromArray(arr, i, j) {
    if(!Array.isArray(arr)) {
        return "Это не массив"
    }
    if (i < 0 || i >= arr.length || j < 0 || j >= arr[i].length) {
      return  console.log("Указанные индексы выходят за границы массива");
    }
    
    return console.log(arr[i][j]);
  }


const matrix = [
    [10, 15],
    [20, 25],
    [30, 35],
    [40, 45]
  ]

  getValueFromArray(matrix, 2, 1)