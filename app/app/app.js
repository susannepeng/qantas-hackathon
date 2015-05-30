if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

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
	Shop.fetchGreenStatus();
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
