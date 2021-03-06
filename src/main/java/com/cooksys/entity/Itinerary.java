package com.cooksys.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.cooksys.pojo.Flight; 

@Entity
public class Itinerary {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	private long totalFlightTime;
	
	private long layoverTime;
	
	@ManyToOne
	private Client clientBooking;
	
//	@Embedded
//	private ArrayList<ItineraryFlights> flights = new ArrayList<ItineraryFlights>();
	
	@ElementCollection
	List<Flight> flights;

	public long getTotalFlightTime() {
		return totalFlightTime;
	}

	public long getLayoverTime() {
		return layoverTime;
	}

//	public ArrayList<ItineraryFlights> getFlights() {
//		return flights;
//	}
//
//	public void setFlights(ArrayList<ItineraryFlights> flights) {
//		this.flights = flights;
//	}
	public List<Flight> getFlights() {
		return flights;
	}

	public void setFlights(List<Flight> flights) {
		this.flights = flights;
	}

	public void setTotalFlightTime(long totalFlightTime) {
		this.totalFlightTime = totalFlightTime;
	}

	public void setLayoverTime(long layoverTime) {
		this.layoverTime = layoverTime;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Itinerary other = (Itinerary) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
	

}
