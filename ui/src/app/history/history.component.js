import templateUrl from './history.component.html'
import HistoryController from './history.controller.js'

export default {
    templateUrl,
    controller: HistoryController,
    controllerAs: 'historyController',
    bindings: {
        itineraries: '='
    }
  }