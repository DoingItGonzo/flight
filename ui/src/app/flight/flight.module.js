import flightComponent from './flight.component.js'
import FlightDisplayController from './flight.controller.js'

export default
    angular
        .module('flight.flights', [])
        .component('flightComponent', flightComponent)
        .controller('flightDisplayController', FlightDisplayController)
        .name