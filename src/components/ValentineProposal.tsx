import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImg from "@/assets/couple-kiss.jpg";
import handsImg from "@/assets/couple-hands.jpg";
import selfieImg from "@/assets/couple-selfie.jpg";
import mirrorImg from "@/assets/couple-mirror.jpg";
import rosesImg from "@/assets/valentine-roses.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

const ValentineProposal = () => {
  const [yesPressed, setYesPressed] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const moveNoButton = useCallback(() => {
    const x = (Math.random() - 0.5) * 200;
    const y = (Math.random() - 0.5) * 250;
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
          _subject: "❤️ April Said YES! She'll be your Valentine! ❤️",
          message: "April Mashaba said YES to being your Valentine! ❤️",
          _template: "box",
        }),
      });
      setSent(true);
    } catch {
      setSent(true);
    }
    setSending(false);
  };

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex flex-col justify-end px-6 pb-16">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 max-w-md"
        >
          <motion.p variants={fadeUp} custom={0} className="text-secondary text-sm tracking-[0.3em] uppercase mb-3">
            A letter for you
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="text-5xl sm:text-6xl font-black text-foreground leading-[1.1] mb-4">
            To April<br />Mashaba…
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-foreground/60 text-lg">
            Scroll down, my love ❤️
          </motion.p>
        </motion.div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="px-6 py-20 max-w-lg">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <motion.p variants={fadeUp} custom={0} className="text-secondary text-sm tracking-[0.3em] uppercase mb-6">
            Hey Baby
          </motion.p>
          <motion.p variants={fadeUp} custom={1} className="text-xl sm:text-2xl text-foreground/90 leading-relaxed">
            I had to make this as special as possible seeing that this will be our{" "}
            <span className="text-primary font-bold">first Valentine's</span> that we are going to spend together in person.
          </motion.p>
          <motion.p variants={fadeUp} custom={2} className="text-xl sm:text-2xl text-foreground/90 leading-relaxed mt-6">
            But before that, I wanna do right by you
          </motion.p>
          <motion.p variants={fadeUp} custom={3} className="text-2xl sm:text-3xl font-bold text-secondary mt-8">
            Ready? Let's go
          </motion.p>
        </motion.div>
      </section>

      {/* ===== POEM PART 1 — right aligned ===== */}
      <section className="px-6 py-16 flex justify-end">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-sm text-right"
        >
          <motion.p variants={fadeUp} custom={0} className="text-xl sm:text-2xl text-foreground/90 italic leading-relaxed">
            My love, you bring out my utmost joy
          </motion.p>
          <motion.p variants={fadeUp} custom={1} className="text-xl sm:text-2xl text-foreground/90 italic leading-relaxed mt-4">
            You reminded me how to be happy,<br />I feel like a little boy
          </motion.p>
        </motion.div>
      </section>

      {/* ===== IMAGE — hands holding ===== */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 py-4"
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 max-w-lg ml-auto">
          <img src={handsImg} alt="Our hands" className="w-full h-64 sm:h-80 object-cover" />
        </div>
      </motion.section>

      {/* ===== POEM PART 2 — left aligned ===== */}
      <section className="px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-md"
        >
          <motion.p variants={fadeUp} custom={0} className="text-xl sm:text-2xl text-foreground/90 italic leading-relaxed">
            It has been a long time coming, you are worth the wait
          </motion.p>
          <motion.p variants={fadeUp} custom={1} className="text-xl sm:text-2xl text-foreground/90 italic leading-relaxed mt-4">
            I don't know how we'll get there, but I know you are my fate
          </motion.p>
        </motion.div>
      </section>

      {/* ===== POEM PART 3 — right aligned ===== */}
      <section className="px-6 py-16 flex justify-end">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-sm text-right"
        >
          <motion.p variants={fadeUp} custom={0} className="text-xl sm:text-2xl text-foreground/90 italic leading-relaxed">
            A perfect day to reconnect, I'm gonna have a permanent smile
          </motion.p>
          <motion.p variants={fadeUp} custom={1} className="text-xl sm:text-2xl text-foreground/90 italic leading-relaxed mt-4">
            My shyness will instantly disappear, as if I hadn't seen you in awhile
          </motion.p>
        </motion.div>
      </section>

      {/* ===== IMAGE — selfie ===== */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 py-4"
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 max-w-sm">
          <img src={selfieImg} alt="Us together" className="w-full h-72 sm:h-96 object-cover" />
        </div>
      </motion.section>

      {/* ===== POEM PART 4 — left aligned ===== */}
      <section className="px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-md"
        >
          <motion.p variants={fadeUp} custom={0} className="text-xl sm:text-2xl text-foreground/90 italic leading-relaxed">
            I can't wait to see you, I can't wait to hold you tight
          </motion.p>
          <motion.p variants={fadeUp} custom={1} className="text-xl sm:text-2xl text-foreground/90 italic leading-relaxed mt-4">
            I'm never letting you go, holding you with all my might
          </motion.p>
        </motion.div>
      </section>

      {/* ===== IMAGE — mirror ===== */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 py-4 flex justify-end"
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 max-w-sm">
          <img src={mirrorImg} alt="Mirror selfie" className="w-full h-72 sm:h-96 object-cover" />
        </div>
      </motion.section>

      {/* ===== POEM PART 5 — right aligned ===== */}
      <section className="px-6 py-16 flex justify-end">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-sm text-right"
        >
          <motion.p variants={fadeUp} custom={0} className="text-xl sm:text-2xl text-foreground/90 italic leading-relaxed">
            I miss your beautiful smile and that contagious laugh
          </motion.p>
          <motion.p variants={fadeUp} custom={1} className="text-xl sm:text-2xl text-foreground/90 italic leading-relaxed mt-4">
            I can't wait for you to feel my heartbeat, so you can hear how loud is my love ❤️
          </motion.p>
        </motion.div>
      </section>

      {/* ===== IMAGE — roses ===== */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 py-4 flex justify-center"
      >
        <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/30">
          <img src={rosesImg} alt="Valentine roses" className="w-full h-full object-cover" />
        </div>
      </motion.section>

      {/* ===== POEM PART 6 — left aligned ===== */}
      <section className="px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-md"
        >
          <motion.p variants={fadeUp} custom={0} className="text-xl sm:text-2xl text-foreground/90 italic leading-relaxed">
            My forever Valentine, but I wanna make it more official
          </motion.p>
          <motion.p variants={fadeUp} custom={1} className="text-xl sm:text-2xl text-foreground/90 italic leading-relaxed mt-4">
            Gonna make sure to step up yearly, even when my surname follows your initial
          </motion.p>
        </motion.div>
      </section>

      {/* ===== BUILDUP ===== */}
      <section className="px-6 py-20 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <motion.p variants={fadeUp} custom={0} className="text-xl sm:text-2xl text-foreground/80 leading-relaxed max-w-md mx-auto">
            So my baby, I hope that we can make up for lost time
          </motion.p>
          <motion.p variants={fadeUp} custom={1} className="text-xl sm:text-2xl text-foreground/80 leading-relaxed mt-6 max-w-md mx-auto">
            But I've got one thing to ask you:
          </motion.p>
          <motion.div variants={fadeUp} custom={2} className="w-20 h-0.5 bg-secondary mx-auto my-8" />
          <motion.h2
            variants={fadeUp}
            custom={3}
            className="text-4xl sm:text-5xl font-black text-primary leading-tight"
          >
            Will you be my Valentine? ❤️
          </motion.h2>
        </motion.div>
      </section>

      {/* ===== BUTTONS ===== */}
      <section className="px-6 pb-20">
        <AnimatePresence mode="wait">
          {!yesPressed ? (
            <motion.div
              key="buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="flex gap-6 items-center justify-center relative z-20"
              style={{ minHeight: 120 }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleYes}
                className="px-10 py-4 bg-primary text-primary-foreground text-xl font-bold rounded-full shadow-lg hover:shadow-primary/50 hover:shadow-2xl transition-shadow"
              >
                Yes! ❤️
              </motion.button>

              <motion.button
                animate={{ x: noPosition.x, y: noPosition.y }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
                onClick={moveNoButton}
                className="px-8 py-4 bg-muted text-muted-foreground text-lg rounded-full border border-border"
              >
                No
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="celebration"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-center z-20"
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                transition={{ duration: 0.6, repeat: 3 }}
                className="text-7xl mb-4"
              >
                ❤️
              </motion.div>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-2">
                Yaaay!
              </h2>
              <p className="text-xl text-foreground/80 italic">
                I knew you'd say yes, my love! ❤️
              </p>
              <p className="text-muted-foreground text-sm mt-4">
                {sending ? "Sending the good news…" : sent ? "❤️ Katlego has been notified!" : ""}
              </p>
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
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="px-6 pb-8 pt-12 text-center">
        <div className="w-16 h-0.5 bg-secondary/30 mx-auto mb-3" />
        <p className="text-muted-foreground text-xs tracking-widest uppercase">
          Built with ❤️ by Katlego Masipa • 2026
        </p>
      </footer>
    </div>
  );
};

export default ValentineProposal;
