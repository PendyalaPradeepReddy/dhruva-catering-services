/** Telangana Feast Editorial: a staggered portfolio treats event imagery like a visual diary, not a uniform card gallery. */
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { PageShell } from "@/components/SiteChrome";
import { Seo } from "@/components/Seo";
import { ASSETS } from "@/lib/assets";

const gallery = [
  { src: ASSETS.eventPlating, alt: "An abundant catering arrangement at a celebration", label: "Celebration spreads", tall: true },
  { src: ASSETS.serviceCloseup, alt: "Catered Indian dishes served in a buffet setting", label: "Made for the table", tall: false },
  { src: ASSETS.desserts, alt: "Indian sweets arranged for a celebration", label: "A sweet finish", tall: false },
  { src: ASSETS.brassBuffet, alt: "Polished Indian buffet serving vessels", label: "The buffet line", tall: true },
];

export default function Gallery() { return <PageShell><Seo title="Catering Gallery | Dhruva Catering Services" description="Browse a selection of buffet spreads, celebration food displays and catering details from Dhruva Catering Services in Hanamkonda." /><main>
  <section className="bg-[#F6E9D5] px-5 py-20 sm:px-8 sm:py-28 lg:px-10"><div className="mx-auto max-w-[1440px]"><p className="text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#9A5C0E]">The visual table</p><h1 className="mt-6 max-w-4xl font-display text-[clamp(3.4rem,6.8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-[#621111]">A feast begins long before the first plate.</h1></div></section>
  <section className="bg-[#FFF9EF] py-16 sm:py-20"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10"><div className="grid gap-5 md:grid-cols-2"><div className="space-y-5">{gallery.filter((_, i) => i % 2 === 0).map((item) => <figure key={item.src} className={`group relative overflow-hidden rounded-[1.9rem_0.45rem_1.9rem_0.45rem] ${item.tall ? "min-h-[480px]" : "min-h-[350px]"}`}><img src={item.src} alt={item.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" /><figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#3C0D09]/75 to-transparent px-6 pb-6 pt-16 text-[0.67rem] font-bold uppercase tracking-[0.16em] text-white">{item.label}</figcaption></figure>)}</div><div className="space-y-5 md:pt-20">{gallery.filter((_, i) => i % 2 === 1).map((item) => <figure key={item.src} className={`group relative overflow-hidden rounded-[0.45rem_1.9rem_0.45rem_1.9rem] ${item.tall ? "min-h-[480px]" : "min-h-[350px]"}`}><img src={item.src} alt={item.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" /><figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#3C0D09]/75 to-transparent px-6 pb-6 pt-16 text-[0.67rem] font-bold uppercase tracking-[0.16em] text-white">{item.label}</figcaption></figure>)}</div></div></div></section>
  <section className="bg-[#F28C28] px-5 py-16 sm:px-8 lg:px-10"><div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-7 lg:flex-row lg:items-center"><h2 className="max-w-2xl font-display text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-[#451207]">Ready to imagine your own table?</h2><Link href="/contact" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#621111] px-6 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-white hover:-translate-y-0.5 hover:bg-[#451207] active:scale-[0.97]">Request a quote <ArrowRight className="size-4" /></Link></div></section>
</main></PageShell>; }
