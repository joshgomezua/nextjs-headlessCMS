import Link from '../Link/Link';

const Footer = () => {
  return (
    <div className='bg-white'>
      <div className='max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-8 lg:px-8'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='grid grid-cols-2 gap-8 xl:col-span-2'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h4 className='text-sm leading-5 font-semibold tracking-wider text-black-400 uppercase'>
                  Analytics
                </h4>
                <ul className='mt-4'>
                  <li>
                    <a
                      href='#'
                      className='text-base leading-6 text-gray-500 hover:text-gray-900'
                    >
                      Charts
                    </a>
                  </li>
                  <li className='mt-4'>
                    <a
                      href='#'
                      className='text-base leading-6 text-gray-500 hover:text-gray-900'
                    >
                      Traffic
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h4 className='text-sm leading-5 font-semibold tracking-wider text-black-400 uppercase'>
                  Support
                </h4>
                <ul className='mt-4'>
                  {/* <li>
                    <a
                      href='#'
                      className='text-base leading-6 text-gray-500 hover:text-gray-900'
                    >
                      Pricing
                    </a>
                  </li> */}
                  <li className='mt-4'>
                    <a
                      href='https://possue-postgres.herokuapp.com/documentation/v1.0.0'
                      className='text-base leading-6 text-gray-500 hover:text-gray-900'
                    >
                      API Documentation
                    </a>
                  </li>
                  <li className='mt-4'>
                    <a
                      href='#'
                      className='text-base leading-6 text-gray-500 hover:text-gray-900'
                    >
                      Guides
                    </a>
                  </li>
                  <li className='mt-4'>
                    <Link href='/resources'>
                      <a className='text-base leading-6 text-gray-500 hover:text-gray-900'>
                        Resources
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h4 className='text-sm leading-5 font-semibold tracking-wider text-black-400 uppercase'>
                  Company
                </h4>
                <ul className='mt-4'>
                  <li>
                    <Link href='/about'>
                      <a className='text-base leading-6 text-gray-500 hover:text-gray-900'>
                        About
                      </a>
                    </Link>
                  </li>
                  <li className='mt-4'>
                    <a
                      href='#'
                      className='text-base leading-6 text-gray-500 hover:text-gray-900'
                    >
                      Blog
                    </a>
                  </li>
                  <li className='mt-4'>
                    <a
                      href='#'
                      className='text-base leading-6 text-gray-500 hover:text-gray-900'
                    >
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h4 className='text-sm leading-5 font-semibold tracking-wider text-black-400 uppercase'>
                  Legal
                </h4>
                <ul className='mt-4'>
                  <li>
                    <a
                      href='#'
                      className='text-base leading-6 text-gray-500 hover:text-gray-900'
                    >
                      Claim
                    </a>
                  </li>
                  <li className='mt-4'>
                    <a
                      href='#'
                      className='text-base leading-6 text-gray-500 hover:text-gray-900'
                    >
                      Privacy
                    </a>
                  </li>
                  <li className='mt-4'>
                    <a
                      href='#'
                      className='text-base leading-6 text-gray-500 hover:text-gray-900'
                    >
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex text-4xl justify-center font-semibold text-white bg-red-700 rounded-full hover:text-white hover:bg-red-400 py-10'>
            <a href='https://cdn.forms-content.sg-form.com/d3f81f1f-a2a6-11ea-b186-6a226adfa8c9'>
              Subscribe 🖊
            </a>

            {/* <h4 className='text-sm leading-5 font-semibold tracking-wider text-black-400 uppercase'>
              Subscribe to our newsletter weekly.
            </p> */}
            {/* <form className='mt-4 sm:flex sm:max-w-md'>
              <input
                aria-label='Email address'
                type='email'
                required
                className='appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline transition duration-150 ease-in-out'
                placeholder='Enter your email'
              />     </h4>
            <p className='mt-4 text-gray-500 text-base leading-6'>
              The latest news, articles, and resources, sent to your inbox

              <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0'>
                <button className='w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'>
                </button>
              </div>
            </form> */}
          </div>
        </div>
        <div className='mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between'>
          <div className='flex md:order-2'>
            <a
              href='https://www.facebook.com/possue'
              className='text-gray-400 hover:text-red-500'
            >
              <span className='sr-only'>Facebook</span>
              <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                <path
                  fillRule='evenodd'
                  d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                  clipRule='evenodd'
                />
              </svg>
            </a>
            <a
              href='https://www.twitter.com/possue'
              className='ml-6 text-gray-400 hover:text-red-500'
            >
              <span className='sr-only'>Twitter</span>
              <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
              </svg>
            </a>
          </div>
          <p className='mt-8 text-base leading-6 text-gray-400 md:mt-0 md:order-1'>
            &copy; 2020 Possue.com. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
