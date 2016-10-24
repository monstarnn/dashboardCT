/**
 * Created by ilja on 19.10.16.
 */

export default class ClustersController {
    /**
     *
     * @param clustersList // from state resolve
     * @param ClustersServic
     */
    constructor (clustersList, ClustersService) {

        this.clustersList = clustersList;
        this.clustersService = ClustersService;
        this.clustersService.scope.$on('change', (r) => {
            debugger;
            this.clustersList = this.clustersService.Resource.then((resource) => {
                debugger;
                this.clustersList = resource.list;
            })
        })
    }
}