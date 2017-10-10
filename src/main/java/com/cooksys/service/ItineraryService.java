package com.cooksys.service;

import java.util.ArrayList;
import java.util.Comparator;
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

	public Itinerary bookItinerary(Itinerary itinerary) {
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
			if (flight.getOrigin().equals(departure) && flight.getDestination().equals(destination))
				possibleRoutes.add(singleFlightItinerary(flight));
			else {
				if (flight.getOrigin().equals(departure))
					departureFlights.add(flight);
				if (flight.getDestination().equals(destination))
					destinationFlights.add(flight);
			}
		}
		for (Itinerary itinerary: departureConnection(departureFlights, destinationFlights)) {
			if (!(itinerary == null))
				possibleRoutes.add(itinerary);
		}
		return possibleRoutes;
	}

	public List<Itinerary> departureConnection(List<Flight> departureMatch, List<Flight> destinationMatch) {
		ArrayList<Itinerary> allPossibleRoutes = new ArrayList<>();
		ArrayList<Flight> itinerary = new ArrayList<>();
		for (Flight origin : departureMatch) {
			for (Flight destination : destinationMatch) {
				if (origin.getDestination().equals(destination.getOrigin())) {
					
					itinerary.add(origin); itinerary.add(destination);
					allPossibleRoutes.add(itineraryFactory(itinerary));
					itinerary.clear();
				}
				for (Flight flights : flightService.getDailyFlightList()) {
					if (flights.getOrigin().equals(origin.getDestination())
							&& flights.getDestination().equals(destination.getOrigin())) {
						
						itinerary.add(origin); itinerary.add(destination); itinerary.add(flights);
						allPossibleRoutes.add(itineraryFactory(itinerary));
						itinerary.clear();
					}
				}
			}
		}
		return allPossibleRoutes;
	}

	public Itinerary singleFlightItinerary(Flight flight) {
		Itinerary itinerary = new Itinerary();
		itinerary.setTotalFlightTime(flight.getFlightTime());
		itinerary.setLayoverTime(0);
		itinerary.getFlights().add(flight);
		return itinerary;
	}


//	public Itinerary itineraryFactory(Flight... flights) {
	public Itinerary itineraryFactory(ArrayList<Flight> itineraryFlights) {
		Itinerary itinerary = new Itinerary();
		long itineraryFlightTime = 0;
		long layover = 0;
		long previousFlightArrivalTime = 0;
		itineraryFlights.sort(Comparator.comparing(Flight::getOffset));
		for (Flight flight : itineraryFlights) {
			if (flight.getOffset() + flight.getFlightTime() < previousFlightArrivalTime)
				return null;
			else {
				if (previousFlightArrivalTime > 0)
					layover += flight.getOffset() - previousFlightArrivalTime;
				itineraryFlightTime += flight.getFlightTime();
				itinerary.getFlights().add(flight);
				previousFlightArrivalTime = flight.getOffset() + flight.getFlightTime();
			}
		}
		itinerary.setLayoverTime(layover);
		itinerary.setTotalFlightTime(itineraryFlightTime);
		return itinerary;
	}

}
