import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../context/useCart";

const OrderSummary = () => {
  const { subtotal } = useCart();
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState("");

  const shipping = 0;
  const tax = parseFloat((subtotal * 0.08).toFixed(2));
  const total = subtotal + tax;

  return (
    <div className="order-summary bg-gray-100 p-4 rounded-md">

      {/* Title */}
      <h2 className="order-summary__title font-bold text-2xl">Order Summary</h2>

      {/* Rows */}
      <div className="order-row mt-10">
        <span >Subtotal</span>
        <span style={{ color: "var(--color-text-primary)", fontWeight: "var(--font-weight-medium)" }}>
          ${subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </span>
      </div>

      <div className="order-row mt-2">
        <span>Standard Shipping</span>
        <span style={{ color: "var(--color-success)", fontWeight: "var(--font-weight-semibold)" }}>
          {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
        </span>
      </div>

      <div className="order-row mt-2">
        <span>Estimated Tax</span>
        <span style={{ color: "var(--color-text-primary)", fontWeight: "var(--font-weight-medium)" }}>
          ${tax.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </span>
      </div>

      {/* Total */}
      <div className="order-row order-row--total mt-2 mb-10">
        <span>Total</span>
        <span className="order-row__total-value">
          ${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </span>
      </div>

      {/* Checkout Button */}
      <button
        className="btn  btn-primary btn-full bg-blue-500 text-white p-2 rounded-xl w-full mb-5 hover:bg-blue-600 transition-colors cursor-pointer"
        onClick={() => navigate("/checkout")}
      >
        Checkout →
      </button>

      {/* Payment Icons */}
      <div style={{
        marginTop: "var(--spacing-5)",
        paddingTop: "var(--spacing-5)",
        borderTop: "1px solid var(--color-border)",
      }}>
        <p style={{
          fontFamily: "var(--font-label)",
          fontSize: "var(--font-size-xs)",
          fontWeight: "var(--font-weight-semibold)",
          letterSpacing: "var(--tracking-widest)",
          textTransform: "uppercase",
          color: "var(--color-text-disabled)",
          textAlign: "center",
          marginBottom: "var(--spacing-3)",
        }}>
          We Accept
        </p>
        <div className="flex items-center justify-center gap-3">
          {/* Visa */}
          <div style={{
            width: 42, height: 28,
            background: "var(--color-neutral-100)",
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--color-border)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg viewBox="0 0 38 24" width="28" height="18">
              <rect width="38" height="24" rx="4" fill="#1A1F71" opacity="0"/>
              <text x="4" y="17" fontFamily="Arial" fontWeight="bold"
                fontSize="13" fill="#1A1F71">VISA</text>
            </svg>
          </div>
          {/* Mastercard */}
          <div style={{
            width: 42, height: 28,
            background: "var(--color-neutral-100)",
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--color-border)",
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: 3,
          }}>
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#EB001B" }} />
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#F79E1B", marginLeft: -6 }} />
          </div>
          {/* PayPal */}
          <div style={{
            width: 42, height: 28,
            background: "var(--color-neutral-100)",
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--color-border)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg viewBox="0 0 38 24" width="28" height="18">
              <text x="2" y="17" fontFamily="Arial" fontWeight="bold"
                fontSize="11" fill="#003087">Pay</text>
              <text x="17" y="17" fontFamily="Arial" fontWeight="bold"
                fontSize="11" fill="#009CDE">Pal</text>
            </svg>
          </div>
        </div>
      </div>

      {/* Promo Code */}
      <div style={{ marginTop: "var(--spacing-6)" }}>
        <p style={{
          fontFamily: "var(--font-label)",
          fontSize: "var(--font-size-xs)",
          fontWeight: "var(--font-weight-semibold)",
          letterSpacing: "var(--tracking-widest)",
          textTransform: "uppercase",
          color: "var(--color-text-primary)",
          marginBottom: "var(--spacing-3)",
        }}>
          Promo Code
        </p>
        <div className="flex gap-2">
          <input
            className="input p-2 bg-gray-50"
            type="text"
            placeholder="Enter code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
          <button
            className="btn btn-outlined btn-sm"
            style={{ whiteSpace: "nowrap" }}
            onClick={() => alert(`Code "${promoCode}" applied!`)}
          >
            Apply
          </button>
        </div>
      </div>

    </div>
  );
};

export default OrderSummary;