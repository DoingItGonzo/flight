import SignInService from './signIn.service.js'
import SignInController from './signIn.controller.js'
import signInComponent from './signIn.component.js'


export default
    angular
        .module('flight.signIn', ['ui.router'])
        .service('signInService', SignInService)
        .controller('signInController', SignInController)
        .component('signInComponent', signInComponent)
        .name