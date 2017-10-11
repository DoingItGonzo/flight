import mapComponent from './map.component.js'
import mapService from './map.service'

export default
  angular
    .module('flight.map', ['ngMap'])
    .component('flightMap', mapComponent)
    .service('mapService', mapService)
    .name
