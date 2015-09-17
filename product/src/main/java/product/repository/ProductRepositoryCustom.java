package product.repository;

import java.util.List;

import product.model.Product;

public interface ProductRepositoryCustom {
	
	List<Product> findByNameLike(String name);
	List<Product> findByInventoryIdLike(String inventoryId);
}
