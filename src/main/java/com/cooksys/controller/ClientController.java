package com.cooksys.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.entity.Client;
import com.cooksys.pojo.Credentials;
import com.cooksys.service.ClientService;

@RestController
@RequestMapping("client")
@CrossOrigin
public class ClientController {

	private ClientService clientService;
	
	ClientController(ClientService clientService) {
		this.clientService = clientService;
	}
	
	@GetMapping("account")
	public Client getClient(@RequestBody String username) {
		return clientService.getClient(username);
	}
	
	@PostMapping("login/{username}")
	public Boolean clientLogin(@PathVariable String username, @RequestBody Credentials credentials) {
		return clientService.login(username, credentials);
	}
	
	@PostMapping("create")
	public Client createAccount(@RequestBody Client client) {
		return clientService.createAccount(client);
	}
	
}
