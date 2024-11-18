import React from 'react'
import auto_summary from '../images/auto_summary.webp'
import meta from '../images/article_metadata.webp'
import distraction from '../images/distraction_free.webp'
import clickbait from '../images/clickbait.webp'
export default function About() {
  return (
    <div className='flex flex-col md:space-y-40 space-y-20 pt-10  text-white'>
      <div className="flex flex-col space-y-5 items-center  ">
        <h1 className="md:py-3 font-bold md:text-4xl font-serif text-3xl text-center ">Single platform, endless summaries</h1>
        <p className="font-serif  md:text-lg text-center px-4  ">Transforming information overload into manageable insights — consistently striving for clarity.</p>
      </div>

      <div className="grid md:grid-cols-2   md:gap-32 gap-y-10 md:space-x-10  self-center " >
        {/* 1st */}
        
        <div className=" md:w-[35rem]  space-y-3 pt-10 mx-6">
          <p className="font-custom1 text-lg text-purple-700">Condense & Comprehend: Summarization Simplified</p>
          <h1 className="font-bold text-3xl">100% Automatic Article Summarization with just a click</h1>

          <p className="text-lg font-light">In the sheer amount of information that bombards Internet users from all sides, hardly anyone wants to devote their valuable time to reading long texts. TLDR This's clever AI analyzes any piece of text and summarizes it automatically, in a way that makes it easy for you to read, understand and act on.</p>

        </div>
          <div className="mx-4 md:order-none -order-1 rounded-lg shadow-lg">
          <img src={auto_summary} alt='' className='object-cover md:w-[35rem] md:h-80 rounded-lg shadow-lg' />
        </div>
      

        {/* 2nd */}
        <div className="mx-4 md:order-none  rounded-lg shadow-lg">
            <img src={meta} alt='' className='object-cover md:w-[35rem] md:h-80 rounded-lg shadow-lg' />
        </div>

        <div className=" space-y-3 md:w-[35rem] md:pt-16 pt-10  mx-6">
          <p className="font-custom1 text-lg text-purple-700">Essentials Unveiled: Metadata Extraction Simplified</p>
          <h1 className="font-bold text-3xl">Article Metadata Extraction</h1>

          <p className="text-lg font-light">Easy Read , the online article summarizer tool, not only condenses lengthy articles into shorter, digestible content, but it also automatically extracts essential metadata such as author and date information, related images, and the title. Additionally, it estimates the reading time for news articles and blog posts, ensuring you have all the necessary information consolidated in one place for efficient reading.</p>
        </div>

        {/* 3rd */}
        <div className="space-y-3 md:w-[35rem] md:pt-16 pt-10 mx-6 ">
          <p className="font-custom1 text-lg text-purple-700">Pure Focus, No Fuss: Your Ad-Free Reading Haven</p>
          <h1 className="font-bold text-3xl">Distraction and ad-free reading</h1>
          <p className="text-lg font-light">
            As an efficient article summarizer tool, TLDR This meticulously eliminates ads, popups, graphics, and other online distractions, providing you with a clean, uncluttered reading experience. Moreover, it enhances your focus and comprehension by presenting the essential content in a concise and straightforward manner, thus transforming the way you consume information online.
          </p>
        </div>

        <div className="mx-4 ">
          <img src={distraction} alt="Ad-Free Reading" className="object-cover md:w-[35rem] md:h-80 rounded-lg shadow-lg" />
        </div>

        {/* 4th */}
        <div className="mx-4 md:order-none ">
          <img src={clickbait} alt='' className='object-cover w-[35rem] ' />
        </div>

        <div className="space-y-3 md:w-[35rem] md:pt-16 pt-10  mx-6">
          <p className="font-custom1 text-lg text-purple-700">Dodge the Distraction, Embrace the Essence</p>
          <h1 className="font-bold text-3xl">Avoid the Clickbait Trap</h1>

          <p className="text-lg font-light">Easy Read smartly selects the most relevant points from a text, filtering out weak arguments and baseless speculation. It allows for quick comprehension of the essence, without needing to sift through all paragraphs. By focusing on core substance and disregarding fluff, it enhances efficiency in consuming information, freeing more time for valuable content.</p>
        </div>

      </div>
      

    </div>
  )
}
