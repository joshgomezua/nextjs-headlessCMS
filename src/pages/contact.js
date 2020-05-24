import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <div className='bg-white'>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8'>
            <div>
              <h2 className='text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9'>
                Help Center
              </h2>
              <div className='mt-3'>
                <p className='text-lg leading-7 text-gray-500'>
                  Having trouble with the site? Feel free to give us a call or
                  drop us a line! We're here to make your experience a better
                  one.
                </p>
              </div>
              <div className='mt-12'>
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <svg
                      className='h-6 w-6 text-red-400'
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                    >
                      <path d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                    </svg>
                  </div>
                  <div className='ml-3 text-base leading-6 text-gray-500'>
                    <p>+1 (310) 666 9055</p>
                    <p className='mt-1'>Mon-Fri 8am to 5pm PST</p>
                  </div>
                </div>

                <div className='mt-6 flex'>
                  <div className='flex-shrink-0'>
                    <svg
                      className='h-6 w-6 text-red-400'
                      stroke='currentColor'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <div className='ml-3 text-base leading-6 text-gray-500'>
                    <a href="mailto:info@possue.com">info@possue.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-12 sm:mt-16 md:mt-0'>
              <h2 className='text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9'>
                General Questions
              </h2>
              <div className='mt-3'>
                <p className='text-lg leading-7 text-gray-500'>
                  Have suggestions, tips, or pointers? We'd be happy to take any ideas you have and consider
                  building them into the site.
                </p>
              </div>
              <div className='mt-12'>
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <svg
                      className='h-6 w-6 text-red-400'
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                    >
                      <path d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                    </svg>
                  </div>
                  <div className='ml-3 text-base leading-6 text-gray-500'>
                    <p>+1 (310) 666 9055</p>
                    <p className='mt-1'>Mon-Fri 8am to 5pm PST</p>
                  </div>
                </div>
                <div className='mt-6 flex'>
                  <div className='flex-shrink-0'>
                    <svg
                      className='h-6 w-6 text-red-400'
                      stroke='currentColor'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <div className='ml-3 text-base leading-6 text-gray-500'>
                    <a href="mailto:info@possue.com">info@possue.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
