var bootstrapUser = function () {
	User.setSeat($('.seat-number').val());
	HTTP.post('http://qantas.apphb.com/api/user/register', {
		data: {
			seatNo: User.getSeat()
		}
	}, function (error, result) {
		console.log(result)
		var content = JSON.parse(result.content);
		if (result.statusCode === 500) {
			alert(content.ExceptionMessage);
		} else {
			User.setId(content.Id);
			Router.go('/shopfront');
		}
	});
}

Template.setup.events({
	'submit form': preventDefault,
  'click .button': bootstrapUser
});
