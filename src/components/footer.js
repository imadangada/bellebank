import instagram from './instagram.svg'
import twitter from './twitter.svg'
import facebook from './instagram.svg'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const navigation = {
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: facebook
    },
    {
      name: 'Instagram',
      href: '#',
      icon: instagram
        },
    {
      name: 'Twitter',
      href: '#',
      icon: twitter
    },
  ],
}
function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      
        <div className="mt-8 mx-20 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">{item.name}</span>
                <img src={item.icon} className='p-2 pb-5'/>
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-red-900 md:order-1 md:mt-0">
          Copyright@bellebank
All rights reserved
          </p>
          <p className="mt-8 text-base text-red-900 md:order-1 md:mt-0">
          Mail us at info@hubuk.ng
          </p>
        </div>
    </footer>
  )
}
export default Footer