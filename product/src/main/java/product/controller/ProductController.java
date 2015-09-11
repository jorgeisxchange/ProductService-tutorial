package product.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import product.model.Product;
import product.repository.ProductRepository;

@RestController
//@RequestMapping(value="/products")
public class ProductController {
	
/*
	private final AtomicLong counter = new AtomicLong();
	
	@RequestMapping(method=RequestMethod.GET)
	public Product findAll(@RequestParam(value="name", defaultValue="Test Product") String name, 
							@RequestParam(value="shortDscp", defaultValue="Short Description") String shortDscp, 
							@RequestParam(value="longDscp", defaultValue="Long Description") String longDscp, 
							@RequestParam(value="inventoryId", defaultValue="Inventory ID") String inventoryId) {
		return new Product(String.valueOf(counter.incrementAndGet()), name, shortDscp, longDscp, inventoryId);
	}
*/
	private final ProductRepository repository;
	
	@Autowired
	public ProductController(ProductRepository repository) {
		this.repository = repository;
	}	
	
	@RequestMapping(value="/", method = RequestMethod.GET)
    public Iterable findAll(@RequestParam(value = "page", defaultValue = "0", required = false) int page,
                                           @RequestParam(value = "count", defaultValue = "10", required = false) int count,
                                           @RequestParam(value = "order", defaultValue = "ASC", required = false) Sort.Direction direction,
                                           @RequestParam(value = "sort", defaultValue = "productName", required = false) String sortProperty) {
        Page result = repository.findAll(new PageRequest(page, count, new Sort(direction, sortProperty)));
        return result.getContent();
    }
	
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Product find(@PathVariable String id) {
    	Product detail = repository.findOne(id);
        if (detail == null) {
            throw new ProductNotFoundException();
        } else {
            return detail;
        }
    }
	
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public Product create(@RequestBody Product product) {
		return repository.save(product);
	}
	
	@ResponseStatus(HttpStatus.NOT_FOUND)
	static class ProductNotFoundException extends RuntimeException {
		
	}
	
/*	@RequestMapping(value="/create", method=RequestMethod.GET)
	public Product create(@RequestBody Product product) {
		return repository.save(product);
	}	*/
	
/*	@RequestMapping(value="/products/add", method=RequestMethod.GET)
	public Product create(@RequestParam(value="name", defaultValue="Test Product") String name, 
							@RequestParam(value="shortDscp", defaultValue="Short Description") String shortDscp, 
							@RequestParam(value="longDscp", defaultValue="Long Description") String longDscp, 
							@RequestParam(value="inventoryId", defaultValue="Inventory ID") String inventoryId) {
		return repository.save(new Product(name, shortDscp, longDscp, inventoryId));
	}
	*/
}
