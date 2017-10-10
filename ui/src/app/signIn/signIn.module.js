import SignInService from './signIn.service.js'
import signInComponent from './signIn.component.js'

export default
    angular
        .module('flight.signIn', [])
        .component('signInComponent', signInComponent)
        .service('signInService', SignInService)
        .name