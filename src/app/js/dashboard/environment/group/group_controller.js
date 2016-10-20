export default class GroupController {
    constructor(groups, $state) {
        this.groups = groups;
        if(groups.success && groups.data.length > 0) {
            $state.go('Group', {groupID: groups.data[0].ID});
        } else {
            // no groups WTF?!
            debugger;
        }
    }
}