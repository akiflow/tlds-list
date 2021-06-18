# tlds-list

This package provide the list of top level domains, easily formatted in JSON.

The list is fetched directly  from: [The official IANA list](https://data.iana.org/TLD/tlds-alpha-by-domain.txt)

## Usage

### Install
```bash
npm install @akiflow/tlds-list
```

### Usage
```js
const tlds = require('@akiflow/tlds-list') // require the module

tlds.includes('com') // check if a tld is present
```

### Notes
Tlds are lowercase, so it's better to lowercase the tld you are looking for before searching:

```js
const tld='NET'
tlds.includes(tld) // WRONG
tlds.includes(tld.toLowerCase()) // RIGHT
```

### Other
For any issue feel free to open an issue
