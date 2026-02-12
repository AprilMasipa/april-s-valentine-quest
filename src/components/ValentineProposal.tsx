import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "@/assets/valentine-hero.jpg";

const ValentineProposal = () => {
  const [yesPressed, setYesPressed] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [noVisible, setNoVisible] = useState(true);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const moveNoButton = useCallback(() => {
    const x = (Math.random() - 0.5) * 250;
    const y = (Math.random() - 0.5) * 300;
    setNoPosition({ x, y });
  }, []);

  const handleYes = async () => {
    setYesPressed(true);
    setSending(true);
    try {
      await fetch("https://formsubmit.co/ajax/katlimasipa@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "💕 April Said YES! She'll be your Valentine! 💕",
          message: "April Mashaba said YES to being your Valentine! 🎉❤️",
          _template: "box",
        }),
      });
      setSent(true);
    } catch {
      setSent(true); // still show celebration
    }
    setSending(false);
  };

  return (
    <div ref={containerRef} className="relative min-h-screen flex flex-col items-center px-4 py-8 overflow-hidden">
      {/* Gold border frame */}
      <div className="absolute inset-2 border border-secondary/30 rounded-xl pointer-events-none z-10" />

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mt-8 mb-6 relative"
      >
        <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-secondary/50 shadow-2xl animate-pulse-glow">
          <img src={heroImage} alt="Valentine roses" className="w-full h-full object-cover" />
        </div>
        {/* Sparkles */}
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="absolute animate-sparkle text-secondary"
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${5 + Math.random() * 90}%`,
              animationDelay: `${i * 0.4}s`,
              fontSize: "14px",
            }}
          >
            ✨
          </span>
        ))}
      </motion.div>

      {/* Main text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center z-20 max-w-sm"
      >
        <p className="text-secondary text-lg tracking-widest uppercase mb-2">Dear</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-2 leading-tight">
          April Mashaba
        </h1>
        <div className="w-24 h-0.5 bg-secondary mx-auto my-4" />
        <p className="text-xl sm:text-2xl text-foreground/80 italic leading-relaxed mb-2">
          Every moment with you feels like a beautiful dream I never want to wake up from.
        </p>
        <motion.h2
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
          className="text-3xl sm:text-4xl font-black text-primary mt-6 mb-8"
        >
          Will You Be My Valentine? 💕
        </motion.h2>
      </motion.div>

      {/* Buttons */}
      <AnimatePresence mode="wait">
        {!yesPressed ? (
          <motion.div
            key="buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ delay: 1.3 }}
            className="flex gap-6 items-center justify-center relative z-20 mt-4"
            style={{ minHeight: 120 }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleYes}
              className="px-10 py-4 bg-primary text-primary-foreground text-xl font-bold rounded-full shadow-lg hover:shadow-primary/50 hover:shadow-2xl transition-shadow"
            >
              Yes! 💖
            </motion.button>

            {noVisible && (
              <motion.button
                animate={{ x: noPosition.x, y: noPosition.y }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
                onClick={moveNoButton}
                className="px-8 py-4 bg-muted text-muted-foreground text-lg rounded-full border border-border"
              >
                No 😢
              </motion.button>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="celebration"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-center z-20 mt-4"
          >
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
              transition={{ duration: 0.6, repeat: 3 }}
              className="text-7xl mb-4"
            >
              🥰
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-2">
              Yaaay! 🎉
            </h2>
            <p className="text-xl text-foreground/80 italic">
              I knew you'd say yes, my love! ❤️
            </p>
            <p className="text-muted-foreground text-sm mt-4">
              {sending ? "Sending the good news..." : sent ? "💌 Katlego has been notified!" : ""}
            </p>
            {/* Extra hearts burst */}
            {[...Array(12)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                animate={{
                  opacity: 0,
                  scale: 1.5,
                  x: (Math.random() - 0.5) * 300,
                  y: (Math.random() - 0.5) * 300,
                }}
                transition={{ duration: 1.5, delay: i * 0.1 }}
                className="absolute text-2xl"
                style={{ left: "50%", top: "50%" }}
              >
                ❤️
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-auto pt-12 pb-4 text-center z-20"
      >
        <div className="w-16 h-0.5 bg-secondary/30 mx-auto mb-3" />
        <p className="text-muted-foreground text-xs tracking-widest uppercase">
          Built with ❤️ by Katlego Masipa • 2026
        </p>
      </motion.footer>
    </div>
  );
};

export default ValentineProposal;
