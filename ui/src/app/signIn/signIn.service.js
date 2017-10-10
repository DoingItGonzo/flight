/* @ngInject */
class SignInService {

    constructor($http){
        this.$http = $http
    }

    validateLogin (username, credentials){
        return this.$http.post('http://localhost:8000/client/login/' + username, credentials)
    }

    getAccount (username){
        return this.$http.get('http://localhost:8000/client/account', username)
    }

    createAccount (account) {
        return this.$http.post('http://localhost:8000/client/create', account)
    }
}

export default SignInService