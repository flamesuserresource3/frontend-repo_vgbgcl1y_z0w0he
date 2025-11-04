import { ExternalLink } from 'lucide-react';

const games = [
  {
    title: 'Eclipse Protocol',
    genre: 'Action RPG',
    platform: 'PC, PS5',
    cover: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
    description: 'Cyber-dystopian world where every choice shapes your combat style.',
  },
  {
    title: 'Nebula Drift',
    genre: 'Strategy',
    platform: 'PC, Xbox',
    cover: 'https://images.unsplash.com/photo-1546443046-ed1ce6ffd1ab?q=80&w=1600&auto=format&fit=crop',
    description: 'Command fleets through stellar storms and reclaim the galaxy.',
  },
  {
    title: 'Phantom Horizon',
    genre: 'Horror Survival',
    platform: 'PC',
    cover: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1600&auto=format&fit=crop',
    description: 'Navigate haunted arcologies with stealth and scarce resources.',
  },
  {
    title: 'Mythic Forge',
    genre: 'Simulation / Crafting',
    platform: 'Switch, PC',
    cover: 'https://images.unsplash.com/photo-1520975600249-c7dd42d039d1?q=80&w=1600&auto=format&fit=crop',
    description: 'Build legendary gear and manage a guild of adventurers.',
  },
  {
    title: 'Starstride: Zero',
    genre: 'Sci‑Fi Shooter',
    platform: 'PS5, Xbox',
    cover: 'https://images.unsplash.com/photo-1580256081112-e49377338b79?q=80&w=1600&auto=format&fit=crop',
    description: 'Zero‑gravity firefights with parkour traversal.',
  },
  {
    title: 'Arc Rangers',
    genre: 'RPG',
    platform: 'PC, PS5, Xbox',
    cover: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=1600&auto=format&fit=crop',
    description: 'Squad‑based exploration across alien biomes.',
  },
];

export default function FeaturedGames() {
  return (
    <section id="games" className="relative bg-[#0f0f1a] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Featured Game Guides
            </h2>
            <p className="mt-2 text-white/70">Curated picks with tips, builds, and boss strategies.</p>
          </div>
          <div className="hidden gap-2 md:flex">
            {['Action', 'RPG', 'Strategy', 'Horror', 'Simulation'].map((c) => (
              <button
                key={c}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80 transition-colors hover:bg-white/10"
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <article
              key={game.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-xl transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={game.cover}
                  alt={game.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f0f1a] via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{game.title}</h3>
                  <span className="text-xs text-white/60">{game.platform}</span>
                </div>
                <p className="mt-1 text-sm text-white/70">{game.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-pink-300">{game.genre}</span>
                  <a
                    href="#walkthrough"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 via-violet-500 to-sky-500 px-3 py-2 text-xs font-medium text-white shadow-lg shadow-pink-500/20 transition-transform hover:scale-105"
                  >
                    View Guide <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile quick filters */}
        <div className="mt-8 flex gap-2 md:hidden">
          {['Action', 'RPG', 'Strategy', 'Horror', 'Simulation'].map((c) => (
            <button
              key={c}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition-colors hover:bg-white/10"
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
