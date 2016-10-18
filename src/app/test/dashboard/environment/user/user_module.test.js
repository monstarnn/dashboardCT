import UserModule from "../../../../js/dashboard/environment/user/user_module";

describe('UserModule', () => {

    it('should be defined', () => {
        expect(angular.module(UserModule.name)).toBeDefined();
    });
    
});
