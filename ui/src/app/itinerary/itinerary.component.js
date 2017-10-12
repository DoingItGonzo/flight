import templateUrl from './itinerary.component.html'
import ItineraryController from './itinerary.controller.js'

export default {
    templateUrl,
    controller: ItineraryController,
    controllerAs: 'itineraryController',
    bindings: {
        boundItineraries: '='
    }
}