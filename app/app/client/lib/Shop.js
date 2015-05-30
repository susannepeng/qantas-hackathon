Shop = {};

Shop.pendingOrders = [];

//

Shop.fetchProducts = function () {
	var self = this;
	HTTP.get('http://qantas.apphb.com/api/product/all', function(error, result) {
		Session.set('products', result);

		// Build products Id map
		var productIdMap = {};
		for (var i = 0, j = Session.get('products').length; i < j; i++) {
			var product = this.products[i];
			productIdMap[product.Id] = product;
		}
		Session.set('productIdMap', productIdMap);
	});
}

Shop.buyProduct = function (productId, isGreen) {
	console.log(productId, isGreen);
	var self = this;
	HTTP.post('http://qantas.apphb.com/api/user/buy?UserId=' +
							User.id + "&ProductId=" + productId +
							"&IsCarbonNeutral=" + isGreenm function(err, res) {
								console.log('success');
							} );
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
	var self = this;
	HTTP.get('http://qantas.apphb.com/api/flight/progress', function(error, result) {
		Session.set('remainingCents', result.DollarsRemaining);
		Session.set('percentageDonated', result.PercentageDonated);
	});
}
