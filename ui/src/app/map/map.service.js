/* @ngInject */
class MapService {
  constructor($http, apiUrl) {
    this.$http = $http
    this.apiUrl = apiUrl

    this.itineraryParam = {}
    this.itineraryParam.origin = {}
    this.itineraryParam.origin.city
    this.itineraryParam.destination = {}
    this.itineraryParam.destination.city
    this.itineraryParam.flightTime
    this.itineraryParam.offset
  }

  getMarkerByCityName(name) {
    return this.$http
      .get(`${this.apiUrl}/location/name`, { params: { name } })
      .then(result => result.data)
  }
  getFlights = () => {
    return this.$http.get(`${this.apiUrl}/flights`)
  }

  getLocations = () => {
    return this.$http.get(`${this.apiUrl}/location/all`)
  }

  newItinerary = (itinerary) => {
    this.itineraryParam = itinerary
  }

  storedItinerary = () => {
    return this.itineraryParam
  }

}



export default MapService
