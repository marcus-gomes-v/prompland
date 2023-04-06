import Head from 'next/head';
import AnimationCanvas from '../components/animation/AnimationCanvas';
import RotatingCube from '../components/animation/RotatingCube';
import Layout from '../components/base/layout';
import FooterHome from '../components/footer/footer-home'
import NavigationHome from '../components/navbar/navigation-home'
import Faq from '../components/pages/home/faq'
import Features from '../components/pages/home/features'
import Hero from '../components/pages/home/hero'
import LogoCloud from '../components/pages/home/logo-cloud'
import Product from '../components/pages/home/product';
import Testimonials from '../components/pages/home/testimonials'
import AnimationCanvasCore from '../components/animation/AnimationCanvasCore';
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
