import itineraryComponent from './itinerary.component.js'
import SearchService from './../search/search.service.js'
import ItineraryController from './itinerary.controller.js'
import GlobalService from './../globalServices.js'

export default
    angular
        .module('flight.itinerary', [])
        .component('itineraryComponent', itineraryComponent)
        .controller('itineraryController', ItineraryController)
        .service('searchService', SearchService)
        .service('globalService', GlobalService)
        .name