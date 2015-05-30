var getPendingOrders = function () {
	Shop.fetchPending();
	console.log('victory');
	// console.log(Session.get('pending')[0]);
	return Session.get('pending')
}

var getOrderStatus = function (orderStatus) {
	if (orderStatus === 0) return 'Sent';
	if (orderStatus === 1) return 'Received';
}

Template.pending.helpers({
	pendingOrders: getPendingOrders,
	getStatus: getOrderStatus
});

Template.pending.events({
	'load': getPendingOrders
});
