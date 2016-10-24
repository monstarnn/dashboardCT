/**
 * Created by ilja on 21.10.16.
 */

export class ClustersListItemController {
    constructor () {
        this.clusterInfo; // from html scope
        this.clustersService; // from html scope
    }
};

export const ClustersListItemComponent = {
    bindings : {
        clusterInfo : "=",
        clustersService : "="
    },
    template: function($templateCache){ return $templateCache.get('dashboard/clusters/clusters_list_item_component.html') },
    controller: ClustersListItemController
};