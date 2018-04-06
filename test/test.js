'use strict';

var File = require('vinyl');
var assert = require('assert');
var gulp = require('gulp');
var fs = require('fs');
var flowJSDoc = require('../lib/index');

var STREAMING_NOT_SUPPORTED_ERROR = 'Streaming not supported';

describe ('gulp-flow-jsdoc', function () {

    describe ('with gulp null', function () {
        it ('should pass on null file', function (done) {
            var nullFile = new File({
                contents: null
            });

            var thisFlowJSDoc = flowJSDoc();
            thisFlowJSDoc.on('data', function (file) {
                assert.ok(file.isNull());
                done();
            });
            thisFlowJSDoc.write(nullFile);
        });
    });

    describe ('with gulp stream', function () {
        it ('should throw an error when using unsupported stream type', function (done) {
            gulp.src('./test/fixtures/class.js', { buffer: false })
                .pipe(flowJSDoc())
                .on('error', function (err) {
                    assert.equal(err.message, STREAMING_NOT_SUPPORTED_ERROR);
                    done();
                });
        });
    });

    describe ('with gulp buffer', function () {
        it ('should annotate file', function (done) {
            gulp.src('./test/fixtures/class.js', { buffer: true })
                .pipe(flowJSDoc())
                .pipe(gulp.dest('./test/temp/'));

            var originalBuf = fs.readFileSync('./test/fixtures/class.js');
            var annotatedBuf = fs.readFileSync('./test/temp/class.js');

            assert.ok(!originalBuf.equals(annotatedBuf));
            done();
        });
    });
});
