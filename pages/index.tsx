import Head from 'next/head';
import Layout from '../components/base/layout';
import FooterHome from '../components/footer/footer-home'
import NavigationHome from '../components/navbar/navigation-home'
import Hero from '../components/pages/home/hero'
import Testimonials from '../components/pages/home/testimonials'
import AnimationCanvasBall from '../components/animation/AnimationCanvasBall';

export default function Home() {
  return (
    <Layout page="home">
      <Head>
        <title>Prompland</title>
      </Head>
      {/* Header */}
      <NavigationHome />
      
      <main id="home" className="isolate">
        <AnimationCanvasBall />

        {/* Hero section */}
        <Hero />
        
        {/* Testimonial section */}
        <Testimonials />


      </main>

      {/* Footer */}
      <FooterHome />
    </Layout>
  )
}
