package com.cooksys.entity;

import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.cooksys.pojo.Credentials;
import com.cooksys.pojo.Profile;

@Entity
public class Client {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	private Credentials credentials;
	
	private Profile profile;
	
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

	public Profile getProfile() {
		return profile;
	}

	public ArrayList<Itinerary> getItineraries() {
		return itineraries;
	}

	public void setId(long id) {
		this.id = id;
	}

	public void setProfile(Profile profile) {
		this.profile = profile;
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
