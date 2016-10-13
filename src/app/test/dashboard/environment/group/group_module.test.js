import GroupModule from "../../../../js/dashboard/environment/group/group_module";

describe('GroupModule', () => {

    it('should be defined', () => {
        expect(angular.module(GroupModule.name)).toBeDefined();
    });
    
});
