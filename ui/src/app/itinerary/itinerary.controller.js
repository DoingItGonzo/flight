import SearchService from './../search/search.service.js'
import MapService from './../map/map.service.js'
import GlobalService from './../globalServices.js'

/* @ngInject */
class ItineraryController {

    constructor(searchService, mapService, globalService, $state) {
        this.globalService = globalService
        this.state = $state
        this.searchService = searchService
        this.mapService = mapService 

    }

    viewItinerary = () => {
        this.globalService.newItinerary(this.boundItineraries)
        this.state.go('search.itineraryMap')
    }

    book = () => {
        this.searchService.bookItinerary(this.globalService.credentials.username, this.boundItineraries).then((done) => {
            console.log(done.data)
        })
    }
    returnToSearch = () => {
        this.state.go('search.map')
    }
}

export default ItineraryController