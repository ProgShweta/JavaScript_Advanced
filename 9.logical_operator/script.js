const userAge = 22

//----------And----both case must be true
const isSchoolStudent = (userAge>=15) && (userAge<=20) //false here student is between 15 to 20
const isCollegeStudent = (userAge >=5) && (userAge<=25)//true here student is between 5 to 25
//-------------OR --- anyone case must be true
const isStudent = isSchoolStudent || isCollegeStudent;
const andResult = 0 && 2
const orResult = 0 || 2

const andResult2 = '' && 'Hello'
const orResult2 = '' || 'Hello'

const andResult3 = 'Hello' && null
const orResult3 = 'Hello' || null

const andResult4 = 'Hello' && -4 + 4
const orResult4 = undefined || 4 + 8 * 5

const andResult5 = 'Hello' && console.log('hello1')
const orResult5 = undefined || console.log('hello2')