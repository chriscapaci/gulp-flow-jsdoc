# gulp-rename

gulp-flow-jsdoc is a [gulp](https://github.com/wearefractal/gulp) plugin that wraps [flow-jsdoc](https://github.com/Kegsay/flow-jsdoc).

[![NPM](https://nodei.co/npm/gulp-flow-jsdoc.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gulp-flow-jsdoc/)

## Usage

gulp-flow-jsdoc provides a function to call flow-jsdoc within a gulp task.

```javascript
var flowJSDoc = require('gulp-flow-jsdoc');
var flow = require('gulp-flowtype');

gulp.src('./src/main.js')
    .pipe(flowJSDoc())
    .pipe(flow({
        all: false,
        weak: false,
        killFlow: true,
        beep: false,
        abort: false
    }));
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)