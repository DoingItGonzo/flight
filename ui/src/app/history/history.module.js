import HistoryController from './history.controller'
import historyComponent from './history.component.js'
import GlobalService from './../globalServices.js'

export default
angular
    .module('flight.history', ['ui.router'])
    .component('historyComponent', historyComponent)
    .controller('historyController', HistoryController)
    .service('globalService', GlobalService)
    .name