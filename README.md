# create-react-app Introduction

CRA is built on top of "Webpack"

Webpack is a JS utility that
- enables module importing/exporting
    - packages up all CSS/images/JS into a single file for browser
    - dramatically reduces number of requests for performance
- hot reloading: when you change a source file, it automatically reloads.
- enables easy testing & deployment

## modules

CRA uses ES2015 'modules'. A way of sharing code, functions, classes, objects, etc., between JS files. 
This is a newer, standardized version of Node's `require`.

Basically we need to explicitly export and explicitly export modules. 

1. We can set the default option to export when the whole file is required: 

In `helpers.js`
```Javascript
function hello() { 
    console.log('hello') 
    }

export default hello;
```
In `index.js`
```Javascript
import hello from './helpers.js';
hello();
```

🚨 Note that in the pattern `import <variable> from <path>` the variable name **does not** matter, it is only a container for the imported value (in this case, the function `hello`)

2. We can export multiple functions
In `helpers.js`
```Javascript
function hello(){
    console.log('hello');
}
function sort(){
    console.log('sort');
}
function sing(){
    console.log('sing');
}

export {hello, sort, sing};
```

In `index.js`
```Javascript
import {hello, sort, sing} from './helpers';

hello();
sort();
sing();
```

Note: in this case if we used the old syntax `import <variable> from <path>` we would've had an error. 

3. We can export a default and other functions
In `helpers.js`
```Javascript
function hello(){
    console.log('hello');
}
function sort(){
    console.log('sort');
}
function sing(){
    console.log('sing');
}

export default hello;
export {sort, sing};
```
In `index.js`
```Javascript
import hello, {sort, sing} from './helpers';

hello();
sort();
sing();
```

Note: In this case, if we had used the old syntax `import {hello, sort, string} from 'helpers';` we would've had an error. 

## To use, or not to use `export default`

**Rule o'** 👍 
Use `default export` when there is an obvious candidate. 

- For example in this syntax: 
`import React from 'react'`
          👆          👆
    'exported module'  'looks for a react module in `node modules'

- Or in this syntax: 
`import App from './app.js`
        👆           👆
exported module     path

You never need to create a `default export` but it can be helpful. 


