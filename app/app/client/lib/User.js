User = {};

User.id = null;
User.seat = null;

User.setId = function (id) {
	this.id = id;
}

User.getId = function (id) {
	return this.id;
}

User.getSeat = function () {
	return this.seat;
}

User.setSeat = function (seat) {
	this.seat = seat;
}
