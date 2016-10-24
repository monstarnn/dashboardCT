import {GroupService} from './group_service.js'
import ApiService from "../../../core/api_service.js"

export default angular
    .module("dashboard.group", [])
    .service('ctGroupService', GroupService)
    .service('ApiService', ApiService)
    ;
