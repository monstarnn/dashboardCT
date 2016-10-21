/**
 * Created by ilja on 21.10.16.
 */


export class ContentHeaderActionController {
    constructor ($state) {
        this.state = $state;
        /** from html attr */
        this.stateActions;
    }
}

export const ContentHeaderActionComponent = {
    bindings : {
        stateActions : '='
    },
    template : ` <div class="btn-group" uib-dropdown is-open="$ctrl.status.isopen">
                  <button id="single-button" type="button" class="btn btn-info" uib-dropdown-toggle ng-disabled="$ctrl.disabled">
                    <span class="glyphicon glyphicon-th-list"></span>
                  </button>
                  <ul class="dropdown-menu" uib-dropdown-menu role="menu" aria-labelledby="btn-append-to-body">
                    <li role="menuitem" ng-repeat="a in $ctrl.stateActions"><a ui-sref="{{a.link}}">{{a.title}}</a></li>
                  </ul>
      
                </div>
                `,
    controller : ContentHeaderActionController
}