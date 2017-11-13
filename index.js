const stringify = (element) => () => `<${element.name}>${element.value}</${element.name}>`
const element = (name) => (value) => (attributes) => ({name, value, attributes})

const el = stringify(element('root')('val')())()

console.log(el)
