package br.com.imaginativo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import br.com.imaginativo.model.Snippet;

public interface SnippetRepository extends MongoRepository<Snippet, String> {

}
