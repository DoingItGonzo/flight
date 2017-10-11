import itineraryMapComponent from './itineraryMap.component.js'
import mapService from './map.service'
import GlobalService from './../GlobalServices.js'

export default
  angular
    .module('flight.itineraryMap', ['ngMap'])
    .component('itineraryMap', itineraryMapComponent)
    .service('mapService', mapService)
    .service('globalService', GlobalService)
    .name
