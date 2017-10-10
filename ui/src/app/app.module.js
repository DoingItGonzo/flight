import flightMap from './map/map.module'
import apiUrl from './api.url'
import appComponent from './app.component.js'
import signInComponent from './signIn/signIn.module'

export default
  angular
    .module('flight', [
      'ngAria',
      'ngAnimate',
      'ngMaterial',
      'ngMessages',
      'ui.router',

      flightMap,
      signInComponent
    ]).config(['$stateProvider', '$urlRouterProvider', function (stateProvider, urlRouter) {

      const signIn = {
        name: 'signIn',
        url: '/signIn',
        component: 'signInComponent'
    }

    const signUp = {
        name: 'signUp',
        url: '/signUp',
        component: 'signUpComponent'
    }

    stateProvider.state(signIn)
    stateProvider.state(signUp)

    urlRouter.otherwise('/signIn')
    }])
    .constant('apiUrl', apiUrl)
    .component('flightApp', appComponent)
    .name
