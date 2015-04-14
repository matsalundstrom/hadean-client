module.exports = function () {
    'use strict';

    var config = {
        jsPath: [
            'src/app/*.js',
            '!src/app/bower_components'
        ]
    };

    return config;
};