import UserModule from "../../../../js/dashboard/environment/user/user_module";
import EnvironmentModule from "../../../../js/dashboard/environment/environment_module";

describe('UserService', () => {

    let ctUserService, $rootScope, q,
        permissions = ['permissions', 'for', 'test'],
        testGroup = "fake";
    
    beforeEach(() => {
        debugger;
        angular.mock.module(EnvironmentModule.name);
        angular.mock.module(UserModule.name);
        inject( (_ctUserService_, _$rootScope_, _$q_) => {
            ctUserService = _ctUserService_;
            $rootScope = _$rootScope_;
            q = _$q_;
        });

    });

    it('should return permissions list', () => {
        debugger;
        let deferred = q.defer(),
            result_init;
        spyOn(ctUserService.api, 'get').and.returnValue(deferred.promise);
        ctUserService.init(testGroup).then((ret) => {
            result_init = ret;
        });
        deferred.resolve(permissions);
        $rootScope.$apply();
        expect(result_init).toEqual(permissions);
    });

    it('should return previously initialized permissions list', () => {
        debugger;
        let anotherPermissions = ['another', 'test'],
            anotherTestGroup = "another",
            deferred = q.defer(),
            anotherDeferred = q.defer(),
            result_init;
        // init first permissions
        let spy = spyOn(ctUserService.api, 'get').and.returnValue(deferred.promise);
        // api not called
        expect(ctUserService.api.get.calls.count()).toEqual(0);
        ctUserService.init(testGroup).then((ret) => {
            result_init = ret;
        });
        deferred.resolve(permissions);
        $rootScope.$apply();
        expect(result_init).toEqual(permissions);
        // init second permissions
        spy.and.returnValue(anotherDeferred.promise);
        ctUserService.init(anotherTestGroup).then((ret) => {
            result_init = ret;
        });
        anotherDeferred.resolve(anotherPermissions);
        $rootScope.$apply();
        expect(result_init).toEqual(anotherPermissions);
        // get previously initialized first permissions
        ctUserService.init(testGroup).then((ret) => {
            result_init = ret;
        });
        $rootScope.$apply();
        expect(result_init).toEqual(permissions);
        // api called 2 times (not 3)
        // TODO: actually returns 3 because api.get applies from ctGroupService.init() that fires from $stateProvider in module dashboard.environment
        // expect(ctUserService.api.get.calls.count()).toEqual(2);
    });

});