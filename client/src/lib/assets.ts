/** Telangana Feast Editorial: one public, versioned GitHub release supplies every food image so the editorial composition stays intact across hosting platforms. */
const RELEASE_BASE = "https://github.com/PendyalaPradeepReddy/dhruva-catering-services/releases/download/site-assets-v1";

const fromRelease = (filename: string) => `${RELEASE_BASE}/${filename}`;

export const ASSETS = {
  hero: fromRelease("dhruva-buffet-hero.webp"),
  brassBuffet: fromRelease("dhruva-brass-buffet-optimized.webp"),
  weddingTable: fromRelease("dhruva-wedding-table-fast.webp"),
  liveCounter: fromRelease("dhruva-live-counter-optimized.webp"),
  desserts: fromRelease("dhruva-desserts-optimized.webp"),
  menuSpread: fromRelease("dhruva-menu-spread-optimized.webp"),
  copperBuffet: fromRelease("dhruva-copper-buffet.jpeg"),
  serviceTable: fromRelease("dhruva-service-table-optimized.webp"),
  eventPlating: fromRelease("dhruva-event-plating.jpg"),
  serviceCloseup: fromRelease("dhruva-service-closeup.jpg"),
  biryani: fromRelease("dhruva-biryani-hero.jpg"),
  sampleMenu: fromRelease("dhruva-catering-menu.pdf"),
} as const;
