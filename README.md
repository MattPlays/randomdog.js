# randomdog.js
 randomdog.js utilizes the [randomdog API](https://random.dog)

# Installation
```bash
npm i @mattplays/randomdog.js
```
# Usage
### Javascript
```javascript
const randomdog = require("@mattplays/randomdog.js")
randomdog().then(({fileSizeBytes, url}) => {
    console.log(fileSizeBytes, url);
})
```
### Typescript
```typescript
import randomdog from "@mattplays/randomdog.js"
randomdog().then(({fileSizeBytes, url}) => {
    console.log(fileSizeBytes, url);
})
```

# License
randomdog.js is Licensed under the [MIT License](https://github.com/MattPlays/randomdog.js/blob/main/LICENSE)