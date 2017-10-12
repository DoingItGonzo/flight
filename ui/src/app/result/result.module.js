import resultComponent from './result.component.js'
import ResultController from './result.controller.js'


export default
    angular
        .module('flight.result', ['ui.router'])
        .component('resultComponent', resultComponent)
        .controller('resultController', ResultController)
        .name