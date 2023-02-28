import Head from 'next/head';
import Layout from '../components/base/layout';
import FooterHome from '../components/footer/footer-home'
import NavigationHome from '../components/navbar/navigation-home'
import Cta from '../components/pages/home/cta'
import Faq from '../components/pages/home/faq'
import Features from '../components/pages/home/features'
import Hero from '../components/pages/home/hero'
import LogoCloud from '../components/pages/home/logo-cloud'
import Pricing from '../components/pages/home/pricing'
import Testimonials from '../components/pages/home/testimonials'

export default function Home() {
  return (
    <Layout page="home">
      <Head>
        <title>Pocket Forest</title>
      </Head>
      {/* Header */}
      <NavigationHome />

      <main className="isolate">
        {/* Hero section */}
        <Hero />
        {/* Logo cloud */}
        <LogoCloud />

        {/* Feature section */}
        <Features />

        {/* Testimonial section */}
        <Testimonials />

        {/* Pricing section */}
        <Pricing />

        {/* FAQs */}
        <Faq />

        {/* CTA section */}
        <Cta />
      </main>

      {/* Footer */}
      <FooterHome />
    </Layout>
  )
}
