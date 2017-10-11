package com.cooksys.pojo;

import javax.persistence.Embeddable;

@Embeddable
public class ItineraryFlights {
	
	private String origin;
	
	private String destination;

	public String getOrigin() {
		return origin;
	}

	public String getDestination() {
		return destination;
	}

	public void setOrigin(String origin) {
		this.origin = origin;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}
	
	

}
