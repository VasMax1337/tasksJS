// Решение Задачи № 21

const data = {
    user: {
      id: 1,
      name: "Иван",
      age: 30,
      email: "ivan@example.com",
      address: {
        street: "Красная площадь",
        city: "Москва",
        postalCode: "101000",
      },
      hobbies: ["фотография", "путешествия", "чтение"],
      friends: [
        {
          id: 2,
          name: "Мария",
          age: 28,
          interests: ["живопись", "фотография"],
        },
        {
          id: 3,
          name: "Алексей",
          age: 32,
          interests: ["спорт", "музыка", "путешествия"],
        },
      ],
    },
    settings: {
      theme: "dark",
      notifications: {
        email: true,
        sms: false,
        push: true,
      },
      language: "ru",
    },
    activities: [
      {
        type: "workout",
        date: "2023-10-01",
        duration: 60,
        details: {
          activityType: "бег",
          distance: 5,
        },
      },
      {
        type: "reading",
        date: "2023-10-02",
        duration: 90,
        details: {
          bookTitle: "Война и мир",
          pagesRead: 50,
        },
      },
    ],
  };


 const firstName = data.user.name

 const home = `${data.user.address.city}, ${data.user.address.street}`

 const friends = []

 for(let i = 0; i < data.user.friends.length; i++) {
  friends.push(data.user.friends[i].name)
 }

 const notifications = data.settings.notifications

 function onNotifications(obj) {
    const onNotifications = {}
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === true) {
        onNotifications[key] = obj[key]
      }
    }
    return Object.keys(onNotifications)
 }

 const activityTypes = []

 for(let i = 0; i < data.activities.length; i++) {
  activityTypes.push(data.activities[i].type)
 }

 const uniqueActivityTypes = [...new Set(activityTypes)]

 
 const myData = {
  name: firstName, 
  address: home, 
  friends: friends,
  notifications: onNotifications(notifications),
  activityTypes: uniqueActivityTypes
 }

 console.log(myData)



 // Решение Задачи № 22

 function cakes(recipe, ingredients) {
  for (const key in recipe) {
      if (!ingredients.hasOwnProperty(key) || ingredients[key] === 0) {
          return 0;
      }
  }

  const possibleCakes = [];
  for (const key in recipe) {
      possibleCakes.push(Math.floor(ingredients[key] / recipe[key]));
  }
  
  return Math.min(...possibleCakes);
}

 const cake = {
  flour: 200,
  eggs: 2,
  oil: 40,
  berries: 10
 }

 const stock = {
  flour: 2000,
  eggs: 15,
  oil: 160,
  berries: 100
 }

 console.log(cakes(cake, stock))



 // Решение Задачи № 23

 const robot = {
  plants: ["морковь", "помидор", "картофель"],
  waterLevel: 100,
  waterPlants() {
    const waterNeeded = this.plants.length * 10
    if(this.waterLevel < waterNeeded) {
      console.log("Не хватает воды, пополните бак!")
    } else {
      this.waterLevel -= waterNeeded
      console.log("Все растения политы")
    }
    return this
  },
  refillWater() {
    this.waterLevel = 100
    console.log("Бак с водой пополнен")
    return this
  }
 }

 console.log(robot.waterLevel)
 console.log(robot.waterPlants().waterPlants().waterPlants().waterPlants().waterPlants().refillWater().waterPlants())



 // Решение Задачи № 24

 const artifacts = { 
  A101: { type: "метеорит", year: 1890, exhibits: 15 }, 
  A102: { type: "луноход", year: 1973, exhibits: 20 }, 
  A103: { type: "скафандр", year: 1969, exhibits: 12 },
  A104: { type: "спутник", year: 1957, exhibits: 20 },
  A105: { type: "луноход", year: 1971, exhibits: 10 }, 
}

 function analyzeArtifacts(artifacts) {
  for (const key in artifacts) {
    console.log(`Артефакт ${key}: Тип - ${artifacts[key].type}, Год - ${artifacts[key].year}, Показы - ${artifacts[key].exhibits}`)
  }

  console.log("")

  let maxExhibits = 0 
  const arrExhibits = []

  for(const key in artifacts) {
    if(`${artifacts[key].exhibits}` > maxExhibits) {
      maxExhibits = `${artifacts[key].exhibits}`
    }
  }

  for (const key in artifacts) {
    if(`${artifacts[key].exhibits}` === maxExhibits) {
      arrExhibits.push(key)
    }
  }

  console.log(`Артефакты с наибольшим количеством показов (количество показов ${maxExhibits}):`)
  for (const key of arrExhibits) {
    console.log(`Артефакт ${key}: Тип - ${artifacts[key].type}, Год - ${artifacts[key].year}`)
  }
  
  console.log("")

  const typeCount = {};
  
  for (const key in artifacts) {
    const type = artifacts[key].type
    if (typeCount[type]) {
      typeCount[type]++
    } else {
      typeCount[type] = 1
    }
  }
  
  console.log('Количество артефактов каждого типа:')
  for (const type in typeCount) {
    console.log(`${type}: ${typeCount[type]}`)
  }
 }

 analyzeArtifacts(artifacts)