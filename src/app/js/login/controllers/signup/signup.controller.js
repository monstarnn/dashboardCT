class SignupController {

    constructor($scope, ApiService) {
        this.api = ApiService;
        this.scope = $scope;
        this.badPasswords = false;
        this.badPhone = false;
        this.email;
        this.password;
        this.password2;
        this.organization;
        this.phone;
    }

    checkPasswords() {
        this.badPasswords = !this.password || this.password.length < 2 || this.password != this.password2;
    }

    checkPhone() {
        let test_els = /^\+?[ \d]{11,}/;
        this.phone = this.phone.replace(/[^\+\d]+/ig, ' ');
        let pLength = this.phone.match( /\d/g );
        this.badPhone = !pLength || pLength.length != 11;

    }

    signup() {
        alert('Not implemented yet');
        // debugger;
        // this.loggingIn = true;
        // this.api.postForm('auth/register', {
        //     email : this.email,
        //     password : this.password,
        //     organization : this.organization,
        //     phone : this.phone
        // }).then(() => {
        //     debugger;
        //     // location.reload();
        // }).catch(() => {
        //     debugger;
        //     this.wrongLogPass = true;
        // }).finally(() => {
        //     debugger;
        //     this.loggingIn = false;
        // });

    }
}

SignupController.$inject = ['$scope', 'ApiService'];

export {SignupController}

