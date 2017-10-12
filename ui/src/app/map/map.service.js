/* @ngInject */
class MapService {

  constructor($http, apiUrl) {
    this.$http = $http
    this.apiUrl = apiUrl
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
