import Head from "next/head";
export default function Layout({ children, page, title, description }: { children: React.ReactNode, page: string, title: string, description: string }) {
  const siteTitle = "Prompland: AI Prompt Sharing, Creation & Discovery Platform";

  return (
    <div className="bg-gray-50">
      <Head>
        <title>{`${title} | ${siteTitle}`}</title>
        <link rel="icon" href="/images/logos/logo.png" type="image/svg"></link>
        <meta name="description" content={description} />
        <meta name="keywords" content="AI prompts, Prompland, artificial intelligence, AI, community, platform, share, create, discover, prompts, ChatGPT prompt, Chat GPT integration, ChatGPT automation, ChatGPT, GPT-4, AI prompt sharing, AI prompt creation, AI prompt discovery" />
        <meta name="og:title" content={`${page} | ${siteTitle}`} />
        <meta name="og:description" content="Prompland is a community platform for sharing, creating, and discovering AI prompts. Explore and contribute to the world of AI prompts today!" />
        <meta name="og:image" content="/images/logos/logo.png" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://www.prompland.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${page} | ${siteTitle}`} />
        <meta name="twitter:description" content="Prompland is a community platform for sharing, creating, and discovering AI prompts. Explore and contribute to the world of AI prompts today!" />
        <meta name="twitter:image" content="/images/logos/logo.png" />
        <link
          href="/images/logos/logo.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/images/logos/logo.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/images/logos/logo.png"></link>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>{children}</main>
    </div>
  );
}
