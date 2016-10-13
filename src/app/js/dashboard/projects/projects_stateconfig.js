/**
 * Created by ilja on 10.10.16.
 */
export  default function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('Group.Projects', {
            parent: "Group",
            url: '/projects',
            // resolve : {
            //     projectList : getProjectslist
            // },
            views: {
                "": {
                    template: '<mct-project></mct-project>'
                }
            }
        })
}

function getProjectslist (ApiResourceProjects) {
    debugger;
    return ApiResourceProjects.query().$promise;
}