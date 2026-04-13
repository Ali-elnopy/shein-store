import useCart from "../../context/useCart";

const badgeClass = {
  Tailored:      "product-card__badge--new",
  Trending:      "product-card__badge--trending",
  "New Arrival": "product-card__badge--new",
  Sale:          "product-card__badge--sale",
  Sustainability:"product-card__badge--sustain",
};

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-5 py-7 border-b border-[var(--color-border)]">

      {/* Image */}
      <div
        className="flex-shrink-0 rounded-[var(--radius-md)] overflow-hidden bg-[var(--color-neutral-100)]"
        style={{ width: 100, height: 120 }}
      >
        {item.img ? (
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              style={{ color: "var(--color-neutral-300)" }}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col justify-between">

        <div>
          {/* Badge */}
          {item.badge && (
            <span
              className={`product-card__badge ${badgeClass[item.badge] ?? "product-card__badge--new"}`}
            >
              {item.badge}
            </span>
          )}

          {/* Name */}
          <h3
            style={{
              fontFamily: "var(--font-headline)",
              fontSize: "var(--font-size-lg)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--color-text-primary)",
              letterSpacing: "var(--tracking-tight)",
              marginTop: "4px",
              marginBottom: "4px",
            }}
          >
            {item.name}
          </h3>

          {/* Meta */}
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--font-size-sm)",
            color: "var(--color-text-secondary)",
          }}>
            Color: {item.color} | Size: {item.size}
          </p>
        </div>

        {/* Bottom row: qty + remove */}
        <div className="flex items-center gap-4 mt-3">

          {/* Quantity Control */}
          <div className="qty-control">
            <button
              className="qty-btn"
              onClick={() => updateQuantity(item.id, -1)}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="qty-value">{item.quantity}</span>
            <button
              className="qty-btn"
              onClick={() => updateQuantity(item.id, +1)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          {/* Remove */}
          <button
            className="btn-remove"
            onClick={() => removeItem(item.id)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Remove
          </button>

        </div>
      </div>

      {/* Price */}
      <div
        style={{
          fontFamily: "var(--font-headline)",
          fontSize: "var(--font-size-lg)",
          fontWeight: "var(--font-weight-bold)",
          color: "var(--color-text-primary)",
          whiteSpace: "nowrap",
          paddingTop: "4px",
        }}
      >
        ${(item.price * item.quantity).toLocaleString("en-US", { minimumFractionDigits: 2 })}
      </div>

    </div>
  );
};

export default CartItem;