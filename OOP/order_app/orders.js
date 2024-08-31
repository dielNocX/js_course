// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder


function addOrder(customerName, items) {
  const orderId = generateUniqueId();
  let totalPrice = 0;
  const newOrderItems = [];

  for (let i = 0; i < items.length; i++) {
    totalPrice += items[i].price;
    newOrderItems.push(items[i]);
  }
  // console.log(newOrderItems)
  const newOrder = {
    id: orderId,
    customerName,
    items: newOrderItems,
    totalPrice,
    status: 'Menunggu'
  };
  orders.push(newOrder);
  return newOrder;
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const orderIndex = orders.findIndex(order => order.id === orderId);
  if (orderIndex !== -1) {
    orders[orderIndex].status = status;
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders.filter(order => order.status === 'Selesai').reduce((acc, order) => acc + order.totalPrice, 0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  orders = orders.filter(order => order.id !== id);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
