package com.cooksys.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.entity.Itinerary;
import com.cooksys.service.ItineraryService;

@RestController
@RequestMapping("itinerary")
@CrossOrigin
public class ItineraryController {
	
	private ItineraryService itineraryService;
	
	ItineraryController(ItineraryService itineraryService){
		this.itineraryService = itineraryService;
	}
	
	@GetMapping("history/{username}")
	public List<Itinerary> getAllClientItineraries(@PathVariable String username){
		return itineraryService.getAllClientItineraries(username);
	}
	
	@PostMapping("book")
	public Itinerary bookItinerary(@RequestBody Itinerary itinerary) {
		return itineraryService.bookItinerary(itinerary);
	}
	
	@GetMapping("{id}")
	public Itinerary getOneItinerary(@PathVariable long id){
		return itineraryService.getOneItinerary(id);
	}
	@PostMapping("search/{departure}")
	public List<Itinerary> searchForItinerary(@PathVariable String departure, @RequestBody String destination) {
		return itineraryService.searchForItinerary(departure, destination);
	}

}
