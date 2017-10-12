import AllFlightController from './allFlight.controller'
import allFlightComponent from './allFlight.component.js'
import GlobalService from './../globalServices.js'

export default
angular
    .module('flight.allFlight', ['ui.router'])
    .component('allFlightComponent', allFlightComponent)
    .controller('allFlightController', AllFlightController)
    .service('globalService', GlobalService)
    .name