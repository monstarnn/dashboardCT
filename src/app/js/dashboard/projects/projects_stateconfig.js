/**
 * Created by ilja on 10.10.16.
 */
import ProjectController from './projects_controller'
export  default function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('group.projects', {
            parent: "group",
            url: '/projects',
            views: {
                "": {
                    template: `<div class="btn" ng-click="$ctrl.add()">add</div>
                                <mct-projects-list 
                                    api-request-projects="$ctrl.apiRecourceProjects"
                                    projects-list="$ctrl.projectsList"
                                    ></mct-projects-list>`,
                    controller: ProjectController,
                    controllerAs: '$ctrl'
                },

            }
        })
}

