/**
 * Created by ilja on 07.10.16.
 */

import {GroupService} from './group_service.js'
import ApiService from "../../../core/api_service.js"

export default angular
    .module("dashboard.group", [])
    .service('ctGroupService', GroupService)
    .service('ApiService', ApiService)
    // .run(initGroups)
    ;


function initGroups (ctGroupService) {
    return ctGroupService.init();
}