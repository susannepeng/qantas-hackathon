var bootstrapUser = function () {
	User.setSeat($('.seat-number').val());
	Shop.setProducts();
	Router.go('/shopfront');
}

Template.setup.events({
	'submit form': preventDefault,
  'click .button': bootstrapUser
});
