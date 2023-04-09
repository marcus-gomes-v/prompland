import Head from 'next/head';
import Layout from '../components/base/layout';
import FooterHome from '../components/footer/footer-home'
import NavigationHome from '../components/navbar/navigation-home'
import Hero from '../components/pages/home/hero'
import Testimonials from '../components/pages/home/testimonials'
import AnimationCanvasBall from '../components/animation/AnimationCanvasBall';

export default function Home() {
  const pageTitle = "Prompland: AI Prompt Sharing, Creation & Discovery Platform";
  const pageDescription = 'Prompland is a platform to discover, create, and share writing prompts with a community of writers and readers. Sign up now to get started!';


  return (
    <Layout page={pageTitle} title={pageTitle} description={pageDescription}>
      {/* Header */}
      <NavigationHome />
      
      <main id="home" className="isolate">
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: -1,
          }}
        >
          <AnimationCanvasBall />
        </div>

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
