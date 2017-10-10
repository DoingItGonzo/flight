package com.cooksys.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cooksys.entity.Client;

public interface ClientRepository extends JpaRepository<Client, Long>{

}
