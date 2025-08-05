// Решение Задачи № 11

function generateChessBoard(x) {
    const arr = []
    for(let i = 0; i < x; i++) {
        if(i % 2 === 0){
            let black = []
            for(let j = 0; j < x; j++) {
               if(j % 2 === 0) {
                  black.push("#")
               } else {
                black.push(".")
               }
            }
            arr.push(black)
        } else {
            let white = []
            for(let j = 0; j < x; j++) {
                if(j % 2 === 0) {
                   white.push(".")
                } else {
                 white.push("#")
                }
             }
             arr.push(white)
        }
    }
    return arr
}

console.log(generateChessBoard(3))



// Решение Задачи № 12

function arrayReverse(arr) {
    const arrNew = []
    for(let i = arr.length - 1; i >=0; i--) {
        arrNew.push(arr[i])
    }
    return arrNew
}

console.log(arrayReverse([1, 2, 3, 4, 5]))



// Решение Задачи № 13

function fillArrToLength(arr, length) {
    for(let i = arr.length; i < length; i++) {
        arr.push(0)
    }
}

const num = [5, 8, 6]

fillArrToLength(num, 3)

console.log(num)



// Решение Задачи № 14

function getArr(x) {
    let arr = []
    for(let i = x; i >= 0; i-- ) {
       if(i % 3 === 0) {
           arr.push(i)
       }
    }
    return arr
}

console.log(getArr(22))



// Решение Задачи № 15

function printSquare(lines) {
    if(lines < 2 || !Number.isInteger(lines)) {
        return
    }
    let square = ""
    for(let row = 0; row < lines; row++) {
        for(let col = 0; col < lines; col++){
            if(row === 0 || row === lines - 1 || col === 0 || col === lines - 1) {
                square += "# "
            }
            else {
                square += "  "
            }
        }
        square = square.trim()
        square += " \n"
    }
    console.log(square)
}

printSquare(5)



// Решение Задачи № 16

function getNearestToMax(arr) {
    const newArr = []
    let maxNum = Math.max(...arr)
     for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= maxNum * 0.9) {
            newArr.push(arr[i])
        } else {
            continue
        }
     }
     return newArr
}

const mash = [7, 62, 18, 69, 15, 64, 66, 35, 68]

const getNewMaxArr = getNearestToMax(mash)

console.log(getNewMaxArr)



// Решение Задачи № 17

const randomShuffle = (arr) => {
    arr.sort(() => Math.random() - 0.5) 
  };
  
  const myArr = [1, 2, 3, 4, 5];
  randomShuffle(myArr);
  console.log(myArr)


// Решение Задачи № 18

  function findUnique(arr) {
    for(let i = 0; i < arr.length; i++) {
       let result = true
       for(let j = 0;  j < arr.length; j++) {
           if(i === j) continue
           if(arr[i] === arr[j]) {
               result = false
               break
           }
       }
       if(result) {
           return arr[i]
       }
    }
 }

 console.log( findUnique([3, 5, 3, 9, 5, 7, 9]))



 // Решение Задачи № 19

 function validParentheses(str) {
    let result = 0
    for(const i of str) {
        if(i === "(") {
            result++
        }else if(i === ")") {
            result--
            if(result < 0) {
                return false
            }
        }
    }
    return result === 0
}

console.log(validParentheses("(Привет)")); // true
console.log(validParentheses("(Привет)оп-па!)")); // false
console.log(validParentheses("(ку))ку(")); // false



// Решение Задачи № 20

const character = {
    name: "Леголас",
    className: "Лучник",
    level: 1,
    skills: [],
    setName(name) {
        this.name = name;
        return this
    },
    setClass(className) {
        this.className = className
        return this
    },
    addSkill(skill) {
        this.skills.push(skill)
        return this
    },
    levelUp() {
        this.level += 1
        return this
    }, 
    getSummary() {
        let skills
        if(this.skills.length === 0) {
            skills = "нет"
        }else if(this.skills.length === 1) {
            skills = this.skills[0]
        }else if(this.skills.length === 2) {
            skills = `${this.skills[0]} и ${this.skills[1]}`
        }else {
            const allExceptLast = this.skills.slice(0, -1).join(", ")
            const last = this.skills[this.skills.length - 1]
            skills = `${allExceptLast} и ${last}`
        }


        return `Имя: ${this.name}, Класс: ${this.className}, Уровень: ${this.level}, Навыки: ${skills} `
    }
}


character.levelUp().levelUp().levelUp()
character.addSkill("Метание Огня").addSkill("Ледяная стрела").addSkill("Пламя Анора")
character.setName("Гендальф")
character.setClass("Маг")
console.log(character.getSummary())