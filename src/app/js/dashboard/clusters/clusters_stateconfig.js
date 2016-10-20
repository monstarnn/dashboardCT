/**
 * Created by ilja on 19.10.16.
 */


import ClusterController from './clusters_controller'

export  default function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('Clusters', {
            parent: "Group",
            url: '/clusters',
            views: {
                "": {
                    template: `<div class="btn" ng-click="$ctrl.add()">add</div>
                               <h1>Clusters</h1>`,
                    controller: ClusterController,
                    controllerAs: '$ctrl'
                },

            }
        })
}
