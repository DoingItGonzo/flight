/* @ngInject */
class SearchService {

    constructor($http) {
        this.$http = $http
    }

    getAllPastItineraries = (username) => {
        return this.$http.get('http://localhost:8000/itinerary/history/' + username)
    }

    bookItinerary = (username, itinerary) => {
        return this.$http.post('http://localhost:8000/itinerary/book/' + username, itinerary)
    }

    searchForItinerary = (departure, destination) => {
        return this.$http.post('http://localhost:8000/itinerary/search/' + departure, destination)
    }
}

export default SearchService