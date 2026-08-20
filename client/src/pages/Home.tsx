/** Telangana Feast Editorial: a cinematic, enquiry-first home page with food-led storytelling and ceremonial details. */
import { ArrowRight, CalendarHeart, ChefHat, Check, Clock3, Sparkles, Star, UtensilsCrossed, UsersRound } from "lucide-react";
import { Link } from "wouter";
import { BUSINESS, PageShell } from "@/components/SiteChrome";
import { Seo } from "@/components/Seo";

const heroImage = "/manus-storage/dhruva-buffet-hero_5062b44e.webp";
const brassBuffet = "/manus-storage/dhruva-brass-buffet_7590f1e7.jpg";

const services = [
  { icon: CalendarHeart, title: "Wedding & reception", label: "Wedding banquets", image: "/manus-storage/dhruva-wedding-table_374d063a.jpg", alt: "An Indian wedding table arranged with celebration food", copy: "Well-paced banquet service and menus designed around the occasion." },
  { icon: Sparkles, title: "Live counter moments", label: "Live service", image: "/manus-storage/dhruva-live-counter_5f6ac40b.jpg", alt: "Chefs preparing food at a live catering counter", copy: "Freshly made counter experiences that bring energy to the celebration." },
  { icon: UtensilsCrossed, title: "Family occasions", label: "Private celebrations", image: "/manus-storage/dhruva-desserts_9d002133.jpg", alt: "Traditional Indian sweets arranged for a private celebration", copy: "Intimate engagement, birthday, and house-event catering from 50 guests." },
  { icon: UsersRound, title: "Corporate gatherings", label: "Large-format service", image: "/manus-storage/dhruva-menu-spread_55792867.jpg", alt: "A generous Indian food spread prepared for a catered gathering", copy: "Dependable meal service for teams, launches, conferences, and large groups." },
];

const eventScales = [
  { number: "50–200", name: "Intimate", copy: "House events & family celebrations", fill: "w-[34%]" },
  { number: "200–1,000", name: "Grand", copy: "Weddings & receptions", fill: "w-[66%]" },
  { number: "1,000–5,000+", name: "Mega events", copy: "Large celebrations & corporate gatherings", fill: "w-full" },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "CateringService"],
  name: "Dhruva Catering Services",
  telephone: "+91 98494 93933",
  address: { "@type": "PostalAddress", streetAddress: "Lead India School, Hunter Rd, Dwaraka Nagar, Shyampet", addressLocality: "Hanamkonda", addressRegion: "Telangana", postalCode: "506001", addressCountry: "IN" },
  openingHours: "Mo-Su 00:00-23:59",
  areaServed: ["Hanamkonda", "Warangal", "Telangana"],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "136" },
  url: window.location.origin,
};

function SectionFlag({ children }: { children: string }) {
  return <p className="flex items-center gap-3 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#9A5C0E]"><span className="h-px w-9 bg-[#D4AF37]" />{children}</p>;
}

export default function Home() {
  return (
    <PageShell>
      <Seo title="Dhruva Catering Services | Best Catering Services in Hanamkonda" description="Dhruva Catering Services creates memorable wedding, family, live-counter and corporate catering experiences in Hanamkonda, Warangal and across Telangana." />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <main>
        <section className="relative isolate min-h-[670px] overflow-hidden bg-[#41100D] text-[#FFF9EF] lg:min-h-[690px]">
          <img src={heroImage} alt="An abundant Indian wedding buffet prepared for a celebration" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[68%_center]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(47,9,7,0.92)_0%,rgba(65,16,13,0.84)_35%,rgba(65,16,13,0.28)_66%,rgba(28,6,4,0.22)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#41100D]/85 to-transparent" />
          <div className="relative mx-auto flex min-h-[670px] max-w-[1440px] items-center px-5 py-20 sm:px-8 lg:min-h-[690px] lg:px-10">
            <div className="max-w-2xl">
              <p className="flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.21em] text-[#FFD27A]"><span className="h-px w-10 bg-[#D4AF37]" /> Hanamkonda · Telangana</p>
              <h1 className="mt-7 max-w-xl font-display text-[clamp(3rem,6.4vw,6.7rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-[#FFF9EF]">Exceptional taste <span className="font-medium italic text-[#FFC16B]">&</span> flawless catering.</h1>
              <p className="mt-7 max-w-lg font-body text-lg leading-8 text-[#FFF9EF]/80">From intimate family gatherings to grand weddings in Hanamkonda and beyond, we shape a table your guests remember.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F28C28] px-6 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-[#451207] transition-all duration-200 hover:-translate-y-1 hover:bg-[#FFB35F] active:scale-[0.97]">Request custom menu & quote <ArrowRight className="size-4" /></a>
                <a href={BUSINESS.phoneHref} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/35 bg-white/5 px-6 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-white backdrop-blur-sm transition-colors hover:bg-white/15">Call {BUSINESS.phone}</a>
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-[#FFF9EF]/84">
                <span className="inline-flex items-center gap-2"><ChefHat className="size-4 text-[#FFC16B]" />From 50 to 5,000+ guests</span>
                <span className="inline-flex items-center gap-2"><Clock3 className="size-4 text-[#FFC16B]" />Available 24 / 7</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F28C28] via-[#D4AF37] to-transparent" />
        </section>

        <section className="relative bg-[#FFF9EF] py-20 sm:py-24">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.45fr] lg:items-end">
              <div><SectionFlag>Made for every scale</SectionFlag><h2 className="mt-5 max-w-md font-display text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-[#621111]">The right pace, whatever the guest list.</h2></div>
              <p className="max-w-xl font-body text-base leading-7 text-[#714D40]">Dhruva brings calm coordination to tables of every size. Start with a family celebration, scale up to a wedding weekend, or plan service for thousands.</p>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {eventScales.map((scale) => <article key={scale.name} className="border-t border-[#800000]/20 pt-5"><p className="font-display text-3xl font-semibold tracking-[-0.04em] text-[#800000]">{scale.number}</p><div className="mt-4 h-1 overflow-hidden bg-[#F3E0BF]"><div className={`h-full bg-[#F28C28] ${scale.fill}`} /></div><p className="mt-4 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#9A5C0E]">{scale.name}</p><p className="mt-2 font-body text-sm text-[#714D40]">{scale.copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-[#F6E9D5] py-20 sm:py-28">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">
            <div className="relative min-h-[440px] overflow-hidden rounded-[2.3rem_0.75rem_2.3rem_0.75rem] bg-[#621111] shadow-[16px_18px_0_#D4AF37]">
              <img src={brassBuffet} alt="Catered Indian dishes arranged in polished serving vessels" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4C100C]/65 via-transparent to-transparent" />
              <span className="absolute bottom-6 left-6 rounded-full border border-white/35 bg-[#621111]/75 px-4 py-2 text-[0.63rem] font-bold uppercase tracking-[0.17em] text-white backdrop-blur">Craft & generosity</span>
            </div>
            <div className="flex flex-col justify-center"><SectionFlag>Our way of hosting</SectionFlag><h2 className="mt-5 max-w-xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#621111]">Food that feels generous. Service that feels effortless.</h2><p className="mt-6 max-w-xl font-body text-base leading-7 text-[#714D40]">Traditional Telangana, South Indian and North Indian flavours meet structured planning, hygienic kitchens, and a trained service team. Every menu is adjusted to your occasion—not selected from a fixed script.</p><Link href="/about" className="mt-8 inline-flex w-fit min-h-11 items-center gap-2 border-b-2 border-[#F28C28] pb-1 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-[#800000] transition-colors hover:text-[#F28C28]">Meet the Dhruva team <ArrowRight className="size-4" /></Link></div>
          </div>
        </section>

        <section className="bg-[#FFF9EF] py-20 sm:py-28">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10"><SectionFlag>What we bring to the table</SectionFlag><div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end"><h2 className="max-w-2xl font-display text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-[#621111]">A considered spread for every kind of gathering.</h2><Link href="/services" className="inline-flex min-h-11 items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-[#800000] hover:text-[#F28C28]">See all services <ArrowRight className="size-4" /></Link></div>
            <div className="mt-12 grid divide-y divide-[#800000]/15 border-y border-[#800000]/15 md:grid-cols-2 md:divide-x md:divide-y-0">
              {services.map((service, index) => { const Icon = service.icon; return <article key={service.title} className={`group p-5 transition-colors hover:bg-[#F6E9D5] sm:p-7 ${index > 1 ? "md:pt-8" : ""}`}><div className="relative aspect-[16/9] overflow-hidden rounded-[38%_38%_1.2rem_1.2rem/14%_14%_1.2rem_1.2rem] border border-[#D4AF37]/75 bg-[#621111] p-1"><img src={service.image} alt={service.alt} loading="lazy" decoding="async" className="h-full w-full rounded-[38%_38%_1rem_1rem/14%_14%_1rem_1rem] object-cover transition-transform duration-500 group-hover:scale-[1.045]" /><span className="absolute bottom-3 left-3 rounded-full bg-[#621111]/90 px-3 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-white backdrop-blur">{service.label}</span></div><div className="mt-6 flex items-start justify-between gap-6"><Icon className="size-6 text-[#F28C28]" strokeWidth={1.8} /><span className="font-display text-xl italic text-[#D4AF37]">0{index + 1}</span></div><h3 className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em] text-[#621111]">{service.title}</h3><p className="mt-3 max-w-sm font-body text-sm leading-6 text-[#714D40]">{service.copy}</p></article>})}
            </div>
          </div>
        </section>

        <section className="bg-[#621111] py-16 text-[#FFF9EF] sm:py-20"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 md:grid-cols-[0.82fr_1.18fr] md:items-center lg:px-10"><div className="rounded-[1.5rem_0.4rem_1.5rem_0.4rem] border border-[#D4AF37]/60 bg-[#7B2118] p-7 sm:p-9"><div className="flex items-center gap-1 text-[#FFD270]">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-5" fill="currentColor" />)}</div><p className="mt-5 font-display text-5xl font-semibold tracking-[-0.06em]">4.8<span className="text-[#F28C28]">/5</span></p><p className="mt-2 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-[#F9E7D0]/75">Google rating · 136+ reviews</p></div><div><SectionFlag>Chosen with confidence</SectionFlag><h2 className="mt-5 max-w-xl font-display text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-[#FFF9EF]">A local table, trusted for the big day.</h2><p className="mt-5 max-w-xl font-body text-base leading-7 text-[#F9E7D0]/80">A strong Google rating reflects the care Dhruva brings to every menu, timing plan, and guest experience.</p></div></div></section>

        <section className="bg-[#F28C28] px-5 py-16 text-[#451207] sm:px-8 sm:py-20 lg:px-10"><div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 lg:flex-row lg:items-center"><div><p className="text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#6C2110]">Begin with your occasion</p><h2 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[0.96] tracking-[-0.055em]">Tell us the date, your guest count, and how you want the table to feel.</h2></div><Link href="/contact" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#621111] px-6 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-white transition-all hover:-translate-y-1 hover:bg-[#451207] active:scale-[0.97]">Plan your menu <ArrowRight className="size-4" /></Link></div></section>
      </main>
    </PageShell>
  );
}
