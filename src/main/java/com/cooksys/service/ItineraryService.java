package com.cooksys.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.cooksys.entity.Client;
import com.cooksys.entity.Itinerary;
import com.cooksys.pojo.Flight;
import com.cooksys.repository.ItineraryRepository;

@Service
public class ItineraryService {

	private ClientService clientService;
	private ItineraryRepository itineraryRepository;
	private FlightService flightService;

	ItineraryService(ClientService clientService, ItineraryRepository itineraryRepository,
			FlightService flightService) {
		this.clientService = clientService;
		this.itineraryRepository = itineraryRepository;
		this.flightService = flightService;
	}

	public List<Itinerary> getAllClientItineraries(String username) {
		Client client = clientService.getClient(username);
		return client.getItineraries();
	}

	public Itinerary bookItinerary(String username, Itinerary itinerary) {
		List<Itinerary> itineraryList = clientService.getClient(username).getItineraries();
		itineraryList.add(itinerary);
		clientService.getClient(username).setItineraries(itineraryList);
		return itineraryRepository.save(itinerary);
	}

	public Itinerary getOneItinerary(long id) {
		return itineraryRepository.findById(id);
	}


	

	public List<Itinerary> searchForItinerary(String departure, String destination) {
		List<Itinerary> possibleRoutes = new ArrayList<Itinerary>();
		ArrayList<Flight> departureFlights = new ArrayList<Flight>();
		ArrayList<Flight> destinationFlights = new ArrayList<Flight>();

		for (Flight flight : flightService.getDailyFlightList()) {

			if (flight.getOrigin().equalsIgnoreCase(departure) && flight.getDestination().equalsIgnoreCase(destination))
				possibleRoutes.add(itineraryFactory(flight));

			else {
				if (flight.getOrigin().equalsIgnoreCase(departure))
					departureFlights.add(flight);
				if (flight.getDestination().equalsIgnoreCase(destination))
					destinationFlights.add(flight);
			}
		}
		for (Itinerary itinerary : departureConnection(departureFlights, destinationFlights)) {

			if (!(itinerary == null))
				possibleRoutes.add(itinerary);
		}
		return possibleRoutes;
	}

	
	public List<Itinerary> departureConnection(List<Flight> departureMatch, List<Flight> destinationMatch) {
		ArrayList<Itinerary> allPossibleRoutes = new ArrayList<>();
		for (Flight origin : departureMatch) {

			for (Flight destination : destinationMatch) {

				if (origin.getDestination().equalsIgnoreCase(destination.getOrigin()))
					allPossibleRoutes.add(itineraryFactory(origin, destination));

				for (Flight flights : flightService.getDailyFlightList()) {

					if (flights.getOrigin().equalsIgnoreCase(origin.getDestination())
						&& flights.getDestination().equalsIgnoreCase(destination.getOrigin())) {
							allPossibleRoutes.add(itineraryFactory(origin, flights, destination));
					}
				}
			}
		}
		return allPossibleRoutes;
	}

	
	public Itinerary itineraryFactory(Flight... flights) {
		Itinerary itinerary = new Itinerary();
		List<Flight> listForItinerary = new ArrayList<Flight>();
		long flightTime = 0;
		long layover = 0;
		long previousFlightArrivalTime = 0;
		
		for (Flight flight : flights) {

			if (flight.getOffset() + flight.getFlightTime() < previousFlightArrivalTime)
				return null;
			
			else {
				if (previousFlightArrivalTime > 0)
					layover += flight.getOffset() - previousFlightArrivalTime;
				
				flightTime += flight.getFlightTime();
				listForItinerary.add(flight);
				previousFlightArrivalTime = flight.getOffset() + flight.getFlightTime();
			}
		}
		itinerary.setFlights(listForItinerary);
		itinerary.setLayoverTime(layover);
		itinerary.setTotalFlightTime(flightTime);
		return itinerary;
	}

}
