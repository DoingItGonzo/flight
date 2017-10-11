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
    return this.$http.get()
  }

  getLocations = (departure, destination) => {
    return this.$http.get('http://localhost:8000/location/all')
  }

}



export default MapService
