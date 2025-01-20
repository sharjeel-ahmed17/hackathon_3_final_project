import CartComponent from "@/components/cart/CartComponent/CartComponent"
import OrderSummary from "@/components/cart/orderSummary/OrderSummary"


const Cart = () => {
  return (
    <div className="flex">
      <CartComponent/>
      <OrderSummary />
    </div>

  )
}

export default Cart