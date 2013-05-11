/*global describe, it */
'use strict';
(function () {

    var
        http = require('request'),
        should = require('should');

    describe('Folder API related tests:', function () {
        before(checkServerIsRunning)

        describe('GET Folder:', function () {
            before(removeIfExistUser(testUser));

            describe('User name validations', function () {
                //TODO
            });
            describe('Register test user', function () {
                //TODO
            });

            after(removeIfExistUser(testUser));
        });

        describe('GET Folder queries:', function () {
            //TODO
        });
        describe('PUT Folder services:', function () {
            //TODO
        });
        describe('POST Folder services:', function () {
            //TODO
        });
        describe('DELETE Folder services:', function () {
            //TODO
        });
    });
})();