/* @ngInject */
class SignInService {

    constructor($http){
        this.$http = $http
    }

    validateLogin (credentials){
        return this.$http.post('http://localhost:8000/client/login', credentials)
    }

    getAccount (userName){
        return this.$http.get('http://localhost:8000/client/account', credentials)
    }

    createAccount (account) {
        return this.$http.post('http://localhost:8000/client/create', account)
    }
}

export default SignInService