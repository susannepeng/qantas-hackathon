Shop = {};

Shop.pendingOrders = [];
Shop.fetchGreenStatusInitialised = false;

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
	HTTP.post('http://qantas.apphb.com/api/user/buy', {
		data: {
			UserId: Session.get('userId'),
			ProductId: productId,
			IsCarbonNeutral: isGreen
		}
	}, function (error, result) {
		console.log(result);
	});
}

Shop.fetchPending = function () {
	if (!User.id) return;
	HTTP.get('http://qantas.apphb.com/api/user/PendingOrders/' + User.id, function(err, res){
		Session.set('pending', res);
	});
}

Shop.getPending = function () {
	return this.pendingOrders;
}

Shop.fetchGreenStatus = function () {
	var self = this;
	if (!self.fetchGreenStatusInitialised) {
		self.fetchGreenStatusInitialised = true;
		Meteor.setInterval(self.loopFetchGreenStatus, 5000);
	}
}

Shop.loopFetchGreenStatus = function () {
	console.log('boom');
	HTTP.get('http://qantas.apphb.com/api/flight/progress', function(error, result) {
		Session.set('dollarsRemaining', JSON.parse(result.content).DollarsRemaining);
		Session.set('percentageDonated', JSON.parse(result.content).PercentageDonated);
	});
}
