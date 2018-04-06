'use strict';

var PluginError = require('plugin-error');
var flowJSDoc = require('flow-jsdoc');
var Stream = require('stream');

const PLUGIN_NAME = 'gulp-flow-jsdoc';

function jsdocToFlow (options) {

    var stream = new Stream.Transform({objectMode: true});
  
    stream._transform = function (file, encoding, callback) {
        if (file.isNull()) {
            return callback(null, file);
        }

        if (file.isStream()) {
            return callback(new PluginError(PLUGIN_NAME, 'Streaming not supported'));
        }

        file.contents = new Buffer(flowJSDoc(file.contents.toString()).toString());
        return callback(null, file);
    };

    return stream;
}
  
module.exports = jsdocToFlow;
