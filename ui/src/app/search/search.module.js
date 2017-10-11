import SearchService from './search.service.js'
import SearchController from './search.controller.js'
import searchComponent from './search.component.js'
import MapService from './../map/map.service.js'
import GlobalService from './../globalServices.js'


export default
    angular
        .module('flight.search', ['ui.router'])
        .service('searchService', SearchService)
        .service('mapService', MapService)
        .service('globalService', GlobalService)
        .controller('searchController', SearchController)
        .component('searchComponent', searchComponent)
        .name