/**
 * Created by ilja on 19.10.16.
 */


import ClusterController from './clusters_controller'

export  default function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('groupClusters', {
            parent: "group",
            url: '/clusters',
            resolve : {
                clustersList : function (ClustersService, $q) {
                    return ClustersService.List();
                }
            },
            views: {
                "": {
                    template: `<div ui-view="action"></div>
                                <ct-clusters-list 
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
                        this.stateActions = [
                            {title : 'Add cluster', link:'groupClustersAdd'},
                            {title : 'Create cluster', link:'groupClustersCreate'}
                        ];
                    },
                    controllerAs: '$ctrl'
                }

            }
        })
        .state('groupClustersAdd', {
            url: '/add',
            parent: 'groupClusters',
            views: {
                "action" : {
                    template:
                            `<div>Add Cluster</div>
                                <ct-clsters-edit clusters-service="$ctrl.clustersService"></ct-clsters-edit>
                            `,
                        controller: function (ClustersService) {
                            this.clustersService = ClustersService;
                        },
                        controllerAs: '$ctrl'
                }
            }
        })
        // .state('group.clusters.create', {
        //     url: '/create',
        //     views: {
        //         "action" : {
        //             template: "<div>Create Cluster</div>"
        //         }
        //     }
        // })
        ;
}
