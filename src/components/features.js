import truck from './Truck.png'
import pizza from './Pizza.png'
import coins from './Coins.png'
  const features = [
    {
      description: 'Never run out food while you should focus on important work',
      icon: pizza
    },
    {
      description: 'Flexible loan cut from your salary without paper work',
      icon: coins
    },
    {
      description: 'Get food stuffs delivered to your doorstep',
      icon: truck
    },
   
  ]
  
 function Features() {
    return (
      <div className="relative bg-red-100 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          
          <p className="mt-2 text-3xl lg:text-5xl font-bold tracking-tight text-red-900 sm:text-4xl">
          With bellebank you<br /> <span className="text-orange-500">can do more</span> 
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-red-900">
          With simple easy step you make<br /> your order food stuffs
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8 h-40">
                    <div className="-mt-6">
                      <div>
                        <span className="rounded-md p-3">
                        <img src={feature.icon} className='pt-7'/>
                        </span>
                      </div>
                      <p className="-mt-3 text-left text-red-900">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
export default Features  