var bootstrapUser = function () {
	var seat = $('.seat-number').val();
	User.setSeat(seat);
	HTTP.post('http://qantas.apphb.com/api/user/register', {
		data: {
			seatNo: Session.get('userSeat').value
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
