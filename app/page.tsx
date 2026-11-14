const PHONE = "(916) 927-7500";
const TEL = "tel:+19169277500";
const ADDRESS = "2349 Albatross Way, Sacramento, CA 95815";
const MAPS = "https://www.google.com/maps/search/?api=1&query=TranZen%20Transmission%20%26%20Auto%20Repair&query_place_id=ChIJ-8r-z_TZmoARHJvwp5qYPJA";
const DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=2349%20Albatross%20Way%2C%20Sacramento%2C%20CA%2095815";
const REVIEWS = "https://reviews.birdeye.com/tranzen-transmission-auto-repair-156042597706379";

const paths: Record<string, string[]> = {
  phone: ["M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"],
  pin: ["M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"],
  nav: ["m3 11 19-9-9 19-2-8-8-2z"],
  gear: ["M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z", "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"],
  wrench: ["M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"],
  truck: ["M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", "M15 18H9", "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14", "M17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", "M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"],
  drop: ["M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"],
  gauge: ["m12 14 4-4", "M3.34 19a10 10 0 1 1 17.32 0"],
  shield: ["M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", "m9 12 2 2 4-4"],
  user: ["M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"],
  calendar: ["M8 2v4", "M16 2v4", "M3 10h18", "M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"],
  check: ["M20 6 9 17l-5-5"],
  scale: ["m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", "M7 21h10", "M12 3v18", "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"],
  arrow: ["M5 12h14", "m12 5 7 7-7 7"],
  award: ["m15.48 12.89 1.51 8.53a.5.5 0 0 1-.81.47l-3.58-2.69a1 1 0 0 0-1.2 0l-3.59 2.69a.5.5 0 0 1-.81-.47l1.51-8.53", "M12 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"],
};

function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

function Stars({ className = "h-5 w-5", half = false }: { className?: string; half?: boolean }) {
  return (
    <span className="inline-flex text-star" aria-label={half ? "4.5 out of 5 stars" : "5 out of 5 stars"}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} className={className} viewBox="0 0 24 24" aria-hidden="true">
          <defs>
            <linearGradient id={`h${i}`}>
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="oklch(0.88 0.02 80)" />
            </linearGradient>
          </defs>
          <path fill={half && i === 4 ? `url(#h${i})` : "currentColor"} d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9L12 2.5z" />
        </svg>
      ))}
    </span>
  );
}

const transmissionPoints = [
  "Slipping, hard or delayed shifts",
  "Grinding, whining or clunking when you shift",
  "Warning light, limp mode or leaking fluid",
  "Automatic transmission rebuilds",
];

const otherServices = [
  { icon: "wrench", title: "Full-service auto repair", text: "Engine, cooling, electrical and general mechanical repair for cars, SUVs and vans. If it is not the transmission, we still fix it, and we tell you straight what it needs." },
  { icon: "truck", title: "Truck repair", text: "Pickups and light-commercial trucks that work hard and need to keep working. Transmission and drivetrain work plus general truck repair." },
  { icon: "drop", title: "Complete auto maintenance", text: "Oil changes, brake work, fluid service and diagnostics, so small problems get caught before they turn into big ones." },
  { icon: "gauge", title: "Diagnostics", text: "Check engine light on or something just feels wrong? We find the actual cause before recommending a repair, so you are not paying for guesses." },
];

const reviews = [
  { text: "No one better to call than Tony at TranZen for any transmission repairs. He is honest and fair on pricing.", who: "Customer review", job: "Transmission repair" },
  { text: "Friendly owner and good service. Skilled technicians, fair pricing, and a real commitment to getting the job done right.", who: "Customer review", job: "Auto service" },
];

const themes = [
  { icon: "scale", t: "Honest about what it needs", d: "Customers say Tony tells it straight, including when a repair is smaller than they feared." },
  { icon: "shield", t: "Fair on pricing", d: "Fair pricing comes up again and again in TranZen reviews." },
  { icon: "gear", t: "Skilled technicians", d: "Transmission work is the specialty, not a side line." },
  { icon: "check", t: "Done right", d: "Reviewers mention the shop's commitment to getting the job done right the first time." },
];

const steps = [
  { title: "Call Tony", text: `Call ${PHONE} and describe what the car is doing. Slipping, noises, warning lights, leaks: the more detail, the better.` },
  { title: "Bring it in for a diagnosis", text: "Drop it off at 2349 Albatross Way. We check it properly and find the real cause." },
  { title: "Get a straight answer and a price", text: "Tony explains what is wrong, what it will take, and what it costs before any work starts. No surprises." },
  { title: "Drive away fixed", text: "We repair or rebuild it, road-test it, and walk you through what was done when you pick it up." },
];

const faqs = [
  { q: "Do you only work on transmissions?", a: "Transmissions are our specialty, but TranZen is a full-service shop. We handle general auto repair, truck repair, brakes, oil changes, fluid service and diagnostics too." },
  { q: "How do I know if my transmission needs a rebuild or just a repair?", a: "Not every transmission problem means a rebuild. Some issues come down to fluid, a sensor or a smaller part. We diagnose it first and tell you honestly which one you need." },
  { q: "Do you work on trucks?", a: "Yes. We repair pickups and light-commercial trucks, including transmission and drivetrain work." },
  { q: "How long have you been in business?", a: "TranZen has been locally owned and operating in Sacramento since September 2010, at the same Albatross Way location." },
  { q: "Where are you located?", a: `We are at ${ADDRESS}, near Del Paso Boulevard in North Sacramento. Tap Directions on this page to get turn-by-turn directions.` },
  { q: "What are your hours?", a: `Please call ${PHONE} for current hours or to make sure Tony is in before you head over.` },
  { q: "Can I get a price before you start?", a: "Yes. We diagnose first and give you the price before any repair begins. Customers consistently describe our pricing as fair." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "TranZen Transmission & Auto Repair",
  telephone: "+1-916-927-7500",
  foundingDate: "2010-09",
  address: { "@type": "PostalAddress", streetAddress: "2349 Albatross Way", addressLocality: "Sacramento", addressRegion: "CA", postalCode: "95815", addressCountry: "US" },
  areaServed: "Sacramento, CA",
  aggregateRating: { "@type": "AggregateRating", ratingValue: 4.5, reviewCount: 53 },
  hasMap: MAPS,
  sameAs: [REVIEWS],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hidden bg-navy text-white/85 md:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-2 text-sm">
          <span className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4" /> {ADDRESS}</span>
          <span>Locally owned since 2010</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="TranZen Transmission and Auto Repair home">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-white"><Icon name="gear" className="h-6 w-6" /></span>
            <span className="leading-tight">
              <span className="block font-[family-name:var(--font-heading)] text-xl font-extrabold">TranZen</span>
              <span className="block text-xs font-semibold text-muted">Transmission &amp; Auto Repair</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-[15px] font-semibold text-muted lg:flex" aria-label="Main">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About Tony</a>
            <a href="#location" className="hover:text-brand">Location</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="hidden font-bold text-ink hover:text-brand md:inline">{PHONE}</a>
            <a href={TEL} className="btn hidden rounded-lg bg-cta px-5 py-3 font-bold text-white hover:bg-cta-hover md:inline-flex">Call Now</a>
            <a href={TEL} className="btn grid h-11 w-11 place-items-center rounded-lg bg-cta text-white md:hidden" aria-label={`Call ${PHONE}`}><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="top" className="pb-20 md:pb-0">
        {/* Hero */}
        <section className="border-b border-line bg-[linear-gradient(180deg,var(--brand-soft),var(--bg)_70%)]">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="rise mb-5 text-[15px] font-bold text-brand-deep">Ask for Tony &middot; Sacramento since 2010</p>
              <h1 className="rise rise-2 text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold text-ink">
                Transmission Repair &amp; Rebuilds in Sacramento
              </h1>
              <p className="rise rise-3 mt-6 max-w-[56ch] text-lg text-muted">
                A locally owned transmission specialist and full-service auto and truck shop on Albatross Way. Honest diagnosis, fair pricing, and the job done right.
              </p>
              <div className="rise rise-4 mt-8 flex flex-wrap gap-3">
                <a href={TEL} className="btn inline-flex min-h-[54px] items-center gap-2 rounded-lg bg-cta px-6 text-lg font-bold text-white shadow-[0_12px_26px_-14px_oklch(0.52_0.19_27)] hover:bg-cta-hover">
                  <Icon name="phone" className="h-5 w-5" /> Call {PHONE}
                </a>
                <a href="#services" className="btn inline-flex min-h-[54px] items-center gap-2 rounded-lg border-2 border-navy px-6 text-lg font-bold text-navy hover:bg-navy-soft">
                  See our services
                </a>
              </div>
              <a href={REVIEWS} target="_blank" rel="noopener noreferrer" className="rise rise-4 mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] text-muted hover:text-ink">
                <Stars half />
                <span><strong className="text-ink">4.5</strong> &middot; 53 customer reviews &middot; 15+ years &middot; Locally owned</span>
              </a>
            </div>

            <aside className="rise rise-3 rounded-2xl border border-line bg-white p-7 shadow-[0_30px_60px_-40px_oklch(0.25_0.03_260/0.5)]">
              <h2 className="text-xl font-extrabold">Quick facts</h2>
              <dl className="mt-5 space-y-4 text-[16px]">
                {[
                  { icon: "gear", k: "Specialty", v: "Transmission repair and rebuilds" },
                  { icon: "user", k: "Owner", v: "Tony, on site and on the phone" },
                  { icon: "calendar", k: "In business", v: "Since September 2010" },
                  { icon: "pin", k: "Location", v: ADDRESS },
                ].map((f) => (
                  <div key={f.k} className="flex gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand-deep"><Icon name={f.icon} className="h-5 w-5" /></span>
                    <div>
                      <dt className="text-sm font-semibold text-muted">{f.k}</dt>
                      <dd className="font-semibold text-ink">{f.v}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn mt-6 flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-navy font-bold text-white hover:opacity-90"><Icon name="nav" className="h-5 w-5" /> Get directions</a>
            </aside>
          </div>
        </section>

        {/* Trust bar */}
        <section className="bg-navy text-white">
          <ul className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: "award", big: "4.5 stars", small: "53 customer reviews" },
              { icon: "calendar", big: "Since 2010", small: "Same Sacramento location" },
              { icon: "gear", big: "Transmission specialist", small: "Repairs and rebuilds" },
              { icon: "truck", big: "Cars & trucks", small: "Full-service repair" },
            ].map((t) => (
              <li key={t.big} className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white/10 text-white"><Icon name={t.icon} /></span>
                <span>
                  <span className="block font-bold">{t.big}</span>
                  <span className="text-sm text-white/75">{t.small}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <h2 className="max-w-2xl text-3xl font-extrabold md:text-[2.6rem]">Transmission work first. Everything else your car needs, too.</h2>

            <div className="mt-10 grid gap-8 rounded-2xl border-2 border-brand bg-white p-7 md:p-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1 text-sm font-bold text-white"><Icon name="gear" className="h-4 w-4" /> Our specialty</span>
                <h3 className="mt-4 text-2xl font-extrabold md:text-3xl">Transmission repair &amp; automatic transmission rebuilds</h3>
                <p className="mt-4 text-lg text-muted">Transmissions are what TranZen is known for. Whether your car is slipping, shifting hard, refusing to go into gear or leaking fluid, Tony diagnoses the actual problem before recommending anything. Sometimes it is a repair. Sometimes it needs a full rebuild. Either way you get an honest answer and a fair price.</p>
                <a href={TEL} className="btn mt-6 inline-flex min-h-[50px] items-center gap-2 rounded-lg bg-cta px-6 font-bold text-white hover:bg-cta-hover"><Icon name="phone" className="h-5 w-5" /> Call about your transmission</a>
              </div>
              <div className="rounded-xl bg-brand-soft p-6">
                <h4 className="font-bold text-brand-deep">Call us if you notice:</h4>
                <ul className="mt-4 space-y-3">
                  {transmissionPoints.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[16px] text-ink"><span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white"><Icon name="check" className="h-3.5 w-3.5" /></span>{p}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 grid gap-x-10 gap-y-2 md:grid-cols-2">
              {otherServices.map((s) => (
                <article key={s.title} className="flex gap-4 border-b border-line py-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-navy-soft text-navy"><Icon name={s.icon} /></span>
                  <div>
                    <h3 className="text-lg font-bold">{s.title}</h3>
                    <p className="mt-1.5 text-[16px] text-muted">{s.text}</p>
                    <a href={TEL} className="mt-3 inline-flex items-center gap-1.5 text-[15px] font-bold text-brand hover:text-brand-deep">Call about this <Icon name="arrow" className="h-4 w-4" /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Stars half className="h-6 w-6" />
                <h2 className="mt-3 text-3xl font-extrabold md:text-[2.6rem]">Rated 4.5 from 53 customer reviews</h2>
                <p className="mt-3 max-w-xl text-lg text-muted">The same words keep showing up: honest, fair pricing, skilled, and committed to doing the job right.</p>
              </div>
              <a href={REVIEWS} target="_blank" rel="noopener noreferrer" className="btn inline-flex min-h-[48px] items-center gap-2 rounded-lg border-2 border-ink/80 px-5 font-bold hover:bg-white">Read all reviews <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-[1.25fr_1fr]">
              <figure className="flex flex-col justify-between rounded-2xl bg-white p-8 md:p-10">
                <Stars className="h-6 w-6" />
                <blockquote className="mt-5 font-[family-name:var(--font-heading)] text-2xl font-bold leading-snug md:text-[1.75rem]">&ldquo;{reviews[0].text}&rdquo;</blockquote>
                <figcaption className="mt-6 text-[15px] text-muted"><strong className="text-ink">{reviews[0].who}</strong> &middot; {reviews[0].job}</figcaption>
              </figure>
              <div className="grid gap-5">
                <figure className="rounded-2xl border border-line bg-white p-7">
                  <Stars className="h-4 w-4" />
                  <blockquote className="mt-3 text-[17px] leading-relaxed">&ldquo;{reviews[1].text}&rdquo;</blockquote>
                  <figcaption className="mt-4 text-[15px] text-muted"><strong className="text-ink">{reviews[1].who}</strong> &middot; {reviews[1].job}</figcaption>
                </figure>
                <div className="rounded-2xl border border-line bg-white p-7">
                  <h3 className="font-bold">What customers mention most</h3>
                  <ul className="mt-3 flex flex-wrap gap-2 text-[15px]">
                    {["Honest", "Fair pricing", "Skilled technicians", "Friendly owner", "Job done right"].map((t) => (
                      <li key={t} className="rounded-full bg-brand-soft px-3 py-1 font-semibold text-brand-deep">{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-6 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="text-3xl font-extrabold md:text-[2.6rem]">A Sacramento shop where the owner still answers</h2>
              <div className="mt-6 space-y-4 text-lg text-muted">
                <p>TranZen Transmission &amp; Auto Repair opened on Albatross Way in September 2010 and has been locally owned ever since. Most people know it simply as Tony&apos;s shop.</p>
                <p>Transmission work can be expensive, and it is easy to feel unsure about what you are being told. That is why customers keep coming back: Tony explains what is actually wrong, gives a fair price, and does not sell you more than the car needs.</p>
                <p>Beyond transmissions, we are a complete auto and truck repair shop, so the same people you trust with the hard jobs can take care of your brakes, oil and everyday maintenance too. TranZen was also featured in the Sacramento Secrets 2026 guide to the city&apos;s best transmission shops.</p>
              </div>
            </div>
            <ul className="grid gap-x-8 gap-y-7 self-center sm:grid-cols-2">
              {themes.map((d) => (
                <li key={d.t}>
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand-deep"><Icon name={d.icon} /></span>
                  <h3 className="mt-3 text-lg font-bold">{d.t}</h3>
                  <p className="mt-1 text-[16px] text-muted">{d.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-navy-soft py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <h2 className="text-3xl font-extrabold md:text-[2.6rem]">How a repair works at TranZen</h2>
            <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="rounded-2xl bg-white p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-lg font-extrabold text-white">{i + 1}</span>
                  <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-[16px] text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Location */}
        <section id="location" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-start gap-10 px-5 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-3xl font-extrabold md:text-[2.6rem]">Find the shop</h2>
              <p className="mt-4 text-lg text-muted">We are on Albatross Way off the Del Paso Boulevard corridor in North Sacramento, serving drivers from across Sacramento.</p>
              <address className="mt-6 not-italic">
                <p className="flex items-start gap-2 text-lg font-semibold"><Icon name="pin" className="mt-1 h-5 w-5 text-brand" /> {ADDRESS}</p>
                <p className="mt-2 flex items-center gap-2 text-lg font-semibold"><Icon name="phone" className="h-5 w-5 text-brand" /> <a href={TEL} className="hover:text-brand">{PHONE}</a></p>
              </address>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn inline-flex min-h-[50px] items-center gap-2 rounded-lg bg-navy px-6 font-bold text-white hover:opacity-90"><Icon name="nav" className="h-5 w-5" /> Directions</a>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn inline-flex min-h-[50px] items-center gap-2 rounded-lg border-2 border-line px-6 font-bold hover:bg-tint">View on Google Maps</a>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                title="Map showing TranZen Transmission and Auto Repair at 2349 Albatross Way, Sacramento"
                src="https://maps.google.com/maps?q=2349%20Albatross%20Way%2C%20Sacramento%2C%20CA%2095815&z=15&output=embed"
                className="h-[360px] w-full md:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-6">
            <h2 className="text-3xl font-extrabold md:text-[2.6rem]">Common questions</h2>
            <div className="mt-8 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-xl border border-line bg-white px-6 py-5">
                  <summary className="flex items-center justify-between gap-6 text-lg font-bold">
                    {f.q}
                    <span className="plus grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft text-brand-deep" aria-hidden="true">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                    </span>
                  </summary>
                  <p className="mt-3 pr-10 text-[16px] text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand text-white">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-5 py-14 md:flex-row md:items-center md:justify-between md:px-6 md:py-16">
            <div>
              <h2 className="text-3xl font-extrabold md:text-[2.5rem]">Transmission acting up? Call Tony.</h2>
              <p className="mt-3 text-lg text-white/85">Honest diagnosis and a fair price before any work starts. {ADDRESS}.</p>
            </div>
            <a href={TEL} className="btn inline-flex min-h-[58px] shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-8 text-lg font-extrabold text-brand-deep hover:bg-brand-soft"><Icon name="phone" className="h-5 w-5" /> {PHONE}</a>
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:px-6">
          <div>
            <span className="font-[family-name:var(--font-heading)] text-xl font-extrabold">TranZen Transmission &amp; Auto Repair</span>
            <p className="mt-3 text-[16px] text-muted">{ADDRESS}</p>
            <p className="mt-1 text-[16px]"><a href={TEL} className="font-bold hover:text-brand">{PHONE}</a></p>
            <p className="mt-1 text-[15px] text-muted">Locally owned since September 2010</p>
          </div>
          <div>
            <h3 className="font-bold">Services</h3>
            <ul className="mt-3 space-y-1.5 text-[15px] text-muted">
              <li>Transmission repair</li>
              <li>Automatic transmission rebuilds</li>
              {otherServices.map((s) => <li key={s.title}>{s.title}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Find us</h3>
            <ul className="mt-3 space-y-1.5 text-[15px]">
              <li><a href={MAPS} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-brand">Google Maps</a></li>
              <li><a href={REVIEWS} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-brand">Customer reviews</a></li>
              <li><a href="https://www.yellowpages.com/sacramento-ca/mip/tranzen-transmission-auto-repair-460106080" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-brand">Yellow Pages</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-line py-5 text-center text-sm text-muted">&copy; {new Date().getFullYear()} TranZen Transmission &amp; Auto Repair. Sacramento, CA.</div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white p-2.5 md:hidden">
        <a href={TEL} className="btn flex min-h-[50px] items-center justify-center gap-2 rounded-lg bg-cta font-bold text-white"><Icon name="phone" className="h-5 w-5" /> Call</a>
        <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn flex min-h-[50px] items-center justify-center gap-2 rounded-lg bg-navy font-bold text-white"><Icon name="nav" className="h-5 w-5" /> Directions</a>
      </div>
    </>
  );
}
