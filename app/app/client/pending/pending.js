var getPendingOrders = function () {
	return Session.get('pending');
}

var getOrderStatus = function (orderStatus) {
	if (orderStatus === 0) return 'Sent';
	if (orderStatus === 1) return 'Received';
}

Template.pending.helpers({
	pendingOrders: getPendingOrders,
	getStatus: getOrderStatus
});
