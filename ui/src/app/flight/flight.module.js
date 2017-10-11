import flightComponent from './flight.component.js'
import MapController from './../map/map.component.js'

export default
    angular
        .module('flight.flight', [])
        .component('flightComponent', flightComponent)
        .controller('mapController', MapController)
        .name