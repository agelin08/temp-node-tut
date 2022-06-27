//Modules

const names = require('./4-name')
const sayHello = require('./5-utils')
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')
// console.log(names)

sayHello('susan')
sayHello(names.john)
sayHello(names.peter)
sayHello(data.person.name)