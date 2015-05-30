var getPendingOrders = function () {
	return Shop.getPending();
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
});
