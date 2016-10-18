import {GroupService} from './group_service.js'
import ApiService from "../../../core/api_service.js"
// import {GroupListComponent} from './group_list_component'

export default angular
    .module("dashboard.group", [])
    // .component("mctGroupList", GroupListComponent)
    .service('ctGroupService', GroupService)
    .service('ApiService', ApiService)
    // .factory('ApiResourceGroups', function (ApiResource, $resource) {
    //         var r = ApiResource.getResource('groups'
    //             // , {
    //             //     resource : { id : "@ID" }
    //             // }
    //         );
    //         r.query();
    //         return  r;
    //     }
    // )

    // .run(initGroups)
    ;


// function initGroups (ctGroupService) {
//     return ctGroupService.init();
// }