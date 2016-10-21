/**
 * Created by ilja on 20.10.16.
 */


export default class EnvironmentService{
    constructor (ctUserService) {
        // debugger
        this.userService = ctUserService;
        /* current group changes userService if group/permissions OK */
        this.groupID;
    }
};