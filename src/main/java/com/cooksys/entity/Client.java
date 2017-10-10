package com.cooksys.entity;

import java.util.ArrayList;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.cooksys.pojo.Credentials;

@Entity
public class Client {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	private Credentials credentials;
	
	private ArrayList<Itinerary> itineraries;
	
	

	public Credentials getCredentials() {
		return credentials;
	}

	public void setCredentials(Credentials credentials) {
		this.credentials = credentials;
	}

	public long getId() {
		return id;
	}

	public ArrayList<Itinerary> getItineraries() {
		return itineraries;
	}

	public void setId(long id) {
		this.id = id;
	}


	public void setItineraries(ArrayList<Itinerary> itineraries) {
		this.itineraries = itineraries;
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
		Client other = (Client) obj;
		if (id != other.id)
			return false;
		return true;
	}
	

}
