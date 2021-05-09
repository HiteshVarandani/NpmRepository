# NpmRepository
The first package built to work on npm
## Usage
Install the package using npm :
 npm install my-npm-pkg-demo --save
Then, require the package and use it:
 [Comment: To check if this usage is proper]
 var getHostName = require('getHostName');
 console.log(getHostName(""));
 console.log(getHostName("Hello World"));