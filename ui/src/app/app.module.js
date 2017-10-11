import flightMap from './map/map.module'
import apiUrl from './api.url'
import appComponent from './app.component.js'
import signInComponent from './signIn/signIn.module'
import signUpComponent from './signUp/signUp.module'
import navBarComponent from './navBar/navBar.module'
import searchComponent from './search/search.module'

export default
  angular
    .module('flight', [
      'ngAria',
      'ngAnimate',
      'ngMaterial',
      'ngMessages',
      'ui.router',

      flightMap,
      signInComponent,
      signUpComponent,
      navBarComponent,
      searchComponent

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

      const mapState = {
        name: 'mapState',
        url: '/map',
        component: 'flightMap'
      }

      const searchState = {
        name: 'search',
        url: '/search',
        component: 'searchComponent'
      }

      stateProvider.state(signIn)
      stateProvider.state(signUp)
      stateProvider.state(mapState)
      stateProvider.state(searchState)

      urlRouter.otherwise('/map')
    }])
    .constant('apiUrl', apiUrl)
    .component('flightApp', appComponent)
    .name
