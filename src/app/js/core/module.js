/**
 * Created by ilja on 11.10.16.
 */

import Template from './templates'
import ApiService from './api_service'
import CoreResource from './resource'

export default angular
    .module('core', [
        'ngResource',
        Template.name
    ])
    .service('ApiService', ApiService )
    .service('ApiResource', CoreResource)