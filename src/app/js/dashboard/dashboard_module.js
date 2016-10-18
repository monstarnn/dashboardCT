import Environment from './environment/environment_module.js';
import Catalog from './catalog/catalog_module'
import Projects from './projects/projects_module'
import ProjectDetail from './project_detail/project_delail_module'
import Templates from '../core/templates'

import mockApi from '../mock/mock_api';

var dashboard = angular
    .module('dashboard', [
        'ui.router',
        Templates.name,
        Environment.name,
        Catalog.name,
        Projects.name,
        ProjectDetail.name,
        'ngMockE2E'
    ]);



// set mocked API response
if(true) mockApi(dashboard);

export default dashboard;