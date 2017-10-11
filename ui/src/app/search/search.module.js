import SearchService from './search.service.js'
import SearchController from './search.controller.js'
import searchComponent from './search.component.js'


export default
    angular
        .module('flight.search', ['ui.router'])
        .service('searchService', SearchService)
        .controller('searchController', SearchController)
        .component('searchComponent', searchComponent)
        .name