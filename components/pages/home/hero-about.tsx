import Link from "next/link";

export default function HeroAbout() {
  return (
    <div className="relative">
      <div className="py-6 ">
        <div className="mx-auto max-w-9xl px-6 lg:px-8">
          <div>
            <div className="relative z-10 mx-auto max-w-7xl">
              <h1 className="text-4xl lg:text-6xl font-thin tracking-tight text-gray-800 text-center">
                About Prompland
              </h1>

              <p className="mt-6 text-md lg:text-lg text-gray-800 text-justify">
                Prompland is an innovative AI Prompt Sharing, Creation, and Discovery platform designed to bridge the gap between people and artificial intelligence. Our mission is to empower individuals, creators, and businesses by providing them with the tools and resources to harness the power of AI prompts and optimize their work in today&apos;s rapidly evolving world. We believe that in the future, the ability to effectively use prompts will be a key differentiator between success and failure.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}