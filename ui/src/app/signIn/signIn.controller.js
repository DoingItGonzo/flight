import SignInService from './signIn.service.js'

/* @ngInject */
class SignInController {
    
        constructor(signInService, globalService, $state) {
            this.signInService = signInService
            this.globalService = globalService
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
                        this.globalService.newSignIn(done.data.credentials)

                        console.log(done.data.credentials.username)
                        this.client.credentials = done.data.credentials
                        this.state.go('search.map')
                    })
                }
                console.log(done.data)
            })
        }
    
        create = () => {
            console.log(this.client.credentials.username)
            this.signInService.createAccount(this.client).then((done) => {
                this.globalService.newSignIn(done.data.credentials)
                console.log(done.data)
                this.state.go('search.map')
            })
        }

        logout = () => {
            this.globalService.logout()
            this.client = {}
        }

        // historyPage = () => {
        //     this.state.go('history')
        // }

        searchPage = () => {
            this.state.go('search.map')
        }
    
    }

export default SignInController