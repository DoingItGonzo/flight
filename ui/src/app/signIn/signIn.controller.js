import SignInService from './signIn.service.js'

/* @ngInject */
class SignInController {
    
        constructor(signInService, $state) {
            this.signInService = SignInService
            this.state = $state
            this.credentials = {}
            this.credentials.username
            this.credentials.password
        }
    
        signUp = () => {
            this.state.go('signUp')
        }
    
        login = () => {
            console.log(name)
            this.signInService.validateLogin(this.credentials.username, this.credentials).then((done) => {
                if (done.data) {
                    signInService.getAccount(this.credentials.username).then((done) => {
                        console.log(done.data.credentials.username)
                        this.account = done.data
                    })
                }
                console.log(done.data)
            })
        }
    
        // create = () => {
        //     this.signInService.createAccount(this.account).then((done) => {
        //         console.log(done.data)
        //     })
        // }
    
    }

export default SignInController