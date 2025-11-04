import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedGames from './components/FeaturedGames';
import Footer from './components/Footer';
import { ChevronUp, Users } from 'lucide-react';

function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 320);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedGames />

        {/* About Section */}
        <section id="about" className="relative bg-[#0f0f1a] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-pink-500 via-violet-500 to-sky-500 text-white shadow-lg">
                <Users size={20} />
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Arcadia</h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl">
                <p className="text-white/80">
                  Arcadia is a futuristic game knowledge hub helping gamers overcome challenges with step‑by‑step guides, pro tips, and curated walkthroughs. Explore builds, boss strategies, collectibles, and secrets — all designed for clarity and mastery.
                </p>
                <p className="mt-4 text-white/70">
                  Arcadia was created by students passionate about web development and gaming culture. We believe learning should feel immersive and inspiring — just like your favorite games.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center shadow-lg backdrop-blur-xl"
                  >
                    <img
                      src={`https://api.dicebear.com/7.x/identicon/svg?seed=Arcadia-${i}`}
                      alt="Team member"
                      className="mx-auto h-16 w-16 rounded-full bg-white/10 p-1"
                    />
                    <p className="mt-3 font-medium">Developer {i}</p>
                    <p className="text-sm text-white/60">Frontend & Backend</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section (anchor) */}
        <section id="contact" className="bg-[#0f0f1a] py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-xl backdrop-blur-xl">
              <h3 className="text-2xl font-semibold">Get in Touch</h3>
              <p className="mt-2 text-white/70">
                Have a guide request or feedback? Reach us on Discord or drop a message on our socials.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Back to Top */}
      <button
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 via-violet-500 to-sky-500 text-white shadow-xl transition-all ${
          showTop ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0 pointer-events-none'
        }`}
      >
        <ChevronUp />
      </button>
    </div>
  );
}

export default App;
