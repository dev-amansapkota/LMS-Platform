/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import classNames from 'classnames';
import { CheckIcon } from '@heroicons/react/24/solid'; // or /outline


 
import { GraduationCap } from "lucide-react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {tiers} from './assets/data'
gsap.registerPlugin(ScrollTrigger)

function Home() {
  useEffect(() => {
    gsap.from(".guaranteed, .platform", {
      x: 100,
      ease: "power2.out",
      duration: 2,
      delay: 0.1
    });
  }, []);

  useEffect(()=>{
    gsap.from(".headText",{
x:100,
ease:"bounce",
duration:2
    });
  },[])

  useEffect(() => {
  gsap.utils.toArray(".containers").forEach((el) => {
    gsap.from(el, {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });
}, []);

  return (
    <div className="font-roboto w-full overflow-x-hidden mt-9 bg-white text-black">

       
      <div className="flex flex-col md:flex-row justify-evenly items-center px-4">
         
        <div className="text-left">
          <p className="guaranteed  !backdrop-blur-3xl bg-cyan-400 px-auto my-auto inline-block  rounded-ss-lg text-2 text-black font-bold">
            100% Guaranteed
          </p>
          <h1 className="platform font-bold text-3xl md:text-4xl leading-snug">
            Best <span className="text-red-500">Learning Platform</span>
            <br />
            For Entrance Preparation
          </h1>
          <p className='headText'>
            Gupta Tutorial is your trusted path to success. Get guided by
            industry experts <br /> and elevate your knowledge to new heights.
          </p>
          <br />
         <div className="inline-block p-[2px] rounded bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-bounce">
  <button className="text-black px-4 py-2 bg-white rounded w-full h-full " h>
    Explore Courses
  </button>
</div>

        </div>

         
        <div className="relative mt-6 md:mt-0">
          <img
            className="w-full max-w-md h-auto object-contain"
            src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/banner_img.png"
            alt="Banner"
          />

           
          <div className="absolute w-50 mx-70 -my-23">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg text-center pt-10 pb-4 px-4">
              <p className="text-gray-600">Achieved Dream</p>
              <h3 className="text-2xl font-bold text-blue-900">3M+</h3>
            </div>
          </div>
        </div>
      </div>

      <br />

       
 <div className="px-4 md:px-12 my-10 text-left">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-4">Browse By Categories</h2>
    <h4 className="text-base leading-relaxed">
      Not sure where to begin? Browse our wide range of categories including <br />
      IOE, B.Sc.CSIT, BIT, BCA, B.Sc — and find the perfect course to match your goals.
    </h4>
    <button className="mt-5 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
      All Categories
    </button>

    <div className="mt-8 flex flex-wrap gap-6 items-start justify-start">
      {[
        { label: "IOE", img: "https://i0.wp.com/www.bbscollegenepal.com/wp-content/uploads/2021/09/tribhuvan-university-logo-1.png?fit=1200%2C630&ssl=1" },
        { label: "BSc.CSIT", img: "https://i0.wp.com/www.bbscollegenepal.com/wp-content/uploads/2021/09/tribhuvan-university-logo-1.png?fit=1200%2C630&ssl=1" },
        { label: "CEE", img: "https://i.imgur.com/Sm8hCdC.png" },
        { label: "BICTE", img: "https://i0.wp.com/www.bbscollegenepal.com/wp-content/uploads/2021/09/tribhuvan-university-logo-1.png?fit=1200%2C630&ssl=1" },
        { label: "BIT", img: "https://i0.wp.com/www.bbscollegenepal.com/wp-content/uploads/2021/09/tribhuvan-university-logo-1.png?fit=1200%2C630&ssl=1" },
        { label: "BCA", img: "https://i0.wp.com/www.bbscollegenepal.com/wp-content/uploads/2021/09/tribhuvan-university-logo-1.png?fit=1200%2C630&ssl=1" }
      ].map((item, index) => (
        <div key={index} className="hover:scale-110 transition-transform duration-300 px-6 py-8 bg-[#f4f7fb] rounded text-black w-40 text-center shadow-md">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4 hover:bg-blue-700 transition-colors">
            <img src={item.img} alt={item.label} className="w-full h-12 object-contain" />
          </div>
          <h4 className="font-semibold text-lg mt-1">{item.label}</h4>
        </div>
      ))}
    </div>
  </div>
</div>


       
      <div className="bg-white text-black mx-4 max-w-sm rounded my-9 p-4 shadow-lg">
        <h2 className="font-bold mb-2">BIT Entrance Exam</h2>
        <img
          className="w-full h-auto rounded"
          src="https://entrancepreparationhub.com/wp-content/uploads/2025/05/BIT-Entrance-Exam.png"
          alt="BIT Entrance Exam"
        />
        <div className="flex flex-col sm:flex-row gap-4 py-3 justify-between items-center">
          <p>BIT Entrance Exam 2025</p>
          <button className="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700">
            Start Learning
          </button>
        </div>
        
      </div>
      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-indigo-600">Pricing</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
          Choose the right plan for you
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
        Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer
        loyalty, and driving sales.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                  ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                  : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
            )}
          >
            <h3
              id={tier.id}
              className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'text-base/7 font-semibold')}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-5xl font-semibold tracking-tight',
                )}
              >
                {tier.priceMonthly}
              </span>
              <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>/month</span>
            </p>
            <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7')}>
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-8 space-y-3 text-sm/6 sm:mt-10',
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'h-6 w-5 flex-none')}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500'
                  : 'text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-indigo-600',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
              )}
            >
              Get started today
            </a>
          </div>
        ))}
      </div>
    </div>
      
    </div>
  );
}

export default Home;