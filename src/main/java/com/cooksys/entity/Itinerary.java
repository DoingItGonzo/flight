package com.cooksys.entity;

import java.util.ArrayList;

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
	
	private Integer totalFlightTime;
	
	private Integer layoverTime;
	
	@ManyToOne
	private Client clientBooking;
	
	private ArrayList<Flight> flights;

	public Integer getTotalFlightTime() {
		return totalFlightTime;
	}

	public Integer getLayoverTime() {
		return layoverTime;
	}

	public ArrayList<Flight> getFlights() {
		return flights;
	}

	public void setTotalFlightTime(Integer totalFlightTime) {
		this.totalFlightTime = totalFlightTime;
	}

	public void setLayoverTime(Integer layoverTime) {
		this.layoverTime = layoverTime;
	}

	public void setFlights(ArrayList<Flight> flights) {
		this.flights = flights;
	}
	
	

}
