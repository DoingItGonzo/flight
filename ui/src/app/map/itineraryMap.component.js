import templateUrl from './itineraryMap.component.html'

/* @ngInject */
class ItineraryMapController {
    zoom = 7
    center = [35.5175, -86.5804]
    markers = []
    paths = []

    constructor(mapService, globalService) {
        this.mapService = mapService
        this.globalService = globalService

        this.testFlight = {}
        this.testFlight.offset
        this.testFlight.flightTime
        this.testFlight.origin = {}
        this.testFlight.destination = {}
        this.testFlight.origin.city
        this.testFlight.destination.city

        this.mapService.getLocations().then((done) => {
            // this.mapService.storedItinerary().flights.forEach(flight => {
            this.globalService.storedItinerary().flights.forEach(flight => {
                console.log(flight)
                this.testFlight = flight
                done.data.forEach(place => {
                    if (String(flight.destination).toLowerCase() == String(place.city).toLowerCase())
                        flight.destination = place
                    if (String(flight.origin).toLowerCase() == String(place.city).toLowerCase())
                        flight.origin = place
                    this.addMarker(place)
                })
                this.addPath(flight.origin, flight.destination, '#CC0099')
            })
        })
    }

    addMarker({ latitude, longitude }) {
        this.markers.push({
            position: `[${latitude}, ${longitude}]`
        })
    }

    addPath(a, b, color) {
        this.paths.push({
            path: `[[${a.latitude}, ${a.longitude}], [${b.latitude}, ${b.longitude}]]`,
            strokeColor: color,
            strokeOpacity: 1.0,
            strokeWeight: 3,
            geodesic: true
        })
    }
}

export default {
    templateUrl,
    controller: ItineraryMapController,
    controllerAs: 'itineraryMapController'
}
