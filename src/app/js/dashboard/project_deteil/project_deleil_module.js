/**
 * Created by ilja on 17.10.16.
 */

import Projects from '../projects/projects_module';
import StateConfig from './project_deteil_staetconfig'
export default angular
    .module(Projects.name, [
    ])
    .config(StateConfig)
;
