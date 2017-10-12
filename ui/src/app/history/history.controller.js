/* @ngInject */
class HistoryController {
    
        constructor(globalService, $state) {
            this.globalService = globalService
            this.state = $state

            if (!(this.globalService.loggedIn))
                this.state.go('signIn.map')
        }
    
    }
    
    export default HistoryController