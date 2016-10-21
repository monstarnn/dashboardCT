/**
 * Created by ilja on 20.10.16.
 */

import StateService from './state_service'
import {StateTopComponent} from './state_top_component'
export default angular
    .module('dashboard.environment.state', [])
    .service('StateService', StateService)
    .component('stateTopComponent', StateTopComponent)
