var bootstrapUser = function () {
	Router.go('/shopfront');
	User.setSeat($('.seat-number').val());
}

Template.setup.events({
	'submit form': preventDefault,
  'click .button': bootstrapUser
});
