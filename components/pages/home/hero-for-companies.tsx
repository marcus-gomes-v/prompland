export default function HeroForCompanies() {
  return (
    <div className="bg-white py-6 sm:py-12">
      <div className="mx-auto max-w-7xl lg:px-8 px-6">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">
            Transform Your Business with AI and Prompt Engineering
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Prompland is the ultimate platform for businesses seeking to leverage the power of AI prompts to enhance their operations.
          </p>
        </div>
        <div className="mx-auto max-w-9xl pt-12 sm:t-24 ">
          <div className="lg:flex gap-9 z-10 mx-auto max-w-7xl ">
              <div>
              <h2 className='text-2xl font-bold tracking-tight text-gray-900 md:text-3xl'>Why Choose Prompland for Your Business?</h2>
                <p className="mt-6 text-lg text-gray-500">
                  In an increasingly competitive landscape, businesses need to stay agile and innovative to thrive. Prompland offers companies access to cutting-edge AI prompt solutions, which can help transform and streamline various aspects of their operations. By choosing our platform, you&apos;ll gain access to a vast repository of prompts crafted by the best creators in the market, ensuring that you have access to reliable, high-quality solutions tailored to your business needs.
                  <br /><br />
                  Additionally, Prompland provides personalized services, allowing companies to request custom prompts specifically designed to tackle their unique challenges. Our platform connects businesses with skilled prompt engineers who can provide valuable insights and help your organization stay ahead of the competition. By integrating AI prompts into your business processes, you can automate tasks, reduce human error, and increase overall efficiency. Choose Prompland to unlock the true potential of AI for your business and gain a competitive edge in your industry.
                </p>
              </div>
              <>
                <img
                  src="/images/placeholder/for-companies.png"
                  alt="App screenshot"
                  width={332}
                  height={242}
                  className="rounded-md"
                />
              </>
            </div>
        </div>
      </div>
    </div>
  )
}