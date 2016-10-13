import GroupModule from "../../../../js/dashboard/environment/group/group_module";
import EnvironmentModule from "../../../../js/dashboard/environment/environment_module";

describe('GroupService', () => {

    it('should return groups list', () => {
        angular.mock.module(EnvironmentModule.name);
        angular.mock.module(GroupModule.name);
        
        let ctGroupService, $rootScope, deferred;
        inject( (_ctGroupService_, _$rootScope_, _$q_) => {
            ctGroupService = _ctGroupService_;
            $rootScope = _$rootScope_;
            deferred = _$q_.defer();
        });
        
        let groups = ['just', 'a', 'test'], result_init;
        
        spyOn(ctGroupService.api, 'get').and.returnValue(deferred.promise);
        
        ctGroupService.init().then((ret) => {
            result_init = ret;
        });
        
        deferred.resolve(groups);
        
        $rootScope.$apply();
        
        expect(result_init).toEqual(groups);
        
    });
    
    
});
