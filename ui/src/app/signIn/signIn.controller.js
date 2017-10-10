import SignInService from './signIn.service.js'

/* @ngInject */
class SignInController {
    
        constructor(signInService, $state) {
            this.signInService = signInService
            this.state = $state
            this.client = {}
            this.client.credentials = {}
            this.client.credentials.username
            this.client.credentials.password
        }
    
        signUp = () => {
            this.state.go('signUp')
        }
    
        login = () => {
            console.log(this.client.credentials.username)
            this.signInService.validateLogin(this.client.credentials.username, this.client.credentials).then((done) => {
                console.log(done.data)
                if (done.data) {
                    this.signInService.getAccount(this.client.credentials.username).then((done) => {
                        console.log(done.data.credentials.username)
                        this.client.credentials = done.data.credentials
                        this.state.go('mapState')
                    })
                }
                console.log(done.data)
            })
        }
    
        create = () => {
            console.log(this.client.credentials.username)
            this.signInService.createAccount(this.client).then((done) => {
                console.log(done.data)
                this.state.go('mapState')
            })
        }
    
    }

export default SignInController