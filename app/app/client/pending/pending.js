var getPendingOrders = function () {
	return Session.get('pending');
}

var getOrderStatus = function (orderStatus) {
	if (orderStatus === 0) return 'Sent';
	if (orderStatus === 1) return 'Received';
}

var noPendingOrders = function () {
	return !Session.get('pending') || Session.get('pending').length === 0;
}

Template.pending.helpers({
	pendingOrders: getPendingOrders,
	noPendingOrders: noPendingOrders,
	getStatus: getOrderStatus
});
