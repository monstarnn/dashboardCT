export class LayoutController {
    constructor ($state, $scope, $rootScope){
        // debugger;
    }
}

export const layoutComponent = {
    controller : LayoutController,
    template: ['$templateCache', function ($templateCache) {
        return $templateCache.get('dashboard/environment/environment.html');
    }]
};