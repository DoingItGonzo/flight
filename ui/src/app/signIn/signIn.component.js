import templateUrl from './signIn.component.html'

/* @ngInject */
class SignInController {

    name
    pass

    constructor(signInService) {
        this.signInService = signInService
    }

    // credentials = (username, password) => ({
    //     username, password})   

    login = () => {
        console.log(name)
        this.signInService.validateLogin(name).then((done) => {
            // if (done.data) {
            //     signInService.getAccount(credentials.username)
            // }
            console.log(done.data)
        })
    }

}

export default {
    templateUrl,
    controller: SignInController,
    controllerAs: 'signInController'
  }