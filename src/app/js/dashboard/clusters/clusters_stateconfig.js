/**
 * Created by ilja on 19.10.16.
 */


import ClusterController from './clusters_controller'

export  default function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('Clusters', {
            parent: "Group",
            url: '/clusters',
            resolve : {
                clustersList : function (ClustersService, $q) {
                    return ClustersService.List();
                }
            },
            views: {
                "": {
                    template: `<ct-clusters-list 
                                    clusters-list="$ctrl.clustersList" 
                                    clusters-service="$ctrl.clustersService"
                                ></ct-clusters-list>`,
                    controller: ClusterController,
                    controllerAs: '$ctrl'
                },
                "topTitle" : {
                    template : `<layout-content-header 
                                    state-tree="$ctrl.stateTree"
                                    state-actions="$ctrl.stateActions">
                                </layout-content-header>`,
                    controller: function () {
                        this.stateTree = [{title : 'Clusters', active : true}];
                        this.stateActions = [{title : 'Add cluster', link:'Clusters.Add'}, {title : 'Create cluster', link:'Clusters.Create'}]
                    },
                    controllerAs: '$ctrl'
                }

            }
        })
        .state('Clusters.Add', {
            url: '/add',
            views: {
                "action" : {
                    template: "<div>Add Cluster</div>"
                }
            }
        })
        .state('Clusters.Create', {
            url: '/create',
            views: {
                "action" : {
                    template: "<div>Create Cluster</div>"
                }
            }
        })
}
