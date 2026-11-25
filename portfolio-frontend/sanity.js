import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: "0dyfyoih",
  dataset: "production",
  apiVersion: "2026-09-11",
  useCdn: false, // Disabling CDN prevents edge connection timeouts in local development
});

const builder = createImageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export function getImageUrl(source) {
  if (!source) return "";
  if (typeof source === "string") return source;
  if (source.url) return source.url;
  if (source.asset?.url) return source.asset.url;
  try {
    return builder.image(source).url() || "";
  } catch {
    return "";
  }
}
