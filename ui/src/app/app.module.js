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
import resultComponent from './result/result.module'

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
      itineraryMap,
      resultComponent

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
      const flightListState = {
        name: 'flightListState',
        url: '/flightList',
        component: 'flightComponent'
      }

      const resultState = {
        name: 'result',
        url: '/result',
        component: 'resultComponent',
        resolve: {
          itineraries: ['globalService', 'searchService', '$stateParams', function (globalService, searchService, stateParams) {
            return searchService.getAllPastItineraries(globalService.credentials.username).then((done) => {
                resultController.itineraryList = done.data
                return done.data
            })
        }]
        }
      }

      const searchResultState = {
        name: 'searchResult',
        url: '/searchresult',
        component: 'resultComponent',
        params: {
          departure: null,
          destination: null
        },
        resolve: {
          itineraries: ['globalService', 'searchService', '$stateParams', function (globalService, searchService, stateParams) {
            console.log(stateParams.departure)
            console.log(stateParams.destination)
            return searchService.searchForItinerary(stateParams.departure, stateParams.destination).then((done) => {
                console.log(done.data)
                return done.data
            })
        }]
        }
      }

      stateProvider.state(signIn)
      stateProvider.state(signUp)
      stateProvider.state(mapState)
      stateProvider.state(searchState)
      stateProvider.state(nestedMapState)
      stateProvider.state(signInMapState)
      stateProvider.state(itineraryState)
      stateProvider.state(flightListState)
      stateProvider.state(itineraryMapState)
      stateProvider.state(searchResultState)


      urlRouter.otherwise('/itinerary')
    }])
    .constant('apiUrl', apiUrl)
    .component('flightApp', appComponent)
    .name
