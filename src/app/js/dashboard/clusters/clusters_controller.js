/**
 * Created by ilja on 19.10.16.
 */

export default class ClustersController {
    /**
     *
     * @param clustersList // from state resolve
     * @param ClustersService
     */
    constructor (clustersList, ClustersService) {

        this.clustersList = clustersList;
        this.clustersService = ClustersService;
    }
}