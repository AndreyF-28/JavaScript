import {
    getData,
    getData2
} from "./getData.mjs"

const myCity = {
    city: 'Blagoveschensk',
    county: 'Russia',
    name: 'Andrey'
}

const currentCity = 'current city'
myCity[currentCity] = 'Saint-Petersburg'

const myCity2 = {...myCity}

const myCity3 = JSON.parse(JSON.stringify(myCity))

myCity2.county = 'USA'
myCity2.city = 'New York'


function printMyName() {
    console.log('Andrey')
}
// setTimeout(printMyName, 1000)
// console.log(myCity3)

const greeting = `Меня зовут ${myCity.name}, и я живу в городе ${myCity.city}`

const anonimFunc = function(a, b) { // Анонимная и стрелочная функции 
    return a*b+100
}

const strelFunc = (a, b) => {
    return a/b+100
}

let a = 3, b = 4

const newPost = (post, timepost = Date()) => ({
    ...post,
    timepost,
})

const newPostAgain = (post, timepost = Date()) => {
    const newPo =  JSON.parse(JSON.stringify(post))
    newPo['timepost'] = timepost
    return newPo
}
// console.log(newPostAgain(myCity)) 

const fnWithError = () => {
    throw new Error('Some error')
}

try {
    fnWithError()
} catch (error){
    // console.log(error)
    // console.log(error.message)
}

// console.log('Continue...')

const array = new Array(1,2,3)
// array.forEach(el => (console.log(el*5))) // Метод проходит покаждому элементу массива

const arrayAfterMap = array.map((el) => {
    return el*4
})

const {name, city} = myCity // Деструктуризация объектов 

const [numOne, numTwo] = arrayAfterMap // Деструктуризация массива 

const funcDestruct = ({name, city}) => {
    return `${name} lives in ${city}`
} 

// console.log(funcDestruct(myCity))

const checkOfType = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Одна из переменных не число'
    } else {
        return 'Обе переменные числа'
    }
}

// console.log(checkOfType(5, true))

/* const month = 4

switch (month){
    case 12:
        console.log('December')
        break
    case 1:
        console.log('January')
        break
    case 2:
        console.log('February')
        break
    default:
        console.log('It is not winter month')
} */
 

const result = typeof myCity.city === 'string' ? 'Это не число' : 'Верно! Это строка' // Тернарный оператор
// console.log(result)

const testArray = new Array()
let point = 1

for (let i = 0; i<5; i++){
    testArray[i] = point
    point = point*2  
}
// console.log(testArray)

testArray.forEach((element, index) => { 
    element = element*2
    // console.log(element)
})

// console.log(Object.values({month:12, date: 11, year: 2024})) // keys переберает свойства, value переберает значения

// console.log(Object.keys(myCity))

for (const letter of myCity.county){
    // console.log(letter)
}

class Comment{
    constructor(text){
        this.text = text
        this.votes = 0
    }

    upvote(){
        this.votes += 1
    }

    static mergeComments(first, second){
        return `${first} ${second}`
    }
}

const firstComment = new Comment('First comment')

firstComment.upvote()
firstComment.hasOwnProperty('text') // Проверка свойств экземпляров класса 

Comment.mergeComments('First text', 'Second text') // Статический класс наследуется от класса, а не от экземпляра

class NumberArray extends Array {
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
}

const classExArray = new NumberArray(1,2,3)
// onsole.log(classExArray.sum())   

getData('https://jsonplaceholder.typicode.com/todos/15')
    .then(data => console.log(data))
    .catch(error => console.log(error))

const asyncFn = async () => {
    throw new Error('Error!')
}

/* asyncFn()
    .then(value => console.log(value))
    .catch(error => console.log(error)) */

const timerPromise = () => 
    new Promise((resolve, reject) => 
    setTimeout(() => resolve(), 2000))

const asyncFn2 = async () => {
    console.log('Timer starts')
    const startTime = performance.now()
    await timerPromise()
    const endTime = performance.now()
    console.log('Timer ended', endTime - startTime)
}

asyncFn2()

