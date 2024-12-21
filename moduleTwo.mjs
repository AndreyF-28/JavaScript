import {
    sum as sumValue,
    sumAndMult as samValue
} from './modulesOne.mjs'

const res = sumValue(10, 5)

console.log(`${res} - сложение. ${samValue(4, 5)} - сложение и произведение`)