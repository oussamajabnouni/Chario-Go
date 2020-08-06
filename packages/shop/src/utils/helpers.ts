export function customerDistance() {
  const calculateDistance = Math.floor(Math.random() * 1000) + 100;
  return calculateDistance;
}

function findByPrimary(array) {
  return array.filter(item => item.type === "primary")
}

export function createOrderInput(user, items, number_of_product, amount, subtotal, discount) {
  const deliveryTime = (findByPrimary(user.schedules))[0].time_slot;
  const contact_number = (findByPrimary(user.contacts))[0].number;
  const primaryAddress = (findByPrimary(user.addresses))[0]
  const deliveryAddress = `${primaryAddress.state} ${primaryAddress.city} ${primaryAddress.info}`
  const products = items.map(item => {
    return {
      title: item.title,
      description: item.description,
      price: item.price,
      quantity: item.quantity,
      total: item.price * item.quantity,
      type: item.type,
      image: item.gallery[0]?.url,
    }
  }
  )
  const newOrderInput = {
    status: 1,
    deliveryTime,
    products,
    deliveryFee: 0,
    contact_number,
    deliveryAddress,
    amount: parseInt(amount),
    subtotal: parseInt(subtotal),
    discount: parseInt(discount),
    number_of_product,
    userId: user.id,
    payment_method: "Cash on delivery"
  }
  return newOrderInput;
}
