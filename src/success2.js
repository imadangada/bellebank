import access from './components/bg.svg'
import logo from './components/scale.svg'
import scale from './components/scaled.svg'
function Success2() {
    return (
      <div className="relative bg-red-50 m-5 py-24">
        
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 ">
            <img
              className="h-full w-full lg:h-full pr-full"
              src={access}
              alt=""
            />
          </div>
        </div>
        <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
          <div className="lg:pr-8">
          
            <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl text-center font-bold tracking-tight sm:text-4xl text-red-900">
              Thank <span className="text-orange-500">you</span>
              
              </h2>
              <p className="mt-4 text-lg text-center text-red-900 sm:mt-3">
              Will contact you soon within<br /> 24 hour 
              </p>
             
                
                
                <div className="flex justify-center text-right sm:col-span-2 mt-5">
                 <a href='/'> <button
                    type="submit"
                    className=" w-60 rounded-md border border-transparent bg-red-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Go back to home page
                  </button>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
export default Success2