import { cache } from "react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

// https://github.com/sanity-io/next-sanity#appdir-react-server-components-and-caching

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
});

export const clientFetch = cache(client.fetch.bind(client));
export const builder = imageUrlBuilder(client);
