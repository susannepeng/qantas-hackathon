var getItems = function () {
	return Shop.getProducts();
}

var itemsExist = function () {
	return Shop.getProducts().length > 0;
}

var buyProduct = function (e) {
	var productId = $(e.target).data('id');
	var isGreen = $(e.target).data('green');
	Shop.buyProduct(productId, isGreen);
}

Template.shopfront.helpers({
  items: getItems,
  itemsExist: itemsExist
});

Template.shopfront.events({
	'submit form': preventDefault,
	'click button': buyProduct
});
