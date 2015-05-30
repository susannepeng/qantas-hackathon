var openMenu = function () {
	$('#menu').addClass('open');
}

var closeMenu = function () {
	$('#menu').removeClass('open');
}

Template.menu.events({
	'click .hamburger': openMenu,
	'click .shade': closeMenu
});
