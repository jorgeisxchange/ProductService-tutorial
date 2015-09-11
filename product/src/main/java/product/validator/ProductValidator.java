package product.validator;

import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import product.model.Product;

public class ProductValidator implements Validator {

	//private final InventoryService inventoryService;
	
	@Override
	public boolean supports(Class<?> clazz) {
		return Product.class.isAssignableFrom(clazz);
	}

	@Override
	public void validate(Object target, Errors errors) {
		//validations
	}

}
