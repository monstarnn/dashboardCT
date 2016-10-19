/**
 * Created by ilja on 17.10.16.
 */

import Projects from '../projects/projects_module';
import StateConfig from './project_detail_stateconfig'

export default angular
    .module('dashboard.project.detail', [
        Projects.name
    ])
    .config(StateConfig)
;
