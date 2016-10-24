/**
 * Created by ilja on 17.10.16.
 */

import ProjectDetailController from './project_detail_controller';

export  default function ($stateProvider) {

    $stateProvider
        .state('group.project.detail', {
            url : '/projects/:projectId',
            parent: "group",
            // resolve : {
            //     projectDetail : function (ApiResourceProjects, $stateParams, $q) {
            //         debugger
            //         var defer = $q.defer();
            //         ApiResourceProjects.queryPromise.then(() => {
            //             ApiResourceProjects.getById($stateParams.projectID)
            //                 .then((res) => {
            //                     defer.resolve(res);
            //                 })
            //                 .catch((res) => {
            //                     defer.reject(res);
            //                 });
            //         });
            //         return defer.promise;
            //     }
            // },
            views : {
                "": {
                    templateProvider : function ($templateCache) {
                        return $templateCache.get('dashboard/project_detail/project_detail.html');
                    },
                    controller: ProjectDetailController,
                    controllerAs: '$ctrl'
                },
            }
        })
}