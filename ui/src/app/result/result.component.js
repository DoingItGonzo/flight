import templateUrl from './result.component.html'
import ResultController from './result.controller.js'

export default {
    templateUrl,
    controller: ResultController,
    controllerAs: 'resultController',
    bindings: {
        itineraries: '='
    }
  }