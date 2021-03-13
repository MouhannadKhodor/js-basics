
const stringSize = (text) => {
    return text.length

}
const replaceCharacterE = (text) => {
    var rep = text.replace('e',' ')
    return rep
}
const concatString = (text1, text2) => {
    return text1+text2
}
const showChar5 = (text) => {
    return text.charAt(4)
}
const showChar9 = (text) => {
    return text.substring(0,9)
}
const toCapitals = (text) => {
    return text.toUpperCase()
}
const toLowerCase = (text) => {
    return text.toLowerCase()
}
const removeSpaces = (text) => {
    return text.trim()
}
const IsString = (text) => {
    return Boolean(typeof(text))
}

const getExtension = (text) => {
    return text.substr(text.lastIndexOf('.') + 1);
}
const countSpaces = (text) => {
    return text.split(" ").length-1
}
const InverseString = (text) => {
    return text.split("").reverse().join("");
}

const power = (x, y) => {
    return Math.pow(x,y)
}
const absoluteValue = (num) => {
    return Math.abs(num);
}
const absoluteValueArray = (array) => {
    return array.map(Math.abs);
}
const circleSurface = (radius) => {
    var res = Math.PI * radius *radius
    return Math.round(res)
}
const hypothenuse = (ab, ac) => {
    return Math.hypot(ab,ac)
}
const BMI = (weight, height) => {
    var res = weight / (height * height)
    var r = res.toFixed(2)
    return parseFloat(r)
    
}

const createLanguagesArray = () => {
    return  [ 'Html', 'CSS', 'Java', 'PHP' ]
}

const createNumbersArray = () => {
    return [0,1,2,3,4,5]
}

const replaceElement = (languages) => {
    s = languages
    s[2] = 'Javascript'
    return s
}

const addElement = (languages) => {
    s = languages
    s.push('Ruby')
    s.push('Python')
    return s
}

const addNumberElement = (numbers) => {
    s = numbers
    s.unshift(-1)
    s.unshift(-2)
    return s
}

const removeFirst = (languages) => {
    s = languages
    s.shift(s[0])
    return s
}

const removeLast = (languages) => {
    s = languages
    s.pop(0)
    return s
}

const convertStrToArr = (social_arr) => {
    s = social_arr.split(",");
    return s
}

const convertArrToStr = (languages) => {
    s = languages.toString();
    return s
}

const sortArr = (social_arr) => {
    s = social_arr.sort()
    return s
}

const invertArr = (social_arr) => {
    s = social_arr.reverse()
    return s
}