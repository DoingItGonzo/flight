import signUpComponent from './signUp.component.js'
import SignInService from './../signIn/signIn.service.js'
import SignInController from './../signIn/signIn.controller.js'
import GlobalService from './../globalServices.js'

export default
    angular
        .module('flight.signUp', [])
        .component('signUpComponent', signUpComponent)
        .service('signInService', SignInService)
        .service('globalService', GlobalService)
        .controller('signInController', SignInController)
        .name