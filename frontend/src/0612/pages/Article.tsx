import React from 'react'
import { ArticleComp } from '../components/ArticleComp'

const Article=[
    {
        link:"https://www.everydayhealth.com/wellness/deep-breathing/",
        Title:"Deep Breathing: A Complete Guide to the Relaxation Technique"
    },
    {
        link:"https://www.everydayhealth.com/wellness/all-articles/",
        Title:"A Consumer’s Guide to Clinical Trials"
    },
    {
        link:"https://www.everydayhealth.com/wellness/hours-nature-each-week-boosts-wellness/",
        Title:"7 Reasons Spending Time Outdoors Is Good for Your Health"
    },
    {
        link:"https://www.everydayhealth.com/wellness/possible-health-benefits-of-deep-breathing/",
        Title:"6 Possible Health Benefits of Deep Breathing"
    },
    {
        link:"https://www.everydayhealth.com/wellness/mood-boosting-essential-oils-to-support-everyday-life-challenges/",
        Title:"4 Mood-Boosting Essential Oils to Support Everyday Life Challenges"
    },
    {
        link:"https://www.everydayhealth.com/wellness/essential-oil-dos-and-donts-aromatherapy-tips-for-beginners/",
        Title:"Essential Oil Dos and Dont’s: Aromatherapy Tips for Beginners"
    },
    {
        link:"https://www.everydayhealth.com/wellness/possible-health-perks-to-planning-a-wellness-inspired-vacation/",
        Title:"4 Possible Health Perks to Planning a Wellness-Inspired Vacation"
    },
    {
        link:"https://www.everydayhealth.com/wellness/wellness-tourism/guide/",
        Title:"What Is Wellness Tourism? A Complete Guide to Taking a Health-Inspired Vacation"
    },
    {
        link:"https://www.everydayhealth.com/wellness/all-articles/",
        Title:"Probiotic Bacteria in Fermented Foods Might Help Bad Breath"
    },
    {
        link:"https://www.everydayhealth.com/wellness/cold-weather-health-risks-detailed-guide/",
        Title:"What Do Freezing-Cold Temperatures Do to Your Body?"
    },
    {
        link:"https://www.everydayhealth.com/wellness/dry-brushing/guide/",
        Title:"What Is Dry Brushing? A Detailed Scientific Guide to Ayurvedic Skin Massage and Exfoliation"
    },
    {
        link:"https://www.everydayhealth.com/wellness/potential-health-benefits-of-dry-brushing/",
        Title:"5 Potential Health Benefits of Dry Brushing"
    },
    {
        link:"https://www.info.com/serp?q=health+and+wellness+articles&segment=info.rc001&s1recircid=RYt5YUXJAQe8X4UR1e3U&gclid=CjwKCAjwx_eiBhBGEiwA15gLN4dGOXRFau1CD91T-GQEZyoYNmdaoH4mMmJOVOZMsO8F-_-eXMeJTxoCyfQQAvD_BwE&utm_source=adwords&s1sid=654sezoif8dbm8quxxoapw3f",
        Title:"5 Possible Health Benefits of Cold Water Therapy"
    },
    {
        link:"https://www.everydayhealth.com/wellness/cold-water-therapy/guide/",
        Title:"What Is Cold Water Therapy? A Detailed Scientific Guide"
    },
    {
        link:"https://www.everydayhealth.com/wellness/potential-health-benefits-of-massage-therapy/",
        Title:"5 Potential Health Benefits of Massage Therapy"
    },
    {
        link:"https://www.everydayhealth.com/wellness/massage-therapy/guide/",
        Title:"Massage Therapy: A Beginner’s Guide to This Type of Healing Bodywork"
    },
    {
        link:"https://www.everydayhealth.com/wellness/potential-health-benefits-of-tai-chi/",
        Title:"5 Potential Health Benefits of Tai Chi"
    },
    {
        link:"https://www.everydayhealth.com/wellness/tai-chi/guide/",
        Title:"What Is Tai Chi? A Beginner’s Guide to This Mind-Body Practice"
    },
    {
        link:"https://www.everydayhealth.com/wellness/eft-tapping/guide/",
        Title:"What Is EFT Tapping? A Detailed Scientific Guide on Emotional Freedom Technique"
    },
]

export const Articles = () => {
  return (
    <div className='p-10 grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
      {
        Article.map((el)=><ArticleComp Title={el.Title} link={el.link}/>)
      }
    </div>
  )
}
