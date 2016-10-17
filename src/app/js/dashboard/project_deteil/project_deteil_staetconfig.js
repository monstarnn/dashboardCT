/**
 * Created by ilja on 17.10.16.
 */

import ProjectDeteilCotroller from './project_deteil_controller';

export  default function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('ProjectCDetail', {
            url : '/{:groupID}/projects/:projectID',
            resolve : {
                projectDetail : function (ApiResourceProjects, $stateParams, $q) {
                    debugger;
                    return ApiResourceProjects.getById($stateParams.projectID);
                }
            },
            views : {
                "": {
                    template: '<h1>catalog item <btn class="btn" ng-click="$ctrl.add()">add</btn> <btn class="btn" ng-click="$ctrl.etit()">edit</btn></h1>',
                    controller:ProjectDeteilCotroller,
                    controllerAs: '$ctrl'
                },
            }
        })
}