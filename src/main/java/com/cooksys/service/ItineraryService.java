package com.cooksys.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cooksys.entity.Client;
import com.cooksys.entity.Itinerary;
import com.cooksys.pojo.Cities;
import com.cooksys.repository.ItineraryRepository;

@Service
public class ItineraryService {
	
	private ClientService clientService;
	private ItineraryRepository itineraryRepository;
	private Cities cities;
	
	ItineraryService(ClientService clientService, ItineraryRepository itineraryRepository){
		this.clientService = clientService;
		this.itineraryRepository = itineraryRepository;
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
		return null;
	}
	
	

}
