/**
 * Created by ilja on 19.10.16.
 */

import ClustersConfig from './clusters_stateconfig'
import ClustersService from './clusters_service'
// import Templates from '../../core/templates'
import ENV from '../environment/environment_module'

export default angular
    .module('dashboart.clusres', [
        ENV.name
        // 'ui.router',
        // Templates.name
    ])
    .config( ClustersConfig )
    .service('ClustersService', ClustersService);

