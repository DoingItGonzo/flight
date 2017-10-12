import templateUrl from './map.component.html'

/* @ngInject */
class MapController {
  zoom = 7
  center = [35.5175, -86.5804]
  markers = []
  paths = []

  constructor(mapService) {
    this.mapService = mapService

    this.mapService.getLocations().then((done) => {
      this.mapService.getFlights().then((donezo) => {

        donezo.data.forEach(flight => {
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
  controller: MapController,
  controllerAs: 'mapController'
}
