import signUpComponent from './signUp.component.js'
import SignInService from './../signIn/signIn.service.js'
import SignInController from './../signIn/signIn.controller.js'

export default
    angular
        .module('flight.signUp', [])
        .component('signUpComponent', signUpComponent)
        .service('signInService', SignInService)
        .controller('signInController', SignInController)
        .name