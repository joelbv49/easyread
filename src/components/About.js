import React from 'react'
import auto_summary from '../images/auto_summary.webp'
import distraction from '../images/distraction_free.webp'
import clickbait from '../images/clickbait.webp'

export default function About() {
  const features = [
    {
      title: "100% Automatic Article Summarization with just a click",
      description: "EasyRead's clever AI analyzes any piece of text and summarizes it automatically, making it easy for you to read, understand, and act on.",
      image: auto_summary,
      alt: "Automatic Summarization",
      tag: "Condense & Comprehend: Summarization Simplified"
    },
    {
      title: "Distraction and ad-free reading",
      description: "EasyRead meticulously eliminates ads, popups, graphics, and other online distractions, providing you with a clean, uncluttered reading experience.",
      image: distraction,
      alt: "Ad-Free Reading",
      tag: "Pure Focus, No Fuss: Your Ad-Free Reading Haven"
    },
    {
      title: "Avoid the Clickbait Trap",
      description: "Easy Read smartly selects the most relevant points from a text, filtering out weak arguments and baseless speculation, enhancing efficiency in consuming information.",
      image: clickbait,
      alt: "Avoid Clickbait",
      tag: "Dodge the Distraction, Embrace the Essence"
    }
  ];

  return (
    <div className='flex flex-col space-y-20 pt-10 text-white'>
      <div className="flex flex-col space-y-5 items-center">
        <h1 className="md:py-3 font-bold md:text-5xl text-4xl text-center font-custom2">Single platform, endless summaries</h1>
        <p className="font-custom1 md:text-xl text-sm text-center px-4 max-w-3xl ">Transforming information overload into manageable insights — consistently striving for clarity.</p>
      </div>

      <div className="grid gap-20 md:gap-32 mx-10  md:px-0">
        {features.map((feature, index) => (
          <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10`}>
            <div className="md:w-1/2">
              <img src={feature.image} alt={feature.alt} className='object-cover w-[34rem] rounded-lg shadow-lg' />
            </div>
            <div className="md:w-1/2  space-y-4">
              <p className="font-custom1  text-purple-400">{feature.tag}</p>
              <h2 className="font-bold text-3xl">{feature.title}</h2>
              <p className="text-lg font-light">{feature.description}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}

