import { Discord, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-20 bg-gradient-to-b from-[#0f0f1a] via-[#0f0f1a] to-[#0b0b14]">
      <div className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-24 max-w-5xl rounded-full bg-gradient-to-r from-pink-500/30 via-violet-500/30 to-sky-500/30 blur-2xl" />
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-xl font-semibold tracking-wide text-white">Arcadia</p>
            <p className="text-xs uppercase tracking-widest text-white/60">Your Gateway to Game Mastery</p>
          </div>

          <nav className="flex items-center gap-6 text-sm">
            <a href="#home" className="text-white/80 hover:text-white">Home</a>
            <a href="#games" className="text-white/80 hover:text-white">Games</a>
            <a href="#about" className="text-white/80 hover:text-white">About</a>
            <a href="#contact" className="text-white/80 hover:text-white">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            {[
              { Icon: Discord, href: '#', label: 'Discord' },
              { Icon: Instagram, href: '#', label: 'Instagram' },
              { Icon: Youtube, href: '#', label: 'YouTube' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/80 shadow-lg transition-all hover:scale-105 hover:bg-gradient-to-tr hover:from-pink-500 hover:via-violet-500 hover:to-sky-500 hover:text-white"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          © 2025 Arcadia Team. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
