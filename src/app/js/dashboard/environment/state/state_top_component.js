/**
 * Created by ilja on 20.10.16.
 */


export class StateTopConstructor {
    constructor ($state) {
        this.state = $state;
    }
    $onInit () {

    }
    registerStateChangeListeners(scope) {
        scope.$on('$stateChangeStart', () => {
            this.loading = true;
            this.showLoadingSpinner = false;
            // Show loading spinner after X ms, only for long-loading pages. This is to avoid flicker
            // for pages that load instantaneously.
            this.timeout_(() => {
                this.showLoadingSpinner = true;
            }, 250);
        });

        // scope.$on('$stateChangeError', this.hideSpinner_.bind(this));
        // scope.$on('$stateChangeSuccess', this.hideSpinner_.bind(this));
    }
    //
    // hideSpinner_() {
    //     this.loading = false;
    //     this.showLoadingSpinner = false;
    // }
}

export const StateTopComponent = {
    template : "<div>Top</div>",
    controller : StateTopConstructor
};