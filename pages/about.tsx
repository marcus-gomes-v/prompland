import Head from 'next/head';
import Layout from '../components/base/layout';
import FooterHome from '../components/footer/footer-home'
import NavigationHome from '../components/navbar/navigation-home'
import Hero from '../components/pages/home/hero'
import Testimonials from '../components/pages/home/testimonials'
import AnimationCanvasBall from '../components/animation/AnimationCanvasBall';
import HeroAbout from '../components/pages/home/hero-about';
import AnimationLogo from '../components/animation/AnimationLogo';
import ForWhoAbout from '../components/pages/home/for-who-about';

export default function About() {
  const pageTitle = "About Prompland: Empowering Creators, Individuals & Companies with AI Prompts";
  const pageDescription = "Discover how Prompland's AI prompt sharing, creation, and discovery platform empowers creators, individuals, and companies to harness the power of AI and optimize their work in today's rapidly evolving world.";


  return (
    <Layout page={pageTitle} title={pageTitle} description={pageDescription}>
      {/* Header */}
      <NavigationHome />
      
      <main id="about" className="isolate">
        <div className="flex justify-center">
          <AnimationLogo width={256} height={256} amount={1500} />
        </div>

        {/* Hero section */}
        <HeroAbout />

        <ForWhoAbout />


      </main>

      {/* Footer */}
      <FooterHome />
    </Layout>
  )
}
