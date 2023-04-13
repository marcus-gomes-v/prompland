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
  const pageTitle = "Prompland Privacy Policy: Protecting Your Personal Information";
  const pageDescription = "Learn how Prompland collects, uses, and safeguards your personal information while using our AI prompt sharing, creation, and discovery platform.";



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
              Privacy Policy
            </h1>
            <div className=" py-12">
              
              <div className="lg:col-span-2">
                <div className="prose prose-indigo prose-lg text-gray-500">
                  <p className="mt-6 text-md lg:text-lg text-gray-800 text-justify">
                    At Prompland, we are committed to protecting the privacy and security of our users. This Privacy Policy explains how we collect, use, and disclose your personal information when you use our platform. By using Prompland, you consent to the collection, use, and disclosure of your personal information as described in this Privacy Policy.
                  </p>
                  <h2 className='mt-9 uppercase text-md lg:text-2xl text-gray-800'>Information we collect:</h2>
                  <p className="mt-3 text-md lg:text-lg text-gray-500 text-justify">
                    When you sign up for Prompland, we collect your name and email address from your Google account. We also collect your profile picture from your Google account to display on your profile page. In addition, we may collect information about your use of our platform, such as the prompts you create or share, the prompts you view, and the frequency and duration of your visits.
                  </p>
                  <h2 className='mt-9 uppercase text-md lg:text-2xl text-gray-800'>How we use your information:</h2>
                  <p className="mt-3 text-md lg:text-lg text-gray-500 text-justify">
                    We use your personal information to provide you with the services and features of our platform, including creating and sharing prompts, and to communicate with you about your account and our services. We may also use your information to personalize your experience on Prompland, to improve our platform and services, and to analyze user behavior and preferences.
                  </p>
                  <h2 className='mt-9 uppercase text-md lg:text-2xl text-gray-800'>Information sharing and disclosure: </h2>
                  <p className="mt-3 text-md lg:text-lg text-gray-500 text-justify">
                    We may share your personal information with third-party service providers who help us operate our platform and provide our services, such as hosting and analytics providers. We may also share your information with other users of our platform in connection with the prompts you create or share. We will not sell your personal information to third parties, and we will not share your personal information with third parties for their own marketing purposes without your consent.
                  </p>
                  <h2 className='mt-9 uppercase text-md lg:text-2xl text-gray-800'>Data retention: </h2>
                  <p className="mt-3 text-md lg:text-lg text-gray-500 text-justify">
                    We will retain your personal information for as long as necessary to provide our services and fulfill the purposes described in this Privacy Policy. You may delete your account at any time, and we will delete your personal information within a reasonable period of time after receiving your request.
                  </p>
                  <h2 className='mt-9 uppercase text-md lg:text-2xl text-gray-800'>Security: </h2>
                  <p className="mt-3 text-md lg:text-lg text-gray-500 text-justify">
                    We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee the absolute security of your personal information.
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
