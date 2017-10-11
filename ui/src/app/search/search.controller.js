import SearchService from './search.service.js'

/* @ngInject */
class SearchController {

    constructor(searchService, $state) {
        this.searchService = searchService
        this.state = $state

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
        console.log(this.departure)
        console.log(this.destination)
        this.searchService.searchForItinerary(this.departure, this.destination).then((done) => {
            console.log(done.data)
            this.itineraries = done.data
        })
    }

    // clientHistory = ()

}

export default SearchController