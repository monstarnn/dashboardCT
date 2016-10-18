class SigninController {

    constructor($scope, ApiService) {
        this.api = ApiService;
        this.scope = $scope;
        this.wrongLogPass = false;
        this.loggingIn = false;
        this.email;
        this.password;
    }
    
    signin() {
        this.loggingIn = true;
        this.api.postForm('auth/login', {email : this.email, password : this.password}).then(() => {
            location.reload();
        }).catch(() => {
            this.wrongLogPass = true;
        }).finally(() => {
            this.loggingIn = false;
        });
    }

    clear() {
        this.wrongLogPass = false;
    }

}

SigninController.$inject = ['$scope', 'ApiService'];
export {SigninController}