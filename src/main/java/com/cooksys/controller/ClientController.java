package com.cooksys.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.service.ClientService;

@RestController
@RequestMapping("client")
@CrossOrigin
public class ClientController {

	private ClientService clientService;
	
	ClientController(ClientService clientService) {
		this.clientService = clientService;
	}
	
	@PostMapping("login")
	public boolean clientLogin(@RequestBody String credentials) {
		return true;
	}
	
}
