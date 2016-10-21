/**
 * Created by ilja on 20.10.16.
 */


export default class EnvironmentService{
    constructor (ctUserService) {
        this.userService = ctUserService;
        /* current group chenjet userSrvice if group/permission OK */
        this.groupID;
    }
};