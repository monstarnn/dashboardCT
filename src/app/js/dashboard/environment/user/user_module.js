import {UserService} from './user_service'
import ApiService from "../../../core/api_service.js"

export default angular
    .module('environment.user', [])
    .service('ctUserService', UserService)
    .service('ApiService', ApiService)
    // .run(userInit)
;

function userInit(ctUserService) {
    ctUserService.init();
}