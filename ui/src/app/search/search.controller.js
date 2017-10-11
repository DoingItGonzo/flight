import SearchService from './search.service.js'
import MapService from './../map/map.service.js'
import GlobalService from './../globalServices.js'

/* @ngInject */
class SearchController {

    constructor(searchService, mapService, globalService, $state) {
        this.globalService = globalService
        this.state = $state
        if (!this.globalService.loggedIn) this.state.go('signIn.map')
        this.searchService = searchService
        this.mapService = mapService



        this.departure = "Departure"
        this.destination = "Destination"
        
        this.itineraries = []

    }

    memphisDeparture = () => this.departure = "Memphis"
    chattanoogaDeparture = () => this.departure = "Chattanooga"
    knoxvilleDeparture = () => this.departure = "Knoxville"
    nashvilleDeparture = () => this.departure = "Nashville"

    memphisDestination = () => this.destination = "Memphis"
    chattanoogaDestination = () => this.destination = "Chattanooga"
    knoxvilleDestination = () => this.destination = "Knoxville"
    nashvilleDestination = () => this.destination = "Nashville"

    searchForItinerary = () => {
        this.searchService.searchForItinerary(this.departure, this.destination).then((done) => {
            this.globalService.newItinerary(done.data[0])
            console.log(done.data)
            this.itineraries = done.data
        })
    }

    // clientHistory = ()

}

export default SearchController