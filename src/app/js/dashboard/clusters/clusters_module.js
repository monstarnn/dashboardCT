/**
 * Created by ilja on 19.10.16.
 */

import ClustersConfig from './clusters_stateconfig'
import ClustersService from './clusters_service'
import ENV from '../environment/environment_module'
import {ClustersListComponent} from './clusters_list_component'
import {ClustersListItemComponent} from './clusters_list_item_component'

export default angular
    .module('dashboart.clusres', [
        ENV.name
        // 'ui.router',
        // Templates.name
    ])
    .config( ClustersConfig )
    .service('ClustersService', ClustersService)
    .component('ctClustersList', ClustersListComponent)
    .component('ctClustersListItem', ClustersListItemComponent)
;

