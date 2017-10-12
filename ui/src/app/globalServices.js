/* @ngInject */
class GlobalService {

    constructor($http, $state) {

        this.state = $state

        this.loggedIn = false

        this.credentials = {}
        this.credentials.username
        this.credentials.password

    }


    newItinerary = (itinerary) => {
        this.itineraryParam = itinerary
    }
    storedItinerary = () => {
        return this.itineraryParam
    }
    newSignIn = (credentials) => {
        this.loggedIn = true
        this.credentials = credentials
    }
    storedCredentials = () => {
        return this.credentails
    }
    logout = () => {
        this.loggedIn = false
        this.credentials = {}
        this.state.go('signIn.map')
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