/**
 * Created by ilja on 17.10.16.
 */

import ProjectDetailController from './project_detail_controller';

export  default function ($stateProvider) {
    $stateProvider
        .state('ProjectDetail', {
            url : '/{:groupID}/projects/:projectID',
            resolve : {
                projectDetail : function (ApiResourceProjects, $stateParams, $q) {
                    var defer = $q.defer();
                    ApiResourceProjects.queryPromise.then(() => {
                        ApiResourceProjects.getById($stateParams.projectID)
                            .then((res) => {
                                defer.resolve(res);
                            })
                            .catch((res) => {
                                defer.reject(res);
                            });
                    });
                    return defer.promise;
                }
            },
            views : {
                "": {
                    template: `<h1>
                                    catalog item {{$ctrl.projectDetail.Name}} 
                                    <span ng-If($ctrl.projectDetail.fullData>Full</span> 
                                    <btn class="btn" ng-click="$ctrl.add()">add</btn> 
                                    <btn class="btn" ng-click="$ctrl.edit()">edit</btn> 
                                    <btn class="btn" ng-click="$ctrl.remove()">delete</btn>
                                </h1>`,
                    controller: ProjectDetailController,
                    controllerAs: '$ctrl'
                },
            }
        })
}