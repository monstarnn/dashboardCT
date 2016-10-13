
import {ProjectComponent} from './projects_component'
import StateConfig from './projects_stateconfig'
import Templates from '../../core/templates'

export default angular
    .module('dashboard.project', [
        'ui.router',
        Templates.name
    ])
    .component('mctProject', ProjectComponent)
    .config(StateConfig)
    .factory('ApiResourceProjects', getApiResourseProjrcts)


function getApiResourseProjrcts (ApiResource) {
    return ApiResource.recource('projects');
}