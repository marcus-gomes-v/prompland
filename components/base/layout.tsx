import Head from "next/head"
export default function Layout({ children, page }: { children: React.ReactNode, page: string }) {
  const siteTitle = "Beach Association"

  return (
   <div className="bg-gray-50">
      <Head>
        <link rel="icon" href="/images/logos/logo.svg" type={`image/svg`}></link>
        <meta
          name="description"
          content="The best platform to have classes and controll your students"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          href="/images/logos/logo.svg"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/images/logos/logo.svg"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/images/logos/logo.svg"></link>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#FFFFFF" />
      </Head>
      <main>{children}</main>
   </div>
  )
}
