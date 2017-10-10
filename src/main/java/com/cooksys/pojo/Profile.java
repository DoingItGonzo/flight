package com.cooksys.pojo;

import javax.persistence.Embeddable;

@Embeddable
public class Profile {
	
	private String firstName;
	
	private String lastName;
	
	private String email;

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	

}
