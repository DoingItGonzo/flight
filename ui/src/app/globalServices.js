/* @ngInject */
class GlobalService {

    constructor($http) {

        this.loggedIn = false

        this.credentials = {}
        this.credentials.username
        this.credentials.password

        this.itineraryParam = {}
        this.itineraryParam.origin = {}
        this.itineraryParam.origin.city
        this.itineraryParam.destination = {}
        this.itineraryParam.destination.city
        this.itineraryParam.flightTime
        this.itineraryParam.offset

        

    }


    newItinerary = (itinerary) => {
        this.itineraryParam = itinerary
    }
    storedItinerary = () => {
        return this.itineraryParam
    }
    newSignIn = (credentials) => {
        this.credentials = credentials
    }
    storedCredentials = () => {
        return this.credentails
    }



    getAllPastItineraries = (username) => {
        return this.$http.get('http://localhost:8000/itinerary/history/' + username)
    }

    bookItinerary = (itinerary) => {
        return this.$http.post('http://localhost:8000/itinerary/book', itinerary)
    }

    searchForItinerary = (departure, destination) => {
        return this.$http.post('http://localhost:8000/itinerary/search/' + departure, destination)
    }
}

export default GlobalService