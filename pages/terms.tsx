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
import { BackwardIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export default function Privacy() {
  const pageTitle = "Prompland Terms of Service: Understanding Your Rights & Responsibilities";
  const pageDescription = "Familiarize yourself with Prompland's Terms of Service, outlining the rights and responsibilities of users, creators, and companies on our AI prompt sharing, creation, and discovery platform.";

  return (
    <Layout page={pageTitle} title={pageTitle} description={pageDescription}>
      {/* Header */}
      <NavigationHome />
      
      <main id="privacy" className="isolate">
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div>
              <Link href="/" >
                <a className="flex items-center mb-6 text-gray-900">
                  <BackwardIcon className="mr-2 h-3 w-3" /> Back to Prompland
                </a>
              </Link>
            </div>
            <h1 className="text-4xl lg:text-6xl font-thin tracking-tight text-gray-800 text-center">
              Terms of Service:
            </h1>
            <div className=" py-12">
              
              <div className="lg:col-span-2">
                <div className="prose prose-indigo prose-lg text-gray-500">
                  <p className="mt-6 text-md lg:text-lg text-gray-800 text-justify">
                    These Terms of Service (&quot;Terms&quot;) govern your use of Prompland, an AI prompt sharing, creation, and discovery platform operated by Prompland, Inc. (&quot;Prompland&quot;). By using Prompland, you agree to these Terms, as well as our Privacy Policy, which is incorporated by reference into these Terms.
                  </p>
                  <h2 className='mt-9 uppercase text-md lg:text-2xl text-gray-800'>Use of Prompland:</h2>
                  <p className="mt-3 text-md lg:text-lg text-gray-500 text-justify">
                    You may use Prompland only for lawful purposes and in accordance with these Terms. You may not use Prompland in any way that violates any applicable laws or regulations or that infringes on the rights of others.
                  </p>
                  <h2 className='mt-9 uppercase text-md lg:text-2xl text-gray-800'>Account registration:</h2>
                  <p className="mt-3 text-md lg:text-lg text-gray-500 text-justify">
                    To use Prompland, you must create an account using your Google account credentials or by providing your email address and creating a password. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You may not share your account information with others or use another person&apos;s account.
                  </p>
                  <h2 className='mt-9 uppercase text-md lg:text-2xl text-gray-800'>User-generated content:</h2>
                  <p className="mt-3 text-md lg:text-lg text-gray-500 text-justify">
                    You may create and share prompts on Prompland. You retain ownership of the prompts you create, but by sharing them on Prompland, you grant Prompland a non-exclusive, royalty-free, transferable, sub-licensable, worldwide license to use, display, reproduce, and distribute your prompts on Prompland.
                  </p>
                  <h2 className='mt-9 uppercase text-md lg:text-2xl text-gray-800'>Intellectual property:</h2>
                  <p className="mt-3 text-md lg:text-lg text-gray-500 text-justify">
                    Prompland and its content, including but not limited to text, graphics, logos, images, and software, are the property of Prompland or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not use, copy, modify, or distribute Prompland or its.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </main>

      {/* Footer */}
      <FooterHome />
    </Layout>
  )
}
