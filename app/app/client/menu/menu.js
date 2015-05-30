var openMenu = function () {
	$('#menu').addClass('open');
}

var closeMenu = function () {
	$('#menu').removeClass('open');
}

var getUserSeat = function () {
	return Session.get('userSeat').value;
}

Template.menuItems.helpers({
	userSeat: getUserSeat
});

Template.menu.events({
	'click .hamburger': openMenu,
	'click .shade': closeMenu,
	'click a': closeMenu
});
