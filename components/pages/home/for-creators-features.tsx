import {  BanknotesIcon, PencilIcon, StarIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Sell Your Top-notch Prompts ',
    description:
      'Create custom prompts that stand out, and offer them for sale on Prompland.Each time a user purchases one of your prompts, you will earn revenue. Showcase your ingenuity and build a loyal customer base!',
    icon: BanknotesIcon,
  },
  {
    name: 'Fulfill Personalized Prompt Requests',
    description:
      'Receive requests from companies or individuals seeking personalized AI prompts tailored to their specific needs. By catering to these unique requests, you can earn additional income while refining your skills and gaining invaluable experience.',
    icon: PencilIcon,
  },
  {
    name: 'Climb the Creator Rankings',
    description: 'Prompland supports the best prompt creators in the community by featuring them on our platform. As you garner more likes and positive feedback, you will rise through the ranks, attracting more clients and gaining greater visibility.',
    icon: StarIcon,
  },
]

export default function ForCreatorsFeatures() {
  return (
    <div className="bg-white py-12 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-turquoise-600">We Support Your Work</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Unlock Your Earning Potential
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Prompland provides a comprehensive platform for AI prompt creators to monetize their expertise, cater to diverse client needs, and climb the ranks in our community. Seize the opportunity to showcase your talents and transform your passion into a rewarding career.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-turquoise-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}