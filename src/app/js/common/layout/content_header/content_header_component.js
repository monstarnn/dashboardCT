/**
 * Created by ilja on 21.10.16.
 */


export class ContentHeaderController {
    constructor ($state) {
        this.state = $state;
        /** from html attr */
        this.stateTree;
        /** from html attr */
        this.stateActions;
        // console.log('ContentHeaderController', this.stateTree);
    }

    hasTitle() {
        return (_.isArray(this.stateTree) && this.stateTree.length)
    }

    hasActions() {
        return (_.isArray(this.stateActions) && this.stateActions.length)
    }
}

export const ContentHeaderComponent = {
    bindings: {
        stateTree : "<",
        stateActions : "<"
    },
    template : function ($templateCache) {
        return $templateCache.get('common/layout/content_header/content_header_component.html')
    },
    controller : ContentHeaderController
};