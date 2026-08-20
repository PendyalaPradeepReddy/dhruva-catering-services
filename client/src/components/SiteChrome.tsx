/** Telangana Feast Editorial: composed Indian hospitality, maroon-and-saffron warmth, and practical enquiry-first navigation. */
import { Menu, Phone, X, MessageCircle, MapPin, Clock3, ArrowUpRight } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";

export const BUSINESS = {
  phone: "+91 98494 93933",
  phoneHref: "tel:+919849493933",
  whatsapp: "https://wa.me/919849493933?text=Hi%20Dhruva%20Catering%2C%20I%20would%20like%20to%20inquire%20about%20a%20catering%20menu%20for%20an%20upcoming%20event.",
  address: "Lead India School, Hunter Rd, Dwaraka Nagar, Shyampet, Hanamkonda, Telangana 506001",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Story" },
  { href: "/services", label: "Services" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

function BrandMark() {
  return (
    <span aria-hidden="true" className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-full border border-[#D4AF37]/70 bg-[#800000] shadow-[0_6px_14px_rgba(84,14,14,0.2)]">
      <span className="absolute h-5 w-5 -rotate-45 rounded-[100%_0_100%_0] bg-[#F28C28]" />
      <span className="absolute top-[8px] h-[2px] w-7 rounded-full bg-[#D4AF37]" />
      <span className="absolute top-[12px] h-[2px] w-5 rounded-full bg-[#D4AF37]" />
    </span>
  );
}

export function BrandLockup({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Dhruva Catering Services home">
      <BrandMark />
      <span className="leading-none">
        <span className={`block font-display text-[1.3rem] font-semibold tracking-[-0.04em] ${dark ? "text-[#FFF9EF]" : "text-[#621111]"}`}>Dhruva</span>
        <span className={`mt-1 block text-[0.59rem] font-bold uppercase tracking-[0.22em] ${dark ? "text-[#D4AF37]" : "text-[#995D14]"}`}>Catering Services</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const setHeader = () => setScrolled(window.scrollY > 16);
    setHeader();
    window.addEventListener("scroll", setHeader, { passive: true });
    return () => window.removeEventListener("scroll", setHeader);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${scrolled ? "border-b border-[#7B2118]/10 bg-[#FFF9EF]/95 shadow-[0_8px_28px_rgba(83,26,15,0.08)] backdrop-blur-xl" : "border-b border-[#7B2118]/10 bg-[#FFF9EF]"}`}>
      <div className="mx-auto flex min-h-[76px] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <BrandLockup />
        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Main navigation">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} aria-current={location === item.href ? "page" : undefined} className={`text-[0.7rem] font-bold uppercase tracking-[0.13em] transition-colors hover:text-[#F28C28] ${location === item.href ? "text-[#800000]" : "text-[#5B3125]"}`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={BUSINESS.phoneHref} className="group flex min-h-11 items-center gap-2 text-sm font-bold text-[#621111] transition-colors hover:text-[#F28C28]">
            <Phone className="size-4 transition-transform duration-200 group-hover:-rotate-12" strokeWidth={2.3} />
            <span>Call Now</span>
          </a>
          <Link href="/contact" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#800000] px-5 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#621111] active:scale-[0.97]">
            Get a quote <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <button type="button" onClick={() => setMenuOpen((value) => !value)} className="grid size-11 place-items-center rounded-full border border-[#800000]/20 text-[#800000] lg:hidden" aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {menuOpen && (
        <nav className="absolute inset-x-3 top-[68px] rounded-2xl border border-[#800000]/10 bg-[#FFF9EF] p-3 shadow-[0_20px_45px_rgba(83,26,15,0.16)] lg:hidden" aria-label="Mobile navigation">
          <div className="grid gap-1">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className={`rounded-xl px-4 py-3 text-sm font-bold ${location === item.href ? "bg-[#800000] text-white" : "text-[#5B3125] hover:bg-[#F7EBD7]"}`}>
                {item.label}
              </Link>
            ))}
            <a href={BUSINESS.phoneHref} className="mt-2 flex min-h-11 items-center gap-2 rounded-xl bg-[#F28C28] px-4 text-sm font-bold text-[#421005]">
              <Phone className="size-4" /> Call {BUSINESS.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#641310] text-[#FFF9EF]">
      <div className="pointer-events-none absolute -right-20 -top-24 size-80 rounded-full border-[28px] border-[#D4AF37]/10" />
      <div className="relative mx-auto max-w-[1440px] px-5 pb-8 pt-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.8fr_1.1fr]">
          <div>
            <BrandLockup dark />
            <p className="mt-6 max-w-md font-body text-base leading-7 text-[#F9E7D0]/80">Composed hospitality and generous Indian food for celebrations of every scale—right from Hanamkonda.</p>
            <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#F28C28] px-5 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-[#451207] transition-all hover:-translate-y-0.5 hover:bg-[#FFAD54] active:scale-[0.97]">
              <MessageCircle className="size-4" /> Ask on WhatsApp
            </a>
          </div>
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#D4AF37]">Explore</p>
            <ul className="mt-5 grid gap-3">
              {navLinks.slice(1).map((item) => <li key={item.href}><Link href={item.href} className="font-body text-sm text-[#F9E7D0]/80 transition-colors hover:text-[#F28C28]">{item.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#D4AF37]">Find Dhruva</p>
            <div className="mt-5 grid gap-4 font-body text-sm leading-6 text-[#F9E7D0]/80">
              <p className="flex gap-3"><MapPin className="mt-1 size-4 shrink-0 text-[#F28C28]" />{BUSINESS.address}</p>
              <p className="flex gap-3"><Clock3 className="mt-1 size-4 shrink-0 text-[#F28C28]" />Open 24 hours, 7 days a week</p>
              <a href={BUSINESS.phoneHref} className="flex gap-3 transition-colors hover:text-[#F28C28]"><Phone className="mt-1 size-4 shrink-0 text-[#F28C28]" />{BUSINESS.phone}</a>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-[#F9E7D0]/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dhruva Catering Services. All rights reserved.</p>
          <p>Wedding catering · Corporate events · Live counters</p>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" aria-label="Start a WhatsApp enquiry with Dhruva Catering" className="fixed bottom-5 right-5 z-50 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#25D366] px-4 font-body text-sm font-bold text-[#062E16] shadow-[0_14px_30px_rgba(11,83,43,0.32)] transition-all duration-200 hover:-translate-y-1 hover:bg-[#54E58A] active:scale-[0.97] sm:bottom-6 sm:right-6">
      <MessageCircle className="size-5" fill="currentColor" strokeWidth={2.2} />
      <span className="hidden sm:inline">WhatsApp us</span>
    </a>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen overflow-x-hidden bg-[#FFF9EF] text-[#321B16]"><SiteHeader />{children}<SiteFooter /><FloatingWhatsApp /></div>;
}
