const CartHeader = ({ itemCount }) => {
  return (
    <div className="border-b border-[var(--color-border)] pb-6">

      <h1
        style={{
          fontFamily: "var(--font-headline)",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: "var(--font-weight-extrabold)",
          letterSpacing: "var(--tracking-tight)",
          color: "var(--color-text-primary)",
          lineHeight: "var(--line-height-tight)",
        }}
      >
        Your Selection
      </h1>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--font-size-sm)",
          color: "var(--color-text-secondary)",
          marginTop: "6px",
        }}
      >
        {itemCount === 0
          ? "Your cart is empty."
          : `Items are reserved for 60 minutes.`}
      </p>

    </div>
  );
};

export default CartHeader;