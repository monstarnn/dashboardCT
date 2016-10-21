/**
 * Created by ilja on 21.10.16.
 */


export class ContentHeaderTitleController {
    constructor (/*$state*/) {
        this.stateTree;
    }
}

export const ContentHeaderTitleComponent = {
    bindings : {
        stateTree : '='
    },
    template : '<span ng-repeat="t in $ctrl.stateTree" >{{t.title}}</span>',
    controller : ContentHeaderTitleController
};