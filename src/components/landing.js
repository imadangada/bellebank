import section1 from './rectangle.svg'
import section2 from './rectangle1.png'
import section3 from './rectangle2.png'
import circle1 from './circle.svg'
import circle2 from './two.svg'
import circle3 from './three.svg'
import Features from './features'
import iphone from './iphone.svg'
import arrow from './arrow2.png'
import android from './android.svg'
import Footer from './footer'
 function Landing() {
    return (
      <div className="bg-white">
        {/* start of first section */}
        <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:self-center">
                <h2 className="text-3xl text-center font-bold tracking-tight text-red-900 sm:text-4xl">
                How does <span className="text-orange-500">bellebank </span> work?
                </h2>
                <p className="mt-4 text-center text-lg leading-6 text-red-900">
                With simple easy step you make<br /> your order food stuffs
                </p>
                </div>
          <div className="overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            

              <div className="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1">
              <img
                className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src={section1}
                alt="App screenshot"
              />
            </div>
            <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <div className="overflow-hidden mt-40 lg:grid lg:grid-cols-2 lg:gap-0 grid grid-cols-2 gap-0">
                <div>
               <img src={circle1} className=' h-10 w-10  ' /> 
               </div>
               <div className='lg:-ml-40 -ml-28 '>
               <h2 className="text-3xl lg:text-3xl font-bold tracking-tight text-red-900 sm:text-4xl">
                
               Download app and login with your Work ID
                </h2>
                <p className="mt-4 text-xl leading-6 text-red-900">
                With simple easy step you make your<br /> order food stuffs
                </p>
                </div>
               </div>
              </div>
            </div>
            
          </div>
        </div>
        {/* end of first section */}

        {/* second section start */}

        <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg bg-white lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
              <div className="overflow-hidden mt-40 lg:grid lg:grid-cols-2 lg:gap-0 grid grid-cols-2 gap-0">
                <div>
               <img src={circle2} className=' h-10 w-10  ' /> 
               </div>
               <div className='lg:-ml-40 -ml-28 '>
               <h2 className="text-3xl lg:text-3xl font-bold tracking-tight text-red-900 sm:text-4xl">
                
               Download app and login with your Work ID
                </h2>
                <p className="mt-4 text-xl leading-6 text-red-900">
                With simple easy step you make your<br /> order food stuffs
                </p>
                </div>
               </div>
              </div>
            </div>
            <div className="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1">
              <img
                className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src={section2}
                alt="App screenshot"
              />
            </div>
          </div>
        </div>

        {/* end of second section */}

          {/* start of third section */}
          <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            

              <div className="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1">
              <img
                className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src={section2}
                alt="App screenshot"
              />
            </div>
            <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <div className="overflow-hidden mt-40 lg:grid lg:grid-cols-2 lg:gap-0 grid grid-cols-2 gap-0">
                <div>
               <img src={circle3} className=' h-10 w-10  ' /> 
               </div>
               <div className='lg:-ml-40 -ml-28 '>
               <h2 className="text-3xl lg:text-3xl font-bold tracking-tight text-red-900 sm:text-4xl">
                
               Download app and login with your Work ID
                </h2>
                <p className="mt-4 text-xl leading-6 text-red-900">
                With simple easy step you make your<br /> order food stuffs
                </p>
                </div>
               </div>
              </div>
            </div>
            
          </div>
        </div>
        {/* end of third section */}

        {/* Features component here */}
        <Features />
        {/* end of feature component */}

        {/* last section start */}

        <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-red-800 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Set your account and<br /> never run out of food stuff
              </h2>
              
              <a
                href="/access"
                className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-red-900 shadow hover:bg-red-100"
              >
                Join wailist &nbsp; &nbsp; <img src={arrow} />
              </a>
              <p className="mt-4 text-lg leading-6 text-gray-500">
                Comming soon 
              </p>
              <div className="grid grid-cols-3 gap-2">
              <div className="flex justify-center px-1 ">
                        <img
                          className="h-9 sm:h-10"
                          src={android}
                          alt="Tuple"
                        />
                      </div>
                      <div className="flex justify-center px-1">
                        <img
                          className="h-9 sm:h-10"
                          src={iphone}
                          alt="Workcation"
                        />
                      </div>
                      <div className="flex justify-center px-1">
                        
                      </div>
            </div>
            </div>
          </div>
          <div className="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1">
            <img
              className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src={section3}
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </div>

        {/* last section end */}

        {/* footer components */}

        <Footer />

        {/* end of footer components */}

      </div>
    )
  }
  export default Landing 