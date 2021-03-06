/**
 * Created by ilja on 10.10.16.
 */

import {ToolbarComponent} from './nav_toolbar_component';
import {SubcontentComponent} from './nav_subcontent_component'
import Templates from '../../../core/templates'
import GroupModule from './../group/group_module';
import {UsermenuComponent} from './nav_usermenu_component'

import ApiService from "../../../core/api_service"

export default angular
    .module('dashboard.nav',[
        'ui.router',
        GroupModule.name,
        Templates.name
    ])
    .component('mctToolbar', ToolbarComponent)
    .component('mctSubcontent', SubcontentComponent)
    .component('mctUsermenu', UsermenuComponent)
    .service('ApiService', ApiService)
    
    // .run(function (mctSubcontent) {
    //     debugger;
    //
    // })