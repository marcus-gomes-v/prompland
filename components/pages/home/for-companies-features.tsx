import { ChartPieIcon, ChatBubbleLeftEllipsisIcon, CodeBracketIcon, UserGroupIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Access the Best AI Prompts',
    description: "Our platform features a vast collection of prompts crafted by top prompt creators, ensuring your business has access to the most effective AI solutions.",
    icon: CodeBracketIcon,
  },
  {
    name: 'Find Prompt Engineering Experts',
    description: "Prompland makes it easy to connect with skilled prompt engineers who can provide valuable insights and help your company stay ahead of the competition.",
    icon: UserGroupIcon,
  },
  {
    name: 'Request Personalized Prompts',
    description: "Receive tailor-made prompts designed to address your company's unique needs and challenges. Our creators can develop custom solutions to optimize your workflow, improve communication, and streamline decision-making.",
    icon: ChatBubbleLeftEllipsisIcon,
  },
  {
    name: "Boost Your Organization's Efficiency",
    description: "By integrating AI prompts into your business processes, you can automate repetitive tasks, reduce human error, and increase overall efficiency.",
    icon: ChartPieIcon,
  },
]

export default function ForCompaniesFeatures() {
  return (
    <div className="bg-white py-12 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-500">Transform Your Business Efficiency</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Boost Your Efficiency with AI-Powered Prompts
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore Prompland&apos;s services and empower your business with the transformative power of AI prompts!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-sky-500" aria-hidden="true" />
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