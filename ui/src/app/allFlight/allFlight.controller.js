/* @ngInject */
class AllFlightsController {
    
        constructor(globalService, $state) {
            this.globalService = globalService
            this.state = $state
        }

        searchPage = () => {
            this.state.go('search.map')
        }
    
    }
    
    export default AllFlightsController