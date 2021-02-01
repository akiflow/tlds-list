const tlds = require('../index.js')

console.log('.com present', tlds.includes('com'))
console.log('.akiflow not present', tlds.includes('akiflow'))

console.time('Searching 1000 tld')
for (let i = 0; i < 1000; i++) {
  tlds.includes('org')
}
console.timeEnd('Searching 1000 tld')
