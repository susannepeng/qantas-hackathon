var getItems = function () {
	return Shop.getProducts();
}

var itemsExist = function () {
	return Shop.getProducts().length > 0;
}

Template.shopfront.helpers({
  items: getItems,
  itemsExist: itemsExist
});

Template.shopfront.events({
});
