import { useMemo, useState } from 'react'

type Story = {
  title: string
  description: string
  category: string
  readTime: string
  image: string
  badge?: string
  badgeLabel?: string
}

const featureIssue: Story = {
  title: 'December Issue · Luminous Atolls',
  description:
    'A slow, cinematic glide through overwater villas at dusk, reef dives in cobalt light, and conversations with Maldivian stewards redefining luxury with conscience.',
  category: 'Latest Issue',
  readTime: '18 min read',
  image:
    'https://images.unsplash.com/photo-1521292270410-a8c53642e9d0?auto=format&fit=crop&w=1400&q=80',
  badge: 'New',
}

const stories: Story[] = [
  {
    title: 'Four islands, four moods: a curated hop across the Ari Atoll',
    description:
      'A serene itinerary balancing private sandbanks, reef dives with manta rays, and lantern-lit dinners on shore.',
    category: 'Itinerary',
    readTime: '9 min read',
    image:
      'https://images.unsplash.com/photo-1526199119161-4be1e3368c6d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Quiet luxury, gentle footprint',
    description:
      'How new eco-resorts use tidal energy, reef-safe design, and Maldivian craft to elevate calm without compromise.',
    category: 'Sustainability',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80',
    badge: 'editorsPick',
    badgeLabel: 'Editor’s pick',
  },
  {
    title: 'The lagoon at blue hour',
    description:
      'A photo essay capturing luminous shallows, drifting dhonis, and the hush that settles between tide and twilight.',
    category: 'Photo essay',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80',
  },
]

const insiderGuides: Story[] = [
  {
    title: 'Malé, unhurried',
    description:
      'A mindful day in the capital: morning markets, coral stone mosques, and slow coffee with waterfront views.',
    category: 'City guide',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=60&h=60',
  },
  {
    title: 'Underwater etiquette',
    description:
      'How to dive with respect: briefings with local marine biologists, reef-safe packing, and calm buoyancy tips.',
    category: 'Stewardship',
    readTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Secluded sandbanks to savor',
    description:
      'A handful of hushed sandbars where the only sounds are tide, breeze, and a quiet exhale.',
    category: 'Escapes',
    readTime: '3 min read',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
]

const values = [
  {
    title: 'Calm authority',
    copy: 'Serene layouts, gentle motion, and curated pacing so every visit feels like an exhale.',
    icon: '🌊',
  },
  {
    title: 'Luxury with conscience',
    copy: 'Stewardship guides every story—highlighting sustainability without losing warmth.',
    icon: '🌿',
  },
  {
    title: 'Depth over noise',
    copy: 'Long-form pieces, thoughtful imagery, and ad-free reading that respects your time.',
    icon: '📖',
  },
]

const badgeClassMap: Record<string, string> = {
  New: 'bg-azure text-white',
  editorsPick: 'bg-gold/90 text-slate-900',
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-azure">
        {label}
      </span>
      <h2 className="text-3xl font-semibold leading-tight">{title}</h2>
    </div>
  )
}

function StoryCard({ story }: { story: Story }) {
  const badgeClass = story.badge ? badgeClassMap[story.badge] ?? 'bg-azure/10 text-azure' : ''

  return (
    <article className="group overflow-hidden rounded-2xl bg-white/70 shadow-lg shadow-slate-100 transition hover:-translate-y-1 hover:shadow-lagoon">
      <div className="relative h-56 overflow-hidden">
        <img
          src={story.image}
          alt={story.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {story.badge ? (
          <span
            className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${badgeClass}`}
          >
            {story.badgeLabel ?? story.badge}
          </span>
        ) : null}
      </div>
      <div className="space-y-3 px-5 pb-5 pt-4">
        <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
          <span className="rounded-full bg-azure/10 px-3 py-1 text-azure">{story.category}</span>
          <span className="text-slate-400">·</span>
          <span>{story.readTime}</span>
        </div>
        <h3 className="text-xl font-semibold leading-tight text-slate-900">{story.title}</h3>
        <p className="text-sm text-slate-600">{story.description}</p>
        <button className="inline-flex items-center gap-2 text-sm font-semibold text-azure hover:text-azure/80">
          Discover more
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  )
}

function App() {
  const [showSubscribe, setShowSubscribe] = useState(false)

  const guidesPreview = useMemo(() => insiderGuides.slice(0, 3), [])

  return (
    <div className="relative min-h-screen bg-sand text-slate-900">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-azure/10 via-white to-sand" />
      <header className="sticky top-0 z-20 border-b border-white/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-azure text-lg font-semibold text-white shadow-lagoon">
              WM
            </div>
            <div>
              <p className="font-display text-lg">Where&apos;s Maldives</p>
              <p className="text-xs text-slate-500">Magazine · Serenity in every scroll</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            {['Home', 'Magazine', 'Blog', 'Itineraries', 'About'].map((item) => (
              <button
                key={item}
                className="transition hover:text-azure focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure/60"
                type="button"
              >
                {item}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <label className="relative hidden items-center md:flex" aria-label="Search">
              <span className="pointer-events-none absolute left-3 text-slate-400">⌕</span>
              <input
                className="w-40 rounded-full border border-slate-200 bg-white/80 px-8 py-2 text-sm text-slate-700 shadow-inner shadow-white/60 placeholder:text-slate-400 focus:border-azure focus:outline-none focus:ring-2 focus:ring-azure/20"
                placeholder="Search calm escapes"
                type="search"
              />
            </label>
            <button
              className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-azure hover:text-azure focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure/60 sm:block"
              type="button"
            >
              Sign in
            </button>
            <button
              onClick={() => setShowSubscribe(true)}
              className="rounded-full bg-azure px-4 py-2 text-sm font-semibold text-white shadow-lagoon transition hover:bg-azure/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure/60"
              type="button"
            >
              Subscribe
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-10">
        <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-azure">
              Where the Maldives reveals itself
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              A serene, subscriber-only magazine crafted for travelers who move with intention.
            </h1>
            <p className="text-lg text-slate-600">
              Curated issues, ad-free long reads, and insider guides that honor the rhythm of the
              atolls. Designed to help you plan meaningful journeys with clarity, calm, and respect.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setShowSubscribe(true)}
                className="rounded-full bg-azure px-5 py-3 text-sm font-semibold text-white shadow-lagoon transition hover:bg-azure/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure/60"
                type="button"
              >
                Subscribe now
              </button>
              <button
                className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-azure hover:text-azure focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure/60"
                type="button"
              >
                Discover more
              </button>
            </div>
            <div className="grid gap-4 rounded-2xl border border-white/60 bg-white/80 p-5 shadow-inner shadow-white/60 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-slate-500">For intentional travelers</p>
                <p className="text-lg font-semibold text-azure">Curated issues · Ad-free reading</p>
              </div>
              <div className="space-y-1 text-sm text-slate-600">
                <p>Personalized reading lists based on what you save.</p>
                <p>Guides shaped with Maldivian experts and marine biologists.</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-azure/15">
            <img
              src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1600&q=80"
              alt="Serene overwater bungalows at dusk in the Maldives"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/10 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/80 p-4 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azure">
                Latest issue
              </p>
              <h3 className="font-display text-xl text-slate-900">{featureIssue.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{featureIssue.description}</p>
              <div className="mt-3 flex items-center gap-3 text-xs font-medium text-slate-600">
                <span className="rounded-full bg-azure/10 px-3 py-1 text-azure">
                  {featureIssue.category}
                </span>
                <span className="text-slate-400">·</span>
                <span>{featureIssue.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading label="Magazine" title="Latest curation, ad-free by design" />
            <button
              className="inline-flex items-center gap-2 text-sm font-semibold text-azure hover:text-azure/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure/60"
              type="button"
            >
              View full issue <span aria-hidden="true">→</span>
            </button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <StoryCard key={story.title} story={story} />
            ))}
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl bg-white/80 p-8 shadow-xl shadow-white/60 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <SectionHeading label="For Subscribers" title="A calm dashboard for your journey" />
            <p className="text-slate-600">
              Sign in to follow curated itineraries, save quiet sandbanks, and receive
              sustainability notes that match your pace. Everything is synced across devices for
              a seamless, ad-free reading experience.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-slate-100 bg-sand/60 p-4 shadow-inner shadow-white/70"
                >
                  <div className="flex items-center gap-2 text-azure">
                    <span className="text-lg">{value.icon}</span>
                    <p className="text-sm font-semibold uppercase tracking-wide">{value.title}</p>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{value.copy}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setShowSubscribe(true)}
                className="rounded-full bg-tidal px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200/40 transition hover:bg-tidal/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tidal/60"
                type="button"
              >
                See plans
              </button>
              <button
                className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-azure hover:text-azure focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure/60"
                type="button"
              >
                Preview dashboard
              </button>
            </div>
          </div>
          <div className="space-y-6 rounded-2xl border border-white/70 bg-gradient-to-br from-white via-white/70 to-azure/10 p-6 shadow-lg">
            <SectionHeading label="Insider Guides" title="Quiet recommendations, updated weekly" />
            <div className="space-y-4">
              {guidesPreview.map((guide) => (
                <div
                  key={guide.title}
                  className="flex gap-4 rounded-2xl border border-slate-100 bg-white/70 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lagoon"
                >
                  <img
                    alt={guide.title}
                    className="h-16 w-16 rounded-xl object-cover"
                    src={guide.image}
                    loading="lazy"
                  />
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-azure">
                      {guide.category}
                    </p>
                    <h3 className="text-base font-semibold leading-tight">{guide.title}</h3>
                    <p className="text-xs text-slate-500">{guide.readTime}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-xl bg-azure/10 p-4 text-sm text-slate-700">
              Save articles, get a gentle nudge when tides and seasons shift, and keep your dream
              list synced for milestone trips.
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <SectionHeading label="Membership" title="Choose the pace that fits your voyage" />
            <p className="text-sm text-slate-600">
              Simple, transparent plans · Cancel anytime · Welcome email with your first itinerary
            </p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-azure/10 bg-white/90 p-6 shadow-lg shadow-azure/10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-azure">Monthly</p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-slate-900">$7.99</span>
                <span className="text-sm text-slate-500">/month</span>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                Full digital access, weekly insider drops, and personalized save lists.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>• Ad-free reading and serene layout</li>
                <li>• Save and sync itineraries</li>
                <li>• Gentle reminders for seasonal highlights</li>
              </ul>
              <button
                onClick={() => setShowSubscribe(true)}
                className="mt-6 w-full rounded-full bg-azure px-5 py-3 text-sm font-semibold text-white shadow-lagoon transition hover:bg-azure/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure/60"
                type="button"
              >
                Start monthly
              </button>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/10 via-white to-azure/10 p-6 shadow-xl shadow-gold/20">
              <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-slate-900">
                Best value
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-azure">Annual</p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-slate-900">$79.99</span>
                <span className="text-sm text-slate-500">/year</span>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                One serene payment for the year. Includes welcome concierge email and seasonal live
                Q&A with Maldivian experts.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>• Everything in Monthly</li>
                <li>• Priority access to new issues</li>
                <li>• Collector PDFs for offline reading</li>
              </ul>
              <button
                onClick={() => setShowSubscribe(true)}
                className="mt-6 w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300/40 transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900/60"
                type="button"
              >
                Choose annual
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/60 bg-white/70 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg">Where&apos;s Maldives Magazine</p>
            <p className="text-sm text-slate-600">
              Calm, curated storytelling for travelers who savor depth.
            </p>
          </div>
          <div className="flex gap-4 text-sm text-slate-600">
            <button className="transition hover:text-azure" type="button">
              Privacy
            </button>
            <button className="transition hover:text-azure" type="button">
              Terms
            </button>
            <button className="transition hover:text-azure" type="button">
              Contact
            </button>
          </div>
        </div>
      </footer>

      {showSubscribe ? (
        <div
          aria-label="Subscription modal"
          className="fixed inset-0 z-30 flex items-center justify-center bg-slate-900/50 px-4 backdrop-blur"
          role="dialog"
        >
          <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azure">
                  Subscriber sanctuary
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-slate-900">
                  Choose your calm journey
                </h3>
              </div>
              <button
                aria-label="Close subscription modal"
                className="rounded-full border border-slate-200 p-2 text-slate-500 transition hover:border-azure hover:text-azure focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure/60"
                onClick={() => setShowSubscribe(false)}
                type="button"
              >
                ✕
              </button>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Monthly $7.99 · Annual $79.99. Ad-free issues, curated itineraries, and sustainability
              briefings shaped with Maldivian experts.
            </p>
            <div className="mt-4 grid gap-3 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <span className="text-azure">•</span>
                <span>Read on any device with synced saves and serene typography.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-azure">•</span>
                <span>Personalized recommendations informed by what you linger on.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-azure">•</span>
                <span>Welcome email with your first calm itinerary.</span>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                className="flex-1 rounded-full bg-azure px-5 py-3 text-sm font-semibold text-white shadow-lagoon transition hover:bg-azure/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure/60"
                type="button"
              >
                Continue with Stripe
              </button>
              <button
                className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-azure hover:text-azure focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure/60"
                onClick={() => setShowSubscribe(false)}
                type="button"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default App
