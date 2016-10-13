import GroupModule from "../../../../js/dashboard/environment/group/group_module";
import DashboardModule from "../../../../js/dashboard/dashboard_module";

describe('GroupService', () => {

    // describe('dashboard.group', () => {
    it('should be defined', () => {
        expect(angular.module(GroupModule.name)).toBeDefined();
    });
    // });
    
    
    it('should return groups list', () => {
        debugger;
        angular.mock.module(DashboardModule.name);
        angular.mock.module(GroupModule.name);
        let ctGroupService, $rootScope, deferred;
        inject( (_ctGroupService_, _$rootScope_, _$q_) => {
            ctGroupService = _ctGroupService_;
            $rootScope = _$rootScope_;
            deferred = _$q_.defer();
        });
        
        debugger;
        
        let groups = ['demo', 'admin', 'test'];
        
        // deferred.resolve(groups);
        
        // spyOn(ctGroupService, 'getList').and.returnValue(deferred.promise);
        spyOn(ctGroupService.api, 'get').and.returnValue(deferred.promise);
        
        let result_list, result_init;
        
        // debugger;
        
        // ctGroupService.getList().then((ret) => {
        //     debugger;
        //     result_list = ret;
        // });
        //
        // debugger;
        //
        // $rootScope.$apply();
        //
        // expect(result_list).toEqual(groups);

        debugger;
        
        ctGroupService.init().then((ret) => {
            result_init = ret;
        });

        debugger;
        
        deferred.resolve(groups);

        debugger;
        
        $rootScope.$apply();
        
        debugger;
        
        expect(result_init).toEqual(groups);
        
    });
    
    
});
