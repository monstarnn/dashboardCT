import ApiService from '../core/api_service';

let apiData = {};

import {groups} from './groups'
import {projects} from './projects'
import {permissions} from './permissions'
import {catalog} from './catalog'

apiData.groups = groups;
apiData.projects = projects;
apiData.permissions = permissions;
apiData.catalog = catalog;


export default function (app) {
    app.config(function ($provide) {
        $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
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

            $httpBackend.whenGET(new RegExp('\\/' + uri + '\\/[0-9a-z]+')).respond(
                function(method, url){
                    var regexp = new RegExp('\\/' + uri + '\\/([0-9a-z]+)');
                    var mockId = url.match(regexp)[1];
                    debugger
                    var data = _.findWhere(apiData[uri], {ID : mockId});
                    if(data)
                        return [200, _.extend({fullData : true}, data)];
                    else
                        return [404, "not found"];
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
            });

            $httpBackend.whenPOST(apiPath + uri).respond((methid, path, data) => {
                debugger;
                return [200, _.extend({ID:_.now()+"_"}, JSON.parse(data))];
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