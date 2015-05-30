Shop = {};

Shop.products = [];

Shop.getProducts = function () {
	return this.products;
}

Shop.setProducts = function (products) {
	this.products = products;

	// Mock
	this.products = [
		{
			Id: 0,
			Name: 'Coke',
			Description: 'So tasty',
			ImageUrl: 'asdlkj',
			Price: 480,
			CarbonNeutralPrice: 500,
			CategoryId: 0,
			Stock: 79
		},
		{
			Id: 1,
			Name: 'Juice',
			Description: 'Hand picked so nice and fresh',
			ImageUrl: 'asdlkj',
			Price: 375,
			CarbonNeutralPrice: 500,
			CategoryId: 0,
			Stock: 12
		},
		{
			Id: 2,
			Name: 'Wine',
			Description: 'Glass of wine a day keeps doctor away',
			ImageUrl: 'asdlkj',
			Price: 845,
			CarbonNeutralPrice: 900,
			CategoryId: 0,
			Stock: 42
		}
	];
}

Shop.buyProduct = function (productId, isGreen) {
	console.log(productId, isGreen);
}