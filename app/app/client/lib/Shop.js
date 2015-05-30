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
			ImageUrl: '',
			Price: 480,
			CarbonNeutralPrice: null,
			CategoryId: 0,
			Stock: 79
		},
		{
			Id: 1,
			Name: 'Juice',
			Description: 'Hand picked so nice and fresh',
			ImageUrl: '',
			Price: 375,
			CarbonNeutralPrice: 500,
			CategoryId: 0,
			Stock: 12
		},
		{
			Id: 2,
			Name: 'Wine',
			Description: 'Glass of wine a day keeps doctor away',
			ImageUrl: '',
			Price: 845,
			CarbonNeutralPrice: null,
			CategoryId: 0,
			Stock: 42
		}
	];
}