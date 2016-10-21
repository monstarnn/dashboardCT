import {layoutComponent} from './environment_component.js'
import stateConfig from './environment_stateconfig.js'
import Group from './group/group_module.js'
import User from './user/user_module'
import  Nav from './nav/nav_module'
import Templates from '../../core/templates'
import Core from './../../core/module'
import State from './state/state_module'
import {ApiPath} from './../environment/environment_state'
import EnvironmentService from './environment_service'

export default angular
    .module('dashboard.environment',
        [
            'ui.router',
            Templates.name,
            Group.name,
            User.name,
            Nav.name,
            Core.name,
            State.name
        ]
    )
    .config(stateConfig)
    .component('mctEnv', layoutComponent)
    .value('ApiPath', ApiPath)
    // .value('envGroup', undefined)
    .service('envService' , EnvironmentService)
;