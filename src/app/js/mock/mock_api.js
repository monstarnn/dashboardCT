import ApiService from '../core/api_service';

let apiData = {};

import {groups} from './groups'
import {projects} from './projects'
import {permissions} from './permissions'
import {catalog} from './catalog'

apiData['groups'] = groups;
apiData['projects'] = projects;
apiData['groups/demo/permissions'] = permissions;
apiData['groups/demo/catalog/components'] = catalog;


export default function (app) {
    app.config(function ($provide) {
        
        // $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);

        $provide.decorator('$httpBackend', function($delegate) {
            var proxy = function(method, url, data, callback, headers) {
                var interceptor = function() {
                    var _this = this,
                        _arguments = arguments;
                    setTimeout(function() {
                        callback.apply(_this, _arguments);
                    }, 1000);
                };
                return $delegate.call(this, method, url, data, interceptor, headers);
            };
            for(var key in $delegate) {
                proxy[key] = $delegate[key];
            }
            return proxy;
        });


    });
    app.run(function ($httpBackend, ApiService) {
        let apiPath = ApiService.getApiPath();
        _.each(_.keys(apiData), (uri) => {
            $httpBackend.whenGET(apiPath + uri).respond(
                function (/*method, url, data, headers, params*/) {
                    console.log('API mocked ' + uri, apiData[uri]);
                    return [200, apiData[uri]];
                }
            );

            $httpBackend.whenGET(new RegExp('\\/' + uri + '\\/[0-9a-z-]+$')).respond(
                function(method, url){
                    var regexp = new RegExp('\\/' + uri + '\\/([0-9a-z-]+)$');
                    var mockId = url.match(regexp)[1];
                    debugger
                    var data = _.findWhere(apiData[uri], {ID : mockId});
                    return [200, _.extend({fullData : true}, data)];
                }
            );

            $httpBackend.whenDELETE(new RegExp('\\/' + uri + '\\/[0-9a-z]+')).respond(
                function(method, url){
                    debugger;
                    var regexp = new RegExp('\\/' + uri + '\\/([0-9a-z]+)');
                    var mockId = url.match(regexp)[1];

                    var data = _.findWhere(apiData[uri], {ID : mockId});
                    var i = _.indexOf(apiData, data);
                    return [200, _.extend({fullData : true}, data)];
                }
            );

            $httpBackend.whenDELETE(apiPath + uri).respond((methid, path, data) => {
                debugger;
                return [200, _.extend({ID:_.now()}, JSON.parse(data))];
            })

            $httpBackend.whenPOST(apiPath + uri).respond((methid, path, data) => {
                debugger;
                return [200, _.extend({ID:_.now()}, JSON.parse(data))];
            })
        }, this);


        // $httpBackend.whenGET(apiPath + 'groups').respond(
        //     function (/*method, url, data, headers, params*/) {
        //         console.log("API mocked groups");
        //         debugger;
        //         return [200, apiData['groups']];
        //         // return [200, ["demo"]];
        //     }
        // );
    });

}