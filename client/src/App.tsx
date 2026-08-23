/** Telangana Feast Editorial: all routes share a composed hospitality shell with clear, conversion-ready movement between pages. */
import { Toaster } from "@/components/ui/sonner";
import { Route, Switch } from "wouter";
import { lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LoadingScreen } from "./components/LoadingScreen";
import { PageTransition } from "./components/PageTransition";
import { LocalSeo } from "./components/LocalSeo";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Menu = lazy(() => import("./pages/Menu"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function Router() {
  return <Suspense fallback={<main aria-live="polite" className="min-h-screen bg-[#FFF9EF]" />}><Switch><Route path="/" component={Home} /><Route path="/about" component={About} /><Route path="/services" component={Services} /><Route path="/menu" component={Menu} /><Route path="/gallery" component={Gallery} /><Route path="/contact" component={Contact} /><Route component={NotFound} /></Switch></Suspense>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><LoadingScreen /><LocalSeo /><Toaster /><PageTransition><Router /></PageTransition></ThemeProvider></ErrorBoundary>;
}
