Router.route('/', function () {
  this.layout('MainLayout');
  this.render('setup');
	});
Router.route('/shopfront', function () {
	Shop.fetchProducts();
	Shop.fetchGreenStatus();
  this.layout('MainLayout');
	this.render('shopfront');
	this.render('baseMenu', {to: 'menu'});
});
Router.route('/shopfront/:id', function () {
	Shop.fetchProducts();
  this.layout('MainLayout');
	this.render('shopfront');
	this.render('baseMenu', {to: 'menu'});
});
Router.route('/pending', function () {
	Shop.fetchPending();
  this.layout('MainLayout');
	this.render('pending');
	this.render('nestedMenu', {to: 'menu'});
});

Router.onBeforeAction(function () {
	if (!Session.get('userSeat')) Router.go('/');
	this.next();
});