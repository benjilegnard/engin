/*global describe, it */
'use strict';
(function () {

    var
        http = require('request'),
        should = require('should');

    describe('Repository API related tests:', function () {
        before(checkServerIsRunning)

        describe('GET Repository:', function () {
            before(removeIfExistUser(testUser));

            describe('User name validations', function () {
                //TODO
            });
            describe('Register test user', function () {
                //TODO
            });

            after(removeIfExistUser(testUser));
        });

        describe('GET Repository queries:', function () {
            //TODO
        });
        describe('PUT Repository services:', function () {
            //TODO
        });
        describe('POST Repository services:', function () {
            //TODO
        });
        describe('DELETE Repository services:', function () {
            //TODO
        });
    });
})();