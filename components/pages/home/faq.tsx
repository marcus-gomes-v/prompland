const faqs = [
  {
    id: 1,
    question: "Do you guys create project outside of Gdanski?",
    answer:
      "Yes, we are able to create project in any other city inside poland, we also are starting to build project outside for our neighbor countries.",
  },
]


export default function Faq() {
  return (
    <div className="mx-auto max-w-2xl divide-y divide-gray-900/10  mt-24 px-6 pb-8 sm:pt-12 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pb-32">
      <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
      <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
        {faqs.map((faq) => (
          <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
            <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{faq.question}</dt>
            <dd className="mt-4 lg:col-span-7 lg:mt-0">
              <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}