package product.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import product.model.Product;

public interface ProductRepository extends MongoRepository<Product, String> {
	
	public Product findByName(String name);
}
