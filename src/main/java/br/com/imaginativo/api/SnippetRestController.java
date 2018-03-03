package br.com.imaginativo.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.imaginativo.model.Snippet;
import br.com.imaginativo.repository.SnippetRepository;

@RestController
@RequestMapping("/api/snippets")
public class SnippetRestController {

	@Autowired
	private SnippetRepository repo;
	
	@RequestMapping(method = RequestMethod.GET)
	public List<Snippet> getAll() {
		return repo.findAll();
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public Snippet create(@RequestBody Snippet snippet) {
		return repo.save(snippet);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value="{id}")
	public void delete(@PathVariable String id) {
		repo.delete(id);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value = "{id}")
	public Snippet update(@PathVariable String id, @RequestBody Snippet snippet) {
		Snippet update = repo.findOne(id);
		update.setNome(snippet.getNome());
		update.setAutor(snippet.getAutor());
		update.setLinguagem(snippet.getLinguagem());
		update.setDescricao(snippet.getDescricao());
		update.setCodigo(snippet.getCodigo());
		update.setCodigo(snippet.getCodigo());
		update.setTags(snippet.getTags());
		
		return repo.save(update);
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "{id}")
	public Snippet getSnippet(@PathVariable String id) {
		return repo.findOne(id);
	}
}
