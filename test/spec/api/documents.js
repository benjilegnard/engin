/*global describe, it */
'use strict';
(function () {
    var
        http = require('request'),
        should = require('should');

    describe('Document API related tests:', function () {
        before(checkServerIsRunning)

        describe('GET Document:', function () {
            before(removeIfExistUser(testUser));

            describe('User name validations', function () {
                //TODO
            });
            describe('Register test user', function () {
                //TODO
            });

            after(removeIfExistUser(testUser));
        });

        describe('GET Document queries:', function () {
            //TODO
        });
        describe('PUT Document services:', function () {
            //TODO
        });
        describe('POST Document services:', function () {
            //TODO
        });
        describe('DELETE Document services:', function () {
            //TODO
        });
    });
})();