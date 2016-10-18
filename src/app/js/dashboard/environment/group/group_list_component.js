export class GroupListController {
    constructor(){
        this.groupList;
    }
    isSet(){
        return this.groupList && this.groupList.length > 0;
    }
}

export const GroupListComponent = {
    bindings: {
        'groupList': '<',
        // 'apiResourceCatalog': '<',
    },
    controller : GroupListController,
    template : function ($templateCache) {
        return $templateCache.get('dashboard/environment/group/group_list.html');
    }
};