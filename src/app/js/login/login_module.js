// import router from './router.js';

import {SigninController} from './controllers/signin/signin.controller';
import {SignupController} from './controllers/signup/signup.controller';
// import {Copyright} from '../common/directives/copyright/copyright.directive';
// import {AccountService} from '../common/services/accountService.factory';
import loginStateconfig from "./login_stateconfig";
import Core from './../core/module';
import ApiService from "../core/api_service"
// import Templates from '../core/templates'
import {ApiPath} from './../dashboard/environment/environment_state'

angular.module('login', [
        'ui.router',
        Core.name,
        // Templates.name
    ])
    .config(loginStateconfig)
    .controller('SigninController', SigninController)
    .controller('SignupController', SignupController)
    // .directive('copyright', Copyright.createInstance)
    // .service('accountService',  AccountService)
    .service('ApiService',  ApiService)
    .value('ApiPath', ApiPath)
    ;

//angular.module('account').factory('accountService',  function(){return new AccountService()});
//angular.module('account').provider('accountService',  providerBuilder(AccountService));


//function providerBuilder(obj) {
//    return function () {
//        this.$get = [function () {
//            return new obj();
//        }];
//    }
//}