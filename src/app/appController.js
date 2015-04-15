(function () {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    function AppController() {

        var wm = this;

        wm.title = 'Hadean';

     }
})();
