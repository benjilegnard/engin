/*global describe, it */
'use strict';
(function () {

    var
        http = require('request'),
        should = require('should');

    describe('Users API related tests:', function () {
        before(checkServerIsRunning)

        describe('GET Users:', function () {
            before(removeIfExistUser(testUser));

            describe('User name validations', function () {
                //TODO
            });
            describe('Register test user', function () {
                //TODO
            });

            after(removeIfExistUser(testUser));
        });

        describe('GET Users queries:', function () {
            //TODO
        });
        describe('PUT Users services:', function () {
            //TODO
        });
        describe('POST Users services:', function () {
            //TODO
        });
        describe('DELETE Users services:', function () {
            //TODO
        });
    });
})();