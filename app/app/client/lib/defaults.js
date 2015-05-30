Template.registerHelper('Defaults', function() {
	return {
		appName: 'FlightMate',
		setup: {
			title: 'Welcome aboard',
			subtitle: {
				withConnection: 'Log in with your QANTAS account',
				noConnection: 'Tell us your seat number'
			},
			submitText: 'OK'
		},
		shopfront: {
			title: 'Shop'
		},
		pending: {
			title: 'My Orders'
		}
	};
});

preventDefault = function (e) {
	e.preventDefault();
}