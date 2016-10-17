import Environment from './environment/environment_module.js';
import Catalog from './catalog/catalog_module'
import Projects from './projects/projects_module'
import ProjectDeteil from './project_deteil/project_deleil_module'
import mockApi from '../mock/mock_api';
import Templates from '../core/templates'
// import ApiService from '../core/api_service'

// import {CoreResource} from '../core/resource'

var dashboard = angular
    .module('dashboard', [
        'ui.router',
        Templates.name,
        Environment.name,
        Catalog.name,
        Projects.name,
        ProjectDeteil.name
    ])
    ;
    // .service('ApiResource', CoreResource)
    // .service('ApiService', ApiService);



// set mocked API response
if(true) mockApi(dashboard);

export default dashboard;