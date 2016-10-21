/**
 * Created by ilja on 21.10.16.
 */

export class ClustersListController {
    constructor () {
        this.clustersList; // from html scope
        this.clustersService; // from html scope
    }
};

export const ClustersListComponent = {
    bindings : {
        clustersList : "<",
        clustersService : "<"
    },
    template: function($templateCache){ return $templateCache.get('dashboard/clusters/clusters_list_component.html') },
    controller: ClustersListController
};