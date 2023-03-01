import Head from 'next/head';
import Layout from '../components/base/layout';
import FooterHome from '../components/footer/footer-home'
import NavigationHome from '../components/navbar/navigation-home'
import Faq from '../components/pages/home/faq'
import Features from '../components/pages/home/features'
import Hero from '../components/pages/home/hero'
import LogoCloud from '../components/pages/home/logo-cloud'
import Product from '../components/pages/home/product';
import Testimonials from '../components/pages/home/testimonials'

export default function Home() {
  return (
    <Layout page="home">
      <Head>
        <title>Pocket Forest</title>
      </Head>
      {/* Header */}
      <NavigationHome />

      <main id="home" className="isolate">
        {/* Hero section */}
        <Hero />
        {/* Logo cloud */}
        <LogoCloud />

        {/* Testimonial section */}
        <Testimonials />

        {/* Product section */}
        <Product />

        {/* Feature section */}
        <Features />

        {/* FAQs */}
        <Faq />

        {/* CTA section */}
        {/* <Cta /> */}
      </main>

      {/* Footer */}
      <FooterHome />
    </Layout>
  )
}
