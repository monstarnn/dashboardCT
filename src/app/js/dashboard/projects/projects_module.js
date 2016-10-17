
import {ProjectsListComponent} from './projects_list_component';

import {ProjectsMenuListComponent} from './projects_menu_list_component';
import StateConfig from './projects_stateconfig';
import Templates from '../../core/templates';
// import {ApiProjectsService} from './projects_service'
import CoreResource from '../../core/resource'

export default angular
    .module('dashboard.project', [
        'ui.router',
        Templates.name
    ])
    .config(StateConfig)
    .component('mctProjectsList', ProjectsListComponent)
    .component('mctProjectsMenuList', ProjectsMenuListComponent)
    // .service('ApiProjectsService', ApiProjectsService)

    .factory('ApiResourceProjects', function (ApiResource) {
            var r = ApiResource.getResource('projects', {} /*{idAttribute : "id"}*/);
            r.query();
            return  r;
        }
    )

    // .factory('ApiResourceProjects', getApiResourseProjrcts)


// function getApiResourseProjrcts (ApiResource) {
//     return ApiResource.recource('projects');
// }