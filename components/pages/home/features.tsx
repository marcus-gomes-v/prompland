import {
  ArrowPathIcon,
  BuildingLibraryIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
} from '@heroicons/react/24/outline'


const features = [
  {
    name: 'IOT',
    description:
      'We use IOT to check send data to our servers daily, so we can track all the trees in real time, creating the first smart-forest.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'City Integration',
    description:
      'We have integration with cities, so we can provide a perfect fit between your pocket forest and the city maintence.',
    icon: BuildingLibraryIcon,
  },
  {
    name: 'Sutainable',
    description:
      'We build pocket forest that dosent need much maintence and care, we focus to create sustainable environments, we project to growth.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Personalized Project',
    description:
      'We also work with personalized projects, creating an entire environment for your company space, we can make your company more green.',
    icon: FingerPrintIcon,
  },
]

export default function Features() {
  return (
    <div id='features' className="mx-auto max-w-7xl pt-24 px-6">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-teal-600">Features</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          We know how to build your pocket <span className='text-teal-500'>forest.</span>
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We have experience into reforestation field, we can create unique project using our specialists skills.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}