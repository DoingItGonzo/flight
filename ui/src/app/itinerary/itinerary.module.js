import itineraryComponent from './itinerary.component.js'
import SearchController from './../search/search.controller.js'

export default
    angular
        .module('flight.itinerary', [])
        .component('itineraryComponent', itineraryComponent)
        .controller('searchController', SearchController)
        .name