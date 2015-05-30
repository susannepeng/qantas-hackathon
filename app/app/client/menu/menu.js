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
	'click .hamburger-hitbox': openMenu,
	'touch .hamburger-hitbox': openMenu,
	'touchstart .hamburger-hitbox': openMenu,
	'click .shade': closeMenu,
	'touch .shade': closeMenu,
	'touchstart .shade': closeMenu,
	'click a': closeMenu
});
