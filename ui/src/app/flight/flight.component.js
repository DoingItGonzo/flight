import FlightDisplayController from './flight.controller.js'
import templateUrl from './flight.component.html'

export default {
    templateUrl,
    controller: FlightDisplayController,
    controllerAs: 'flightDisplayController',
    bindings: {
        flights: '='
    }
}