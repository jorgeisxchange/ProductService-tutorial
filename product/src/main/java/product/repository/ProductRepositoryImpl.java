package product.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import product.model.Product;

public class ProductRepositoryImpl implements ProductRepositoryCustom {

	@Autowired
	private MongoTemplate mongoTemplate;
	
	@Override
	public List<Product> findByNameLike(String name) {
		
		Criteria criteria = 
				Criteria.where("name").regex(name);
		
		
		return mongoTemplate.find(Query.query(criteria), Product.class);
	}

	@Override
	public List<Product> findByInventoryIdLike(String inventoryId) {
		Criteria criteria = 
				Criteria.where("inventoryId").regex(inventoryId);
		
		return mongoTemplate.find(Query.query(criteria), Product.class);
	}

}
