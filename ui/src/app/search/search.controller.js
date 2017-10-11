import SearchService from './search.service.js'

/* @ngInject */
class SearchController {

    constructor(searchService, $state) {
        this.searchService = searchService
        this.state = $state
    }

    // clientHistory = ()

}

export default SearchController