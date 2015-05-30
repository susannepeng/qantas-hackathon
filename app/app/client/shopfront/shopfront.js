var alertTimeout;

var getItems = function () {
	return JSON.parse(Session.get('products').content);
}

var itemsExist = function () {
	return JSON.parse(Session.get('products').content).length > 0;
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

var dollarify = function (cents) {
	return (cents/100).toFixed(2);
}

Template.shopfront.helpers({
  items: getItems,
  itemsExist: itemsExist,
  remainingDollars: getRemainingDollars,
  dollarify: dollarify
});

Template.shopfront.events({
	'submit form': preventDefault,
	'click button': buyProduct
});
