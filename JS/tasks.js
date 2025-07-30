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



// Решение Задачи № 6

function startRocketCountdown(initialCount) {
    while(initialCount >= 0) {
        console.log(initialCount)
        initialCount--
    }
        console.log("Старт!")
}

startRocketCountdown(9)



// Решение Задачи № 7

function printNumberStaircase(n) {
    for (let i = 1; i <= n; i++) {        
        let line = '';
        for (let j = i; j <= 2 * i - 1; j++) {  
            line += j;
            if (j < 2 * i - 1) {
                line += ' ';
            }
        }
        console.log(line);
    }
}

printNumberStaircase(5)



// Решение Задачи № 8

const num = [3, 9, 81, 6561, 43046721]

function formatArray(arr) {
    let arrey = []
    if(arr === arrey || !Array.isArray(arr)) {
        return ""
    }
    let result = ""
    for(let i = 0; i < arr.length; i++) {
        if(i >= arr.length - 1) {
           result += ` ${arr[i]}`
        } else {
            result += ` ${arr[i]} ->` 
        }
    }
    return result
}



console.log(formatArray(num))



// Решение Задачи № 9

function isSorted(arr) {
    let result = arr[0]
    if(!Array.isArray(arr)) {
        return "Это не массив"
    }
    if(arr.length === 0) {
        return "Массив пуст"
    }
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > result) {
            result = arr[i]
        } else {
            return `${arr[i]} меньше ${result}, поэтому массив отсортирован не по возрастанию`
        }   
    }
    return "Массив отсортирован по возрастанию"
}

const num2 = [3, 9, -81, 6561, 43046721]

console.log(isSorted(num2))



// Решение Задачи № 10

const arr = [
    [-53,-2],
    [42,9,77],
    [0],
    [72,4],
    ]

if(Array.isArray(arr)) {
   let sum = 0
   for(let i = 0; i < arr.length; i++) {
       for(let j = 0; j < arr[i].length; j++) {
           if(arr[i][j] >= 0) {
               sum += arr[i][j]
           }
       }
   }
   console.log(sum)
}