import { MetadataRoute } from "next";

// Docs for this file: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest#generate-a-manifest-file
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Berlingske Media - Free and Responsible Press",
    short_name: "Berlingske Media",
    description:
      "Berlingske Media provides independent, conservative journalism through Berlingske, B.T., Weekendavisen, and Euroinvestor. It focuses on democracy, free speech, and informed citizenship.",
    categories: ["news", "media", "journalism", "democracy", "free speech"],
    start_url: "/",
    display: "browser",
    background_color: "#004F39",
    theme_color: "#004F39",
    lang: "en",
    // icons: [
    //   {
    //     src: "/icons/favicon48x48.png",
    //     sizes: "48x48",
    //     type: "image/png",
    //   },
    // ],
  };
}
