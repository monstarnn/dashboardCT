/**
 * Created by ilja on 21.10.16.
 */


export class ContentHeaderTitleController {
    constructor (/*$state*/) {
        // this.state = $state;
        /** from html attr */
        this.stateTree;
        // console.log('ContentHeaderTitleController', this.stateTree);
        // debugger
    }
}

export const ContentHeaderTitleComponent = {
    bindings : {
        stateTree : '='
    },
    template : '<span ng-repeat="t in $ctrl.stateTree" >{{t.title}}</span>',
    controller : ContentHeaderTitleController
};