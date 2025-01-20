import CartComponent from "@/components/cart/CartComponent/CartComponent"
import OrderSummary from "@/components/cart/orderSummary/OrderSummary"
import BreadCrumbComponent from "./BreadCrumbCOmponent"


const Cart = () => {
  return (
    <div>
      <BreadCrumbComponent />
    <div className="flex">

      <CartComponent/>
      <OrderSummary />
    </div>
      
    </div>

  )
}

export default Cart