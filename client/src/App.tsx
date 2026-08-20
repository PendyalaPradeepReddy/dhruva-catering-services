/** Telangana Feast Editorial: all routes share a composed hospitality shell with clear, conversion-ready movement between pages. */
import { Toaster } from "@/components/ui/sonner";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function Router() {
  return <Switch><Route path="/" component={Home} /><Route path="/about" component={About} /><Route path="/services" component={Services} /><Route path="/menu" component={Menu} /><Route path="/gallery" component={Gallery} /><Route path="/contact" component={Contact} /><Route component={NotFound} /></Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><Toaster /><Router /></ThemeProvider></ErrorBoundary>;
}
