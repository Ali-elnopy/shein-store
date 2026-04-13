// src/components/home/NewsletterSection.jsx
import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="w-full bg-[#f5f5f3] py-24 px-6">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Join The Curator Inner Circle
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-gray-500 leading-relaxed max-w-md">
          Early access to drops, exclusive editorial content, and member-only pricing.
          Curated for the few, delivered to you.
        </p>

        {!submitted ? (
          <>
            {/* Input + Button */}
            <div className="flex w-full max-w-md mt-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 text-sm border border-gray-300 border-r-0
                  outline-none bg-white placeholder:text-gray-400
                  focus:border-black transition-colors"
              />
              <button
                onClick={handleSubmit}
                className="px-6 py-3 bg-black text-white text-xs tracking-widest
                  uppercase hover:bg-gray-800 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>

            {/* Disclaimer */}
            <p className="text-[11px] text-gray-400 tracking-wide">
              By signing up you agree to our{" "}
              <span className="underline cursor-pointer hover:text-black transition-colors">
                Privacy Policy
              </span>{" "}
              and{" "}
              <span className="underline cursor-pointer hover:text-black transition-colors">
                Terms of Service
              </span>
              .
            </p>
          </>
        ) : (
          /* Success State */
          <div className="flex flex-col items-center gap-3 py-4">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-sm font-medium tracking-wide">You're in the circle.</p>
            <p className="text-xs text-gray-400">
              Watch your inbox for exclusive drops.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default NewsletterSection;