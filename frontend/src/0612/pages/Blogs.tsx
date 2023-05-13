import React from 'react'
import { BlogComp } from '../components/BlogComp'

const Blog=[
    {
        Title:" The Balanced Life with Robin Long",
        Desc:"Why follow? As a fitness instructor and mom of four, Robin Long’s motto is “Grace over guilt.” She offers a variety of free Pilates and barre workouts designed to help busy women fit at-home",
        link:"https://lindywell.com/wp-content/cache/wp-rocket/thebalancedlifeonline.com/index-https-webp.html_gzip"
    },
    {
        Title:"ACE Fitness",
        Desc:"Why follow? As a fitness instructor and mom of four, Robin Long’s motto is “Grace over guilt.” She offers a variety of free Pilates and barre workouts designed to help busy women fit at-home",
        link:"https://www.acefitness.org/resources/everyone/blog/"
    },
    {
        Title:"Run to the Finish",
        Desc:"Why follow? The American Council on Exercise (ACE) hosts this fitness and healthy lifestyle blog. You don’t need to be an Olympic athlete to implement these wellness tips! The ACE Fitness blog",
        link:"https://www.mygnp.com/blog/essential-vitamins-and-minerals/"
    },
    {
        Title:"Yoga with Adriene",
        Desc:"Why follow? If reaping the many benefits of yoga is part of your wellness plan, Yoga with Adriene can help you get there. With hundreds of free yoga videos at varying intensities,",
        link:"https://yogawithadriene.com/"
    },
    {
        Title:" Running on Real Food",
        Desc:"Why follow? This plant-based food blog isn’t just for vegans! Here you’ll find recipes designed to fuel your body with whole foods without sacrificing flavor. Whether you tickle your taste buds",
        link:"https://runningonrealfood.com/"
    },
    {
        Title:"Fit Foodie Finds",
        Desc:"Why follow? Lee Funke, founder of Fit Foodie Finds, leads her followers in finding balanced, healthy recipes without labelling foods “bad” or “off-limits.” This site is a great resource for",
        link:"https://fitfoodiefinds.com/"
    },
    {
        Title:"FWDfuel",
        Desc:"Why follow? This unique nutrition blog is geared toward helping athletes and people who live active lifestyles. FWDfuel features recipes and advice for dietary changes to avoid fatigue and",
        link:"https://www.fwdfuel.com/"
    },
    {
        Title:" Nutrition Stripped",
        Desc:"Why follow? After migraines and lethargy led her to rock bottom, dietician and nutritionist McKel Hill finally found her calling: the world of nutrition. She launched Nutrition Stripped as a way",
        link:"https://nutritionstripped.com/"
    },
    {
        Title:"The Roasted Root",
        Desc:"Why follow? Blogger Julia Mueller sees food as medicine, and she thinks you should, too! The Roasted Root is home to countless recipes created to reduce inflammation and prevent",
        link:"https://www.theroastedroot.net/"
    },
    {
        Title:" Dear Therapist",
        Desc:"Why follow? This weekly Atlantic column is hosted by licensed marriage and family therapist Lori Gottlieb. At Dear Therapist, you’ll find answers to questions from real readers, from the",
        link:"https://www.theatlantic.com/projects/dear-therapist/"
    },
    {
        Title:"NAMI blog",
        Desc:"Why follow? As the official blog of the National Alliance on Mental Illness, the NAMI blog offers evidence-based advice surrounding a variety of mental health issues, without any",
        link:"https://www.nami.org/blogs"
    },
    {
        Title:"Tiny Buddha",
        Desc:"Why follow? This blog shares a variety of articles on “simple wisdom for complex lives,” but their mindfulness and peace section stands out for its practical tips to leading a calmer, more",
        link:"https://tinybuddha.com/category/blog/mindfulness-peace-blog/"
    },
    {
        Title:"Zen Habits",
        Desc:"Why follow? Blogger Leo Babuta has been sharing his mindfulness journey on Zen Habits since 2007. In more than a decade of blogging, he’s covered nearly every topic under the sun:",
        link:"https://zenhabits.net/"
    },
    {
        Title:"Pick the Brain",
        Desc:"Why follow? With keywords like motivation, productivity, health and self-improvement, you can’t go wrong with this website. Pick the Brain takes a broader approach than your basic “self-",
        link:"https://www.pickthebrain.com/blog/"
    },
    {
        Title:"mindbodygreen",
        Desc:"Why follow? With a vision to revitalize the way people eat, move and live, mindbodygreen is all about providing resources for everything from nutrition and fitness to stress and",
        link:"https://www.pickthebrain.com/blog/"
    },
    {
        Title:"MyFitnessPal blog",
        Desc:"Why follow? This blog companion to the popular fitness app of the same name features a little bit of everything related to healthy living. Head to the MyFitnessPal blog for clean-eating",
        link:"https://www.mindbodygreen.com/"
    },
    {
        Title:"Avocadu",
        Desc:"Why follow? “Healthy living from the inside out” is the motto of Avocadu founders Lauren and Alex. The pair teamed up to create their own wellness site after watching friends blindly",
        link:"https://avocadu.com/blog/"
    },
    {
        Title:"Furthermore by Equinox",
        Desc:"Why follow? Crisp, beautiful design and a host of helpful conversations on fitness and wellness are what you’ll find on this blog. The folks at Equinox believe the body is the ultimate",
        link:"https://www.equinox.com/"
    },
    {
        Title:" Well+Good",
        Desc:"Why follow? Alexia Brue and Melisse Gelula are co-founders of Well+Good. They launched the company as a premiere lifestyle and news publication dedicated to the wellness scene. The",
        link:"https://www.wellandgood.com/"
    },
    {
        Title:"NPR Shots",
        Desc:"Why follow? The health news division of NPR is your go-to source for the state of healthcare across the nation and around the world. NPR Shots will keep you in the know about",
        link:"https://www.wellandgood.com/"
    }
]

export const Blogs = () => {
  return (
    <div className='p-10 grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
      {
        Blog.map((el)=><BlogComp Title={el.Title} Desc={el.Desc} link={el.link} />)
      }
    </div>
  )
}
