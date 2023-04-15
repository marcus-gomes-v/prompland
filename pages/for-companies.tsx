import Head from 'next/head';
import Layout from '../components/base/layout';
import FooterHome from '../components/footer/footer-home'
import NavigationHome from '../components/navbar/navigation-home'
import HeroForCompanies from '../components/pages/home/hero-for-companies';
import ForCompaniesFeatures from '../components/pages/home/for-companies-features';

export default function ForCreators() {
  const pageTitle = "Transform Your Business with AI and Prompt Engineering";
  const pageDescription = "Prompland is the ultimate platform for businesses seeking to leverage the power of AI prompts to enhance their operations. Access the best AI prompts, find prompt engineering experts, and request personalized prompts to boost your organization's efficiency. Explore Prompland's services and empower your business with the transformative power of AI prompts!";

  return (
    <Layout page={pageTitle} title={pageTitle} description={pageDescription}>
      {/* Header */}
      <NavigationHome />
      
      <main id="about" className="isolate">
        

        {/* Hero section */}
        <HeroForCompanies />

        <ForCompaniesFeatures />


      </main>

      {/* Footer */}
      <FooterHome />
    </Layout>
  )
}
