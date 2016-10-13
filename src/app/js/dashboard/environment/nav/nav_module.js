/**
 * Created by ilja on 10.10.16.
 */

import {ToolbarComponent} from './nav_toolbar_component';
import {SubcontentComponent} from './nav_subcontent_component'
import Templates from '../../../core/templates'
export default angular
    .module('dashboard.nav',[
        'ui.router',
        Templates.name
    ])
    .component('mctToolbar', ToolbarComponent)
    .component('mctSubcontent', SubcontentComponent)
    // .run(function (mctSubcontent) {
    //     debugger;
    //
    // })