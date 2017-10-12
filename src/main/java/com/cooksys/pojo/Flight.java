package com.cooksys.pojo;

import javax.persistence.Embeddable;
import javax.persistence.Entity;

@Embeddable
public class Flight {
	
	//Name of city where flight originates
	private String origin;
	
	//Name of city where flight lands
	private String destination;
	
	//How many hours flight is in the air
	private long flightTime;
	
	//How many hours after the start of the day until the flight takes off
	private long theOffset;
	
	public Flight(){
		
	}
	
	public String getOrigin() {
		return origin;
	}
	public void setOrigin(String origin) {
		this.origin = origin;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public long getFlightTime() {
		return flightTime;
	}
	public void setFlightTime(long flightTime) {
		this.flightTime = flightTime;
	}
	public long getOffset() {
		return theOffset;
	}
	public void setOffset(long offset) {
		this.theOffset = offset;
	}
	public Flight(String origin, String destination, long flightTime, long theOffset) {
		super();
		this.origin = origin;
		this.destination = destination;
		this.flightTime = flightTime;
		this.theOffset = theOffset;
	}
	
	

}
