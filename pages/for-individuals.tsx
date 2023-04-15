import Head from 'next/head';
import Layout from '../components/base/layout';
import FooterHome from '../components/footer/footer-home'
import NavigationHome from '../components/navbar/navigation-home'
import ForCreatorsFeatures from '../components/pages/home/for-creators-features';
import HeroForIndividuals from '../components/pages/home/hero-for-individuals';
import ForIndividualsFeatures from '../components/pages/home/for-individuals-features';

export default function ForCreators() {
  const pageTitle = "Prompland Creators: Monetize Your AI Prompt Expertise";
  const pageDescription = "Join Prompland's thriving community of AI prompt creators and unlock revenue opportunities by sharing, selling, and fulfilling custom prompt requests. Promote your skills, climb the rankings, and make a meaningful impact in the AI-driven world.";


  return (
    <Layout page={pageTitle} title={pageTitle} description={pageDescription}>
      {/* Header */}
      <NavigationHome />
      
      <main id="about" className="isolate">
        

        {/* Hero section */}
        <HeroForIndividuals />

        <ForIndividualsFeatures />


      </main>

      {/* Footer */}
      <FooterHome />
    </Layout>
  )
}
