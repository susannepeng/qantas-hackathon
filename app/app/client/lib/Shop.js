Shop = {};

Shop.products = [];
Shop.productIdMap = {};
Shop.pendingOrders = [];

Shop.remainingDollars = 0;
Shop.percentageCompleted = 0;

Shop.getProducts = function () {
	return this.products;
}

Shop.getProductsById = function (id) {
	return this.productIdMap[id];
}

Shop.fetchProducts = function (products) {
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

	// Build products Id map
	var productIdMap = {};
	for (var i = 0, j = this.products.length; i < j; i++) {
		var product = this.products[i];
		productIdMap[product.Id] = product;
	}
	this.productIdMap = productIdMap;
}

Shop.buyProduct = function (productId, isGreen) {
	console.log(productId, isGreen);
}

Shop.fetchPending = function () {
	this.pendingOrders = [
		{
			Id: 808,
			Name: 'Coke',
			OrderStatus: 1
		},
		{
			Id: 812,
			Name: 'Wine',
			OrderStatus: 0
		}
	];
}

Shop.getPending = function () {
	return this.pendingOrders;
}

Shop.fetchGreenStatus = function () {
	this.remainingDollars = 283;
	this.percentageCompleted = 37;
}

Shop.getRemainingDollars = function () {
	return this.remainingDollars;
}
Shop.getPercentageCompleted = function () {
	return this.percentageCompleted;
}