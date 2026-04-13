import useCart from "../../context/useCart";
import CartItem from "./CartItem";

const CartItems = () => {
  const { cartItems } = useCart();

  return (
    <div>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartItems;