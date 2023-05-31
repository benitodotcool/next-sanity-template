import { ReactNode } from "react";
import type { Metadata } from "next";
import { groq } from "next-sanity";
import { clientFetch } from "@/lib/sanity";
import { SEO_SEPARATOR, WEBSITE_BASE_URL } from "@/constants";

export async function generateMetadata(): Promise<Metadata> {
  const worksMetadata = await clientFetch<any>(METADATA_QUERY, {
    next: { revalidate: 10 },
  });
  const metadata = worksMetadata?.meta;
  const baseTitle = worksMetadata?.baseTitle;

  return {
    title: `${metadata?.title}${SEO_SEPARATOR}${baseTitle}`,
    openGraph: {
      title: metadata?.title,
      description: metadata?.description,
      siteName: metadata?.globalSiteName,
      url: `${WEBSITE_BASE_URL}/works`,
      locale: "en-US",
      type: "website",
    },
    keywords: metadata?.keywords,
  };
}

const METADATA_QUERY = groq`
  *[_type == 'metaCollection'][0] {
    meta{
      'title': title.en,
      'description': description.en,
      'keywords': keywords.en
    },
    'baseTitle': *[_type == 'settings'][0].meta.title.en
  }
`;

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return <div>{children}</div>;
}
