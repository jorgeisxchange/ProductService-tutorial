package product.model;

import org.springframework.data.annotation.Id;

public class Product {
	
	@Id
	private String id;
	
	private String name;
	private String shortDscp;
	private String longDscp;
	private String inventoryId;
	
	public Product() {
		
	}
	
	public Product(String name, String shortDscp, String longDscp, String inventoryId) {
		this.name = name;
		this.shortDscp = shortDscp;
		this.longDscp = longDscp;
		this.inventoryId = inventoryId;
	}

	public Product(String id, String name, String shortDscp, String longDscp, String inventoryId) {
		this.id = id;
		this.name = name;
		this.shortDscp = shortDscp;
		this.longDscp = longDscp;
		this.inventoryId = inventoryId;
	}



	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getShortDscp() {
		return shortDscp;
	}

	public void setShortDscp(String shortDscp) {
		this.shortDscp = shortDscp;
	}

	public String getLongDscp() {
		return longDscp;
	}

	public void setLongDscp(String longDscp) {
		this.longDscp = longDscp;
	}

	public String getInventoryId() {
		return inventoryId;
	}

	public void setInventoryId(String inventoryId) {
		this.inventoryId = inventoryId;
	}

	@Override
	public String toString() {
		return String.format(
                "Product[id=%s, name='%s', shortDscp='%s', longDscp='%s', inventoryId='%s']",
                id, name, shortDscp, longDscp, inventoryId);
	}
	
	
}
