import {  BookOpenIcon, Cog6ToothIcon, LightBulbIcon, PaintBrushIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Boost Your Productivity',
    description: "Find prompts tailored to help you work more efficiently, manage your time better, and stay focused on your goals. With Prompland, you'll achieve more in less time.",
    icon: LightBulbIcon,
  },
  {
    name: 'Enhance Personal Projects',
    description: "Whether you're working on a creative endeavor, a DIY project, or personal research, our extensive library of prompts can help you overcome obstacles and achieve outstanding results.",
    icon: PaintBrushIcon,
  },
  {
    name: 'Improve Your Studies',
    description: "Prompland's prompts can assist you in learning new subjects, preparing for exams, and staying organized throughout your academic journey.",
    icon: BookOpenIcon,
  },
  {
    name: 'Master AI and Prompts',
    description: "Understanding how to work with AI and prompts is crucial in today's world. By utilizing Prompland, you'll develop valuable skills that can give you a competitive edge in your career and personal life.",
    icon: Cog6ToothIcon,
  },
]

export default function ForIndividualsFeatures() {
  return (
    <div className="bg-white py-12 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-600">Your Path to Success</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Unleash Your Potential with Prompts
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Dive into Prompland&apos;s vast library of AI prompts and unleash your full potential!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-purple-600" aria-hidden="true" />
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