package com.cooksys.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cooksys.entity.Itinerary;

public interface ItineraryRepository extends JpaRepository<Itinerary, Long> {
	
	List<Itinerary> findAll();

	Itinerary findById(long id);
}
