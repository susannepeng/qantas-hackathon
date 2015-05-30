User = {};

User.setId = function (id) {
	Session.set('userId', id);
}

User.setSeat = function (seat) {
	Session.set('userSeat', {value: seat});
}
