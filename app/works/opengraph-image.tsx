import { ImageResponse } from "next/server";
import { groq } from "next-sanity";
import { clientFetch } from "@/lib/sanity";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default async function og() {
  const metaTitle = await clientFetch<string>(IMAGE_QUERY, {
    next: { revalidate: 10 },
  });

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "1200px",
          height: "630px",
        }}
      >
        <h1>{metaTitle}</h1>
      </div>
    )
  );
}

const IMAGE_QUERY = groq`
  *[_type == 'metaCollection'][0].meta.title.en
`;
