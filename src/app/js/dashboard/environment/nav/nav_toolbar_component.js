/**
 * Created by ilja on 10.10.16.
 */

export class ToolbarController {
    // constructor(){
    //     debugger;
    // }

    test(){
        debugger;
    }
};

export const ToolbarComponent = {
    controller : ToolbarController,
    template : function ($templateCache) {
        return $templateCache.get('dashboard/environment/nav/nav_toolbar.html');
    }
};