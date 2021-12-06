import React from 'react'
import Home from './Home'

export default function Tools() {
    const toolsarray = [
        {
            title: "Biteable",
            desc: "ur wonderfully simple platform empowers millions of people – from entrepreneurs to Fortune 500 companies – to engage and grow their audience with video.Biteable is sublimely simple to use and contains all the footage, animations, and templates you’ll ever need."
        }, 
        {
            title: "Buffer",
            desc: "Buffer is the most intuitive, affordable, and authentic way to reach more people on social media.We’re a fully distributed team of 85 people living and working in 15 countries around the world. And we’re working to build the best products to help our customers build their brands and grow their businesses on social media."
        },
        {
            title: "MeetEdgar",
            desc: "Edgar builds a bottomless library of evergreen updates. When he runs out of new updates, he’ll re-share older ones, so your social is always on – even when you’re focused on other things.We created Edgar in 2014 so that professionals could manage their social media with more consistency and in less time."
        },
        {
            title: "Hootsuite",
            desc: "Manage all your customer care channels—SMS, social media, WhatsApp, Live chat, and apps—from one simple platform.View all your customer conversations from a unified dashboard in Sparkcentral, with over a dozen product integrations—including WhatsApp Business, social media, live chat, SMS, and more "
        } , 
        {
            title: "Mention" , 
            desc: "people trust online reviews with 85% of customers checking up to 10 reviews before purchasing. Online customer feedback and reviews significantly influence your brand reputation. Stay on top of it by following following company mentions wherever you are."
        },
        {
            title: "Sumo",
            desc: "Most sites like theCHIVE get 40%+ or more mobile traffic. However, most sites don’t make it easy for their mobile visitors to share their amazing content.  With Sumo’s Share tool, theCHIVE is able to significantly increase their social shares, which in turn produces loads more traffic to their site!"
        }
    ]
    return (
      
        <div>
           <div className="container mt-5">
               <div className="row ">
                   {toolsarray.map(arr => (
                       <div className="col-md-6">
                           <h3>{arr.title}</h3>
                           <p className="lead">{arr.desc}</p>
                       </div>
                   ))}
               </div>
           </div>
        </div>
    )
}
