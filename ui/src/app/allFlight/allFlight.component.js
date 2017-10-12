import templateUrl from './allFlight.component.html'
import AllFlightController from './allFlight.controller.js'

export default {
    templateUrl,
    controller: AllFlightController,
    controllerAs: 'allFlightController',
    bindings: {
        flights: '='
    }
  }