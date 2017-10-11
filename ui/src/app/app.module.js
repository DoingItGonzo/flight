import flightMap from './map/map.module'
import apiUrl from './api.url'
import appComponent from './app.component.js'
import signInComponent from './signIn/signIn.module'
import signUpComponent from './signUp/signUp.module'
import navBarComponent from './navBar/navBar.module'
import searchComponent from './search/search.module'
import itineraryComponent from './itinerary/itinerary.module'
import flightComponent from './flight/flight.module'
import itineraryMap from './map/itineraryMap.module'

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
      searchComponent,
      itineraryComponent,
      flightComponent,
      itineraryMap

    ]).config(['$stateProvider', '$urlRouterProvider', function (stateProvider, urlRouter) {

      const signIn = {
        name: 'signIn',
        url: '/signIn',
        component: 'signInComponent'
      }
      const signInMapState = {
        name:'signIn.map',
        url: '/flights',
        component: 'flightMap'
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

      const nestedMapState = {
        name:'search.map',
        url: '/flights',
        component: 'flightMap'
      }

      const itineraryMapState = {
        name:'search.itineraryMap',
        url: '/itineraryMap',
        component: 'itineraryMap'
      }

      const itineraryState = {
        name: 'itinerary',
        url: '/itinerary',
        component: 'itineraryComponent'
      }
      const flightState = {
        name: 'flightState',
        url: '/flightState',
        component: 'flightComponent'
      }

      stateProvider.state(signIn)
      stateProvider.state(signUp)
      stateProvider.state(mapState)
      stateProvider.state(searchState)
      stateProvider.state(nestedMapState)
      stateProvider.state(signInMapState)
      stateProvider.state(itineraryState)
      stateProvider.state(flightState)
      stateProvider.state(itineraryMapState)


      urlRouter.otherwise('/search/flights')
    }])
    .constant('apiUrl', apiUrl)
    .component('flightApp', appComponent)
    .name
