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

    // viewItinerary = () => {
    //     this.globalService.newItinerary(this.itinerary)
    //     // this.state.go('result.map')
    // }

    // book = () => {
    //     this.searchService.bookItinerary(this.itinerary).then((done) => {
    //         this.boundItineraries.flights.forEach(flight => {

    //         })
    //     })
    // }
}

export default ItineraryController