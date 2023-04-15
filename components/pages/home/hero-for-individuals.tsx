export default function HeroForIndividuals() {
  return (
    <div className="bg-white py-6 sm:py-12">
      <div className="mx-auto max-w-7xl lg:px-8 px-6">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-purple-700 sm:text-4xl">
            Unlock the Power of AI in Your Everyday
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Discover how Prompland can revolutionize your daily life by giving you access to a world of AI prompts designed to help you make the most of every day. Here&apos;s how our platform can benefit you.
          </p>
        </div>
        <div className="mx-auto max-w-9xl pt-12 sm:t-24 ">
          <div className="lg:flex gap-9 z-10 mx-auto max-w-7xl ">
              <div>
              <h2 className='text-2xl font-bold tracking-tight text-gray-900 md:text-3xl'>Why Use Prompland to Enhance Your Life?</h2>
                <p className="mt-6 text-lg text-gray-500">
                  In today&apos;s fast-paced world, mastering the use of AI is crucial to personal and professional success. Prompland equips individuals with the tools and resources needed to fully harness the power of AI prompts. Our extensive library of prompts caters to a diverse range of applications, enabling users to find solutions that fit their unique needs. By using our platform, you&apos;ll be able to improve productivity, optimize personal projects, and expand your knowledge in various fields.
                  <br /><br />
                  Furthermore, Prompland offers unparalleled access to the collective wisdom of prompt creators from around the world. Our user-friendly platform makes it easy to find and apply AI prompts to your daily life, helping you stay ahead of the curve and unlock your true potential. With Prompland, you&apos;re not just utilizing AI; you&apos;re becoming a part of a global community that is driving innovation and shaping the future.
                </p>
              </div>
              <>
                <img
                  src="/images/placeholder/for-individuals.png"
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