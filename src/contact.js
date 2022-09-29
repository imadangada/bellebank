import access from './components/access.svg'
import logo from './components/frame.svg'
function Contact() {
    return (
      <div className="relative bg-red-50">
        
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 bg-red-100 lg:right-0 lg:w-1/2">
            <img
              className="h-full w-full lg:h-full"
              src={access}
              alt=""
            />
          </div>
        </div>
        <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
          <div className="lg:pr-8">
          <img src={logo} className='mb-10' />
            <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-red-900">
              Contact our<br /> <span className="text-orange-500">sales rep</span> 
              </h2>
              <p className="mt-4 text-lg text-red-900 sm:mt-3">
              We will respond your messages within 24 hours
              </p>
              <form action="#" method="POST" className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      placeholder='Musa'
                      className="border pl-2 py-2 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      placeholder='Yusuf'
                      className="border pl-2 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <div className="mt-1">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder='09067676767'
                      className="border pl-2 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                   
                  </div>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder='example@mail.com'
                      aria-describedby="phone-description"
                      className="border pl-2 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="how-can-we-help" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      placeholder='Your message'
                      aria-describedby="how-can-we-help-description"
                      rows={4}
                      className="border pl-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      defaultValue={''}
                    />
                  </div>
                </div>
                
                <div className="text-right sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Join our waitlist
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
export default Contact 