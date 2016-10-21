import Environment from './environment/environment_module.js';
import Catalog from './catalog/catalog_module'
import Projects from './projects/projects_module'
import ProjectDetail from './project_detail/project_detail_module'
import Templates from '../core/templates'

import Clusters from './clusters/clusters_module'

var dashboard = angular
    .module('dashboard', [
        'ui.router',
        'ui.bootstrap',
        Templates.name,
        Environment.name,
        Catalog.name,
        Projects.name,
        ProjectDetail.name,
        Clusters.name
    ]);

export default dashboard;