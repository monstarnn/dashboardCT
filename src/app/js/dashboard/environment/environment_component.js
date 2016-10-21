


export class LayoutController {
    /**
     * @param {!ui.router.$state} $state
     * @param {!angular.Scope} $scope
     * @param {!angular.$timeout} $timeout
     * @ngInject
     */
    constructor($state, $scope, $timeout) {
        /**
         * By default this is true to show loading spinner for the first page.
         * @export {boolean}
         */
        this.showLoadingSpinner = true;

        /**
         * By default this is true to show loading for the first page.
         * @export {boolean}
         */
        this.loading = true;

        /** @private {!ui.router.$state} */
        this.state_ = $state;

        /** @private {!angular.Scope} */
        this.scope_ = $scope;

        /** @private {!angular.$timeout} */
        this.timeout_ = $timeout;
    }

    /** @export */
    $onInit() {
        this.registerStateChangeListeners(this.scope_);
    }

    /**
     * @return {boolean}
     * @export
     */
    // isActionbarVisible() {
    //     return !!this.state_.current && !!this.state_.current.views &&
    //         !!this.state_.current.views[actionbarViewName] && !this.showLoadingSpinner;
    // }

    /**
     * @param {!angular.Scope} scope
     */
    registerStateChangeListeners(scope) {
        scope.$on('$stateChangeStart', () => {
            console.log(this.state_);
            this.loading = true;
            this.showLoadingSpinner = false;
            // Show loading spinner after X ms, only for long-loading pages. This is to avoid flicker
            // for pages that load instantaneously.
            this.timeout_(() => {
                this.showLoadingSpinner = true;
            }, 250);
        });

        scope.$on('$stateChangeError', this.hideSpinner_.bind(this));
        scope.$on('$stateChangeSuccess', this.hideSpinner_.bind(this));
    }

    /**
     * @private
     */
    hideSpinner_() {
        this.loading = false;
        this.showLoadingSpinner = false;
    }
}

export const layoutComponent = {
    controller : LayoutController,
    template: ['$templateCache', function ($templateCache) {
        return $templateCache.get('dashboard/environment/environment.html');
    }]
};