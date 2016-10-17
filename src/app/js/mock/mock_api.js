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