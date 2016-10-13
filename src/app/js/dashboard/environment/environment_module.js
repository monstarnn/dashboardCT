import {layoutComponent} from './environment_component.js'
import stateConfig from './environment_stateconfig.js'
import Group from './group/group_module.js'
import User from './user/user_module'
import  Nav from './nav/nav_module'
import Templates from '../../core/templates'

export default angular
    .module('dashboard.environment',
        [
            'ui.router',
            Templates.name,
            Group.name,
            User.name,
            Nav.name
        ]
    )
    .config(stateConfig)
    .component('mctEnv', layoutComponent);