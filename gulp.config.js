module.exports = function () {
    'use strict';

    var config = {
        jsPath: [
            'app/*.js',
            '!app/bower_components'
        ]
    };

    return config;
};