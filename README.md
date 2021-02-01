# tlds-list

This package provide the list of top level domains, easily formatted in JSON.

The list is fetched directly  from: [https://data.iana.org/TLD/tlds-alpha-by-domain.txt]https://data.iana.org/TLD/tlds-alpha-by-domain.txt

## Usage

### Install
```bash
npm install @akiflow/tlds-list
```

### Usage
```js
const tlds = require('../index.js') // require the module

tlds.includes('com') // check if a tls is present
```

### Other
For any issue feel free to open an issue