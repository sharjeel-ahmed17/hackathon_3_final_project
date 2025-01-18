
import React from 'react'

const BLog = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
  <Card />
  <Card />
  <Card />
  <Card />
      
    </div>
  </div>
</section>

  )
}

export default BLog


function Card (){
    return(
        <div className="p-4 md:w-1/4 w-1/2 " >
        <div className="h-full  rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://dummyimage.com/722x402"
            alt="blog"
          />
          <div className="">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              CATEGORY
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Shooting Stars
            </h1>
            <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
               
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
             
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
               
                6
              </span>
            </div>
          </div>
        </div>
      </div>
    )
}