import Logo from '../Logo';

const Testimonials = () => {
  return (
    <div className='py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24'>
      <div className='relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
        <svg
          className='absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2'
          width='404'
          height='404'
          fill='none'
          viewBox='0 0 404 404'
        >
          <defs>
            <pattern
              id='svg-pattern-squares-1'
              x='0'
              y='0'
              width='20'
              height='20'
              patternUnits='userSpaceOnUse'
            >
              <rect
                x='0'
                y='0'
                width='4'
                height='4'
                className='text-gray-400'
                fill='currentColor'
              />
            </pattern>
          </defs>
          <rect width='404' height='404' fill='url(#svg-pattern-squares-1)' />
        </svg>

        <div className='relative'>
          <svg className='mx-auto h-22' fill='none' viewBox='0 0 180 40'>
            <Logo />
          </svg>
          <blockquote className='mt-8'>
            <div className='max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900'>
              <p>
                &ldquo;Essays are the area where I needed the most work. Possue
                is great because I'm forced to write before looking at the
                answers. This will help you prepare for day one.&rdquo;
              </p>
            </div>
            <footer className='mt-8'>
              <div className='md:flex md:items-center md:justify-center'>
                <div className='md:flex-shrink-0'>
                  <img
                    className='mx-auto h-10 w-10 rounded-full'
                    src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </div>
                <div className='mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center'>
                  <div className='text-base leading-6 font-medium text-gray-900'>
                    Judith Black
                  </div>

                  <svg
                    className='hidden md:block mx-1 h-5 w-5 text-red-600'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M11 0h3L9 20H6l5-20z' />
                  </svg>

                  <div className='text-base leading-6 font-medium text-gray-500'>
                    February 2020 Bar Taker
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
