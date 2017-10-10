package com.cooksys.entity;

import java.util.ArrayList;

import com.cooksys.pojo.Flight; 

public class Itinerary {
	
	private Integer totalFlightTime;
	
	private Integer layoverTime;
	
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
