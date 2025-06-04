import React, { useEffect } from 'react';
import { GraduationCap } from "lucide-react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
          <p className="guaranteed text-xl backdrop-blur-3xl bg-amber-700 px-4 inline-block mb-2 rounded text-2xl text-white">
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
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Explore Courses
          </button>
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

       
      <div>
        <div className="my-5 mx-10">
          <h2 className="text-4xl font-bold">Browse By Categories</h2>
          <h4>
            Not sure where to begin? Browse our wide range of categories including <br />
            IOE, B.Sc.CSIT, BIT, BCA, B.Sc — and find the perfect course to match your goals.
          </h4>
          <button className="my-5 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            All Categories
          </button>

     <div className="containers flex gap-6 flex-wrap mt-6 ">

             
            <div className="hover:scale-110 transition-transform duration-300 px-6 py-8 bg-[#f4f7fb]  rounded text-black w-40 text-center shadow-md shadow-white">
              <div className='mx-6 justify-center items-center w-18 hover:bg-blue-700 h-18 rounded-full bg-white'>
                <img  src="https://i0.wp.com/www.bbscollegenepal.com/wp-content/uploads/2021/09/tribhuvan-university-logo-1.png?fit=1200%2C630&ssl=1" alt="IOE" className="w-full h-14 shadow-black mx-auto mb-2 items-center justify-center my-2" />
              </div>
              <h4 className="font-semibold text-lg text-black mt-1 justify-center">IOE</h4>
            </div>

             
             <div className="hover:scale-110 transition-transform duration-300 px-6 py-8 bg-[#f4f7fb]  rounded text-black w-40 text-center shadow-md shadow-white">
              <div className='mx-6 justify-center items-center w-18 hover:bg-blue-700 h-18 rounded-full bg-white'>
                <img  src="https://i0.wp.com/www.bbscollegenepal.com/wp-content/uploads/2021/09/tribhuvan-university-logo-1.png?fit=1200%2C630&ssl=1" alt="IOE" className="w-full h-14 shadow-black mx-auto mb-2 items-center justify-center my-2" />
              </div>
              <h4 className="font-semibold text-lg text-black mt-1 justify-center">BSc.CSIT</h4>
            </div>
             <div className="hover:scale-110 transition-transform duration-300 px-6 py-8 bg-[#f4f7fb]  rounded text-black w-40 text-center shadow-md shadow-white">
              <div className='mx-6 justify-center items-center w-18 hover:bg-blue-700 h-18 rounded-full bg-white'>
                <img  src="https://i.imgur.com/Sm8hCdC.png" alt="IOE" className="w-full h-14 shadow-black mx-auto mb-2 items-center justify-center my-2" />
              </div>
              <h4 className="font-semibold text-lg text-black mt-1 justify-center">CEE</h4>
            </div>
             <div className="hover:scale-110 transition-transform duration-300 px-6 py-8 bg-[#f4f7fb]  rounded text-black w-40 text-center shadow-md shadow-white">
              <div className='mx-6 justify-center items-center w-18 hover:bg-blue-700 h-18 rounded-full bg-white'>
                <img  src="https://i0.wp.com/www.bbscollegenepal.com/wp-content/uploads/2021/09/tribhuvan-university-logo-1.png?fit=1200%2C630&ssl=1" alt="IOE" className="w-full h-14 shadow-black mx-auto mb-2 items-center justify-center my-2" />
              </div>
              <h4 className="font-semibold text-lg text-black mt-1 justify-center">BICTE</h4>
            </div>
             <div className="hover:scale-110 transition-transform duration-300 px-6 py-8 bg-[#f4f7fb]  rounded text-black w-40 text-center shadow-md shadow-white">
              <div className='mx-6 justify-center items-center w-18 hover:bg-blue-700 h-18 rounded-full bg-white'>
                <img  src="https://i0.wp.com/www.bbscollegenepal.com/wp-content/uploads/2021/09/tribhuvan-university-logo-1.png?fit=1200%2C630&ssl=1" alt="IOE" className="w-full h-14 shadow-black mx-auto mb-2 items-center justify-center my-2" />
              </div>
              <h4 className="font-semibold text-lg text-black mt-1 justify-center">BIT</h4>
            </div>
             <div className="hover:scale-110 transition-transform duration-300 px-6 py-8 bg-[#f4f7fb]  rounded text-black w-40 text-center shadow-md shadow-white">
              <div className='mx-6 justify-center items-center w-18 hover:bg-blue-700 h-18 rounded-full bg-white'>
                <img  src="https://i0.wp.com/www.bbscollegenepal.com/wp-content/uploads/2021/09/tribhuvan-university-logo-1.png?fit=1200%2C630&ssl=1" alt="IOE" className="w-full h-14 shadow-black mx-auto mb-2 items-center justify-center my-2" />
              </div>
              <h4 className="font-semibold text-lg text-black mt-1 justify-center">BCA</h4>
            </div>
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
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;