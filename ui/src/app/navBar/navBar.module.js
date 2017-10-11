import navBarComponent from './navBar.component.js'
import SignInController from './../signIn/signIn.controller.js'
import SignInService from './../signIn/signIn.service.js'

export default
    angular
        .module('flight.navBar', [])
        .component('navBarComponent', navBarComponent)
        .service('signInService', SignInService)
        .controller('signInController', SignInController)
        .name