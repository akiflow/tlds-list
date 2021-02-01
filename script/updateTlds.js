const https = require('https')
const fs = require('fs')
const path = require('path')

const TLDS_ENTPOINT = 'https://data.iana.org/TLD/tlds-alpha-by-domain.txt'
const INDEX_TEMPLATE =
  `
module.exports = {{TLDS}}
`

function removeCommentLines (string) {
  return string.replace(/^#.*/gi, '')
}

https.get(TLDS_ENTPOINT, (res) => {
  let content = ''
  res.on('data', (data) => {
    content += data
  })
  res.on('close', () => {
    console.log(`####### Received Tlds. Content is:`)
    const contentAsText = content.toString('utf8')
    const textWithoutComments = removeCommentLines(contentAsText)
    const lines = textWithoutComments.split('\n')
    const parsedLines = lines
    .map(line => line.trim()) // removing extra spaces
    .filter(line => !!line) // removing empty lines
    .map(line => line.toLowerCase()) // making everything lowercase
    console.log(`### Tlds parse. Found ${parsedLines.length} tlds`)
    const indexContent = INDEX_TEMPLATE.replace('{{TLDS}}', JSON.stringify(parsedLines))
    console.log(`### Writing index.js`)
    fs.writeFileSync(path.join(__dirname, '../', 'index.js'), indexContent)
    console.log(`### Done writing index.js`)
  })
  res.on('error', (err) => {
    console.error(err)
  })
})
console.log(`####### Fetching ${TLDS_ENTPOINT} for Tlds`)

