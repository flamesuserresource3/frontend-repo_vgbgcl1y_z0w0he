import { useState } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Games', href: '#games' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#home" className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-pink-400 via-violet-400 to-sky-400 text-white shadow-lg">
                <Gamepad2 size={22} />
              </span>
              <div className="">
                <p className="text-lg font-semibold tracking-wide text-white">Arcadia</p>
                <p className="text-[11px] uppercase tracking-widest text-white/60">Game Guides</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#games"
                className="rounded-full bg-gradient-to-r from-pink-500 via-violet-500 to-sky-500 px-4 py-2 text-white shadow-lg shadow-pink-500/20 transition-transform hover:scale-105"
              >
                Explore Guides
              </a>
            </nav>

            <button
              aria-label="Toggle Menu"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-white"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2 text-white/90 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#games"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 via-violet-500 to-sky-500 px-4 py-2 text-white shadow-lg shadow-pink-500/20"
                >
                  Explore Guides
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Gradient overlay when menu opens */}
      {open && (
        <div
          className="pointer-events-auto fixed inset-0 -z-10 bg-gradient-to-b from-black/40 to-black/60 backdrop-blur-md md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
