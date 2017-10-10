package com.cooksys.service;

import org.springframework.stereotype.Service;

import com.cooksys.entity.Client;
import com.cooksys.pojo.Credentials;
import com.cooksys.repository.ClientRepository;


@Service
public class ClientService {
	
	ClientRepository clientRepository;
	
	public ClientService(ClientRepository clientRepository) {
		this.clientRepository = clientRepository;
	}

	public Client getClient(String username) {
		return (clientRepository.findByCredentialsUsername(username));
	}

	public Boolean login(String username, Credentials credentials) {
		Client client = clientRepository.findByCredentialsUsername(username);
		if (credentials != null && client != null && credentials.getPassword() != null
				&& credentials.getUsername() != null
				&& credentials.getUsername().equals(client.getCredentials().getUsername())
				&& credentials.getPassword().equals(client.getCredentials().getPassword())) {
			return true;
		} else {
			return false;
		}
	}

	public Client createAccount(Client client) {
		return clientRepository.save(client);
	}
	
}
