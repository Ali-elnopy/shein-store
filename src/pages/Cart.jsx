import { Link } from "react-router-dom";
import useCart from "../context/useCart";
import CartHeader   from "../components/cart/CartHeader";
import CartItems    from "../components/cart/CartItems";
import OrderSummary from "../components/cart/OrderSummary";
import CartItem from "../components/cart/CartItem";

const Cart = () => {
  const { cartItems } = useCart();
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">

      {/* Header */}
      <CartHeader itemCount={cartItems.length} />

      {cartItems.length === 0 ? (

        /* Empty State */
        <div className="flex flex-col items-center justify-center py-32 gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-200"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
              d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <p className="text-sm text-gray-400 tracking-widest uppercase">
            Your selection is empty
          </p>
          <Link to="/shop"
            className="mt-2 px-6 py-3 bg-black text-white text-xs
              tracking-widest uppercase hover:bg-gray-800 transition-colors">
            Continue Shopping
          </Link>
        </div>

      ) : (

        /* Cart Layout */
        <div className="flex flex-col lg:flex-row gap-10 mt-10">

          {/* Left — Items */}
          <div className="flex-1">

            <CartItems />
            <Link to="/shop"
              className="inline-flex items-center gap-2 mt-8 text-xs tracking-widest
                uppercase text-blue-600 hover:text-blue-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M15 19l-7-7 7-7" />
              </svg>
              Continue Shopping
            </Link>
          </div>

          {/* Right — Order Summary */}
          <div className="lg:w-[360px] flex-shrink-0">
            <OrderSummary />
          </div>

        </div>
      )}
    </div>
  )
}

export default Cart