/** Telangana Feast Editorial: clear local discoverability with useful page titles and straightforward metadata. */
import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  image?: string;
};

function upsertMeta(attribute: "name" | "property", key: string, value: string) {
  let tag = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", value);
}

export function Seo({ title, description, image = "/manus-storage/dhruva-buffet-hero_5062b44e.webp" }: SeoProps) {
  useEffect(() => {
    document.title = title;
    const url = `${window.location.origin}${window.location.pathname}`;
    const imageUrl = image.startsWith("http") ? image : `${window.location.origin}${image}`;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", "index, follow, max-image-preview:large");
    upsertMeta("property", "og:site_name", "Dhruva Catering Services");
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:locale", "en_IN");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, image]);

  return null;
}
