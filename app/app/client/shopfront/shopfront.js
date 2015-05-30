var alertTimeout;

var getItems = function () {
	return JSON.parse(Session.get('products').content);
}

var itemsExist = function () {
	if (!Session.get('products')) return false;
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

var buySelectedProduct = function (e) {
	if (!!alertTimeout) {
		Meteor.clearTimeout(alertTimeout);
		alertTimeout = null;
	}

	var selectedProduct = Session.get('selectedProduct');
	var isGreen = $(e.target).data('green');
	Shop.buyProduct(selectedProduct.Id, isGreen);

	$('#buy-result-alert').addClass('show');
	alertTimeout = Meteor.setTimeout(function () {
		$('#buy-result-alert').removeClass('show');
	}, 3000);
}

var selectProduct = function (e) {
	if ($(e.target).is('button')) return;
	var product = $(e.target).hasClass('.item') ? $(e.target) : $(e.target).closest('.item');

	var productId = product.data('id');
	var productName = product.data('name');
	var productDescription = product.data('description');
	var productPriceInCents = product.data('price');
	var productCarbonNeutralPriceInCents = product.data('carbonprice');
	console.log(productName);

	Session.set('selectedProduct', {
		Id: productId,
		Name: productName,
		Description: productDescription,
		PriceInCents: productPriceInCents,
		CarbonNeutralPriceInCents: productCarbonNeutralPriceInCents
	});
}

var getRemainingDollars = function () {
	return Session.get('dollarsRemaining');
}

var offsetAchieved = function () {
	return getRemainingDollars() === 0;
}

var getPercentageDonated = function () {
	return Session.get('percentageDonated') === 0 ? 1 : Session.get('percentageDonated');
}

var dollarify = function (cents) {
	return (cents/100).toFixed(2);
}

var getSelectedProduct = function () {
	return [Session.get('selectedProduct')];
};

var clearSelectedProduct = function () {
	Session.set('selectedProduct', null);
};

var selectedProductExists = function () {
	return !!Session.get('selectedProduct') ? 'show' : '';
};

Template.shopfront.helpers({
  items: getItems,
  itemsExist: itemsExist,
  remainingDollars: getRemainingDollars,
  percentageDonated: getPercentageDonated,
  dollarify: dollarify,
  showIfSelectedProductExists: selectedProductExists,
  selectedProduct: getSelectedProduct,
  offsetAchieved: offsetAchieved
});

Template.shopfront.events({
	'submit form': preventDefault,
	'click .item': selectProduct,
	'click .prices button': buyProduct,
	'click #product-info-box .shade': clearSelectedProduct,
	'click .buy-buttons button': function (e) {
		buySelectedProduct(e);
		clearSelectedProduct();
	}
});
