angular.module('services', [])
.factory('ProductService', function($resource) {
	var data = $resource('/products/:product', {product: '@product'}, {
		update: {
			method: 'PUT'
		}
	});
	
	return data;
});