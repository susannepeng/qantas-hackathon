var alertTimeout;

var getItems = function () {
	return Shop.getProducts();
}

var itemsExist = function () {
	return Shop.getProducts().length > 0;
}

var buyProduct = function (e) {
	if (!!alertTimeout) {
		Meteor.clearTimeout(alertTimeout);
		alertTimeout = null;
	}

	var productId = $(e.target).data('id');
	var isGreen = $(e.target).data('green');
	Shop.buyProduct(productId, isGreen);

	$('#buy-result-alert').addClass('show');
	alertTimeout = Meteor.setTimeout(function () {
		$('#buy-result-alert').removeClass('show');
	}, 3000);
}

var getRemainingDollars = function () {
	return Shop.getRemainingDollars();
}

var getPercentageCompleted = function () {
	return Shop.getPercentageCompleted();
}

Template.shopfront.helpers({
  items: getItems,
  itemsExist: itemsExist,
  remainingDollars: getRemainingDollars
});

Template.shopfront.events({
	'submit form': preventDefault,
	'click button': buyProduct
});
