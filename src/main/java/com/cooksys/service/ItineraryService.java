package com.cooksys.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.cooksys.entity.Client;
import com.cooksys.entity.Itinerary;
import com.cooksys.pojo.Cities;
import com.cooksys.pojo.Flight;
import com.cooksys.repository.ItineraryRepository;

@Service
public class ItineraryService {
	
	private ClientService clientService;
	private ItineraryRepository itineraryRepository;
	private Cities cities;
	private FlightService flightService;
	
	ItineraryService(ClientService clientService, ItineraryRepository itineraryRepository, FlightService flightService){
		this.clientService = clientService;
		this.itineraryRepository = itineraryRepository;
		this.flightService = flightService;
	}

	public List<Itinerary> getAllClientItineraries(String username) {
		Client client = clientService.getClient(username);
		return client.getItineraries();
	}

	public Itinerary bookItinerary(Itinerary itinerary) { 
		return itineraryRepository.save(itinerary);
	}

	public Itinerary getOneItinerary(long id) {
		return itineraryRepository.findById(id);
	}

	public List<Itinerary> searchForItinerary(String departure, String destination) {
		List<Itinerary> possibleRoutes = new ArrayList<Itinerary>();
		ArrayList<Flight> flights = flightService.getDailyFlightList();
		ArrayList<Flight> departureFlights = new ArrayList<Flight>();
		ArrayList<Flight> destinationFlights = new ArrayList<Flight>();
		ArrayList<Flight> flightsForFactory = new ArrayList<Flight>();
		for(Flight flight: flights) {
			if (flight.getOrigin().equals(departure) && flight.getDestination().equals(destination)) {
				flightsForFactory.add(flight);
			}
			if (flight.getOrigin().equals(departure)) {
				departureFlights.add(flight);
			}
			if (flight.getDestination().equals(destination)) {
				destinationFlights.add(flight);
			}
		}
		itineraryFactory(flightsForFactory);
		
//		possibleRoutes.add(itinerary);
		return null;
	}
	
	public Itinerary itineraryFactory(ArrayList<Flight> itineraryFlights){
		Itinerary itinerary = new Itinerary();
		long flightTime = 0;
//		long layover = 0;
		for (Flight flight: itineraryFlights) {
			flightTime += flight.getFlightTime();
			
			itinerary.getFlights().add(flight);
		}
		itinerary.setTotalFlightTime(flightTime);
		
		
		return null;
	}
	
	

}
