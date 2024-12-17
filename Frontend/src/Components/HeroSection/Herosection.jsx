import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";



const Herosection = () => {
    // const heroimg = 'https://img.freepik.com/premium-vector/animation-designer-computer-with-video-motion-design-screen_103044-6564.jpg?ga=GA1.1.1486585058.1732891954&semt=ais_hybrid'

  return (
    <section className="flex  flex-col sm:flex-row px-6 py-6 sm:py-16">
    <div className="container text-center sm:text-start flex-col gap-6 mx-auto px-6 w-[100%] sm:w-[60%] items-center">
      {/* Heading */}
      <div className="text  mt-10 mb-4 w-fit px-6 mx-auto flex justify-center border border-gray-400 py-0.5 rounded-full text-lg gap-2 text-center">
      <p className='text-center text-gray-900'>Unleash Your Words and share with others</p>
      <Link to={'/auth/login'}>
      <a className='text-center flex items-center gap-1 text-gray-950 font-semibold' href="#">Join Now <FaArrowRight/> </a>
      </Link>
      </div>
      <h1 className="text-3xl sm:text-5xl font-bold text-center text-gray-800">
        Join Our Community of Passionate Writers!
      </h1>
  
      {/* Subheading */}
      <p className="mt-6 text-sm sm:text-xl text-gray-600">
        Discover powerful stories, trending ideas, and valuable insights written 
        by experts and enthusiasts. Your go-to platform for inspiration and 
        knowledge.
      </p>
  
      {/* Call-to-Action */}
      <div className="mt-8 flex justify-center" >
        <Link to={'/blogs'}>
        <button className="px-4 py-2 sm:px-8 sm:py-3 bg-black text-white font-medium rounded-lg shadow-md hover:bg-blue-700">
          Explore Blogs
        </button>
        </Link>
      </div>
    </div>
    {/* <div className="right w-[100%] sm:w-[50%] ">
    <img className='w-[100%]' src={heroimg} alt="" />
    </div> */}
  </section>
  )
}

export default Herosection