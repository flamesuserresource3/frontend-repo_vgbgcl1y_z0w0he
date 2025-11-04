import Spline from '@splinetool/react-spline';
import { Search } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const inputRef = useRef(null);

  return (
    <section id="home" className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient veil for readability (won't block Spline interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,15,26,0)_0%,rgba(15,15,26,0.35)_55%,rgba(15,15,26,0.8)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0f1a]/40 to-[#0f0f1a]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="bg-gradient-to-r from-pink-300 via-violet-300 to-sky-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          Arcadia
        </h1>
        <p className="mt-3 text-lg text-white/80 sm:text-xl">
          Your Gateway to Game Mastery
        </p>

        {/* Search */}
        <div className="mt-8 w-full max-w-2xl">
          <label htmlFor="search" className="sr-only">Search Game Guides</label>
          <div className="group relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/40 via-violet-500/40 to-sky-500/40 blur-lg opacity-0 transition-opacity duration-300 group-focus-within:opacity-100" />
            <div className="relative flex items-center overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl">
              <Search className="ml-4 h-5 w-5 text-white/70" />
              <input
                id="search"
                ref={inputRef}
                type="text"
                placeholder="Search Game Guides..."
                className="w-full bg-transparent px-4 py-4 text-white placeholder-white/60 outline-none"
                onFocus={() => {
                  // subtle helper, not mandatory
                }}
              />
              <button
                className="m-1 mr-2 inline-flex items-center rounded-xl bg-gradient-to-r from-pink-500 via-violet-500 to-sky-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-pink-500/20 transition-transform hover:scale-105"
                onClick={() => inputRef.current?.focus()}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
