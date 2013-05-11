/*global describe, it */
'use strict';
(function () {
    var
        http = require('request'),
        should = require('should');

    describe('Rendition API related tests:', function () {
        before(checkServerIsRunning);

        describe('GET Rendition:', function () {
            before(removeIfExistUser(testUser));

            describe('User name validations', function () {
                //TODO
            });
            describe('Register test user', function () {
                //TODO
            });

            after(removeIfExistUser(testUser));
        });

        describe('GET Rendition queries:', function () {
            //TODO
        });
        describe('PUT Rendition services:', function () {
            //TODO
        });
        describe('POST Rendition services:', function () {
            //TODO
        });
        describe('DELETE Rendition services:', function () {
            //TODO
        });
    })
})();