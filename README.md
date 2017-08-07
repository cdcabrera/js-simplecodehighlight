# JS Simple Code Highlight

[![Build Status](https://travis-ci.org/cdcabrera/js-simplecodehighlight.svg?branch=master)](https://travis-ci.org/cdcabrera/js-simplecodehighlight)

Basic code display for JS. Transform a string using JS by replacing "spaces", "tabs", "newlines", "less" and "greater" than into their related HTML entity code.

## How to Use

Call the global

```javascript
let myString = 
`<!DOCTYPE html>
<html lang="en-US">
    <head>
        <title>test</title>
    </head>
    <body>
        Woot!
    </body>
</html>`;

let myArray = parseCode(myString);

// myArray output...
// [
// '&lt;!DOCTYPE&nbsp;html&gt;', 
// '&lt;html&nbsp;lang="en-US"&gt;', 
// '&nbsp;&nbsp;&nbsp;&nbsp;&lt;head&gt;', 
// '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;test&lt;&#47;title&gt;', 
// '&nbsp;&nbsp;&nbsp;&nbsp;&lt;&#47;head&gt;', 
// '&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;', 
// '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Woot!', 
// '&nbsp;&nbsp;&nbsp;&nbsp;&lt;&#47;body&gt;', 
// '&lt;&#47;html&gt;'
// ]

```


## How to Test, &amp; Build

Fork and clone the repository locally. From the terminal change directories into the root of the repository and run...

```
$ npm install
```

Run the unit tests...

```
$ npm test
```

Run the build...

```
$ npm run build
```