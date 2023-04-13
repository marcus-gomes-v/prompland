const posts = [
  {
    id: 1,
    title: 'For Creators',
    href: '#',
    description:
      'Prompland offers a unique opportunity for creators to share and sell their custom prompts within our platform. This not only allows our users to generate a source of income but also contributes to the ever-growing wealth of knowledge and resources available within Prompland. Showcase your creativity, build your reputation, and become a valued member of our thriving community.',
    imageUrl: "/images/placeholder/for-creators.png",
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Creators', href: '#' }
  },
  {
    id: 2,
    title: 'For Individuals',
    href: '#',
    description:
      'Elevate your daily life with the power of AI through Prompland. Whether you\'re seeking to boost productivity, optimize personal projects, or delve deeper into the world of AI, our extensive library of prompts offers a diverse range of solutions.Explore innovative ways to seamlessly integrate AI into your everyday routine and unlock your true potential with Prompland at your fingertips.',
    imageUrl: "/images/placeholder/for-individuals.png",
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Individuals', href: '#' }
  },
  {
    id: 3,
    title: 'For Companies',
    href: '#',
    description:
      'Prompland is the go-to platform for companies looking to harness the expertise of the best AI prompt creators in the market. With our customized prompt creation service, businesses can access tailor-made solutions to meet their unique needs and challenges. Drive innovation, streamline processes, and gain a competitive edge by incorporating AI prompts into your company\'s workflow.',
    imageUrl: "/images/placeholder/for-companies.png",
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Companies', href: '#' }
  },
];


export default function ForWhoAbout() {
  return (
    <div className="bg-white py-6 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">For Everyone</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
              </div>
              <div className="min-h-xl max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <div
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}