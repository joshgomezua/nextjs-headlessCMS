import Logo from '../Logo';
import Link from '../Link/Link';

const Navbar = () => {
  return (
    <nav>
      <div className='container mx-auto px-6 py-2 flex justify-between items-center'>
        <a className='font-bold text-2xl lg:text-4xl' href='/'>
          <Logo />
        </a>
        {/* Burger Menu
        <div className='block lg:hidden'>
          <button className='flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none'>
            <svg
              className='fill-current h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div> */}
        <div className='lg:block'>
          <ul className='inline-flex '>
            <li className='px-1'>
              <Link href='/'>
              <a
                className='font-semibold block text-grey-500 hover:bg-red-700 hover:text-white rounded py-2 px-4'
              >
                Home
              </a>
              </Link>
            </li>
            {/* <li>
              <a
                className='text-center font-semibold block border border-white rounded hover:border-gray-200 text-grey-500 hover:bg-gray-200 py-2 px-4'
                href='/pricing'
              >
                Pricing
              </a>
            </li> */}
            <li className='px-1'>
            <Link href='/essays'>
              <a
                className='font-semibold block hover:bg-red-700 hover:text-white rounded py-2 px-4'
              >
                Essays
              </a>
              </Link>
            </li>
            <li className='px-1'>
            <Link href='/rules'>
              <a
                className='font-semibold block hover:bg-red-700 hover:text-white rounded py-2 px-4'
              >
                Rules
              </a>
              </Link>
            </li>
            <li className='px-1'>
            <Link href='/about'>
              <a
                className='font-semibold block hover:bg-red-700 hover:text-white rounded py-2 px-4'
              >
                About
              </a>
              </Link>
            </li>
            <li className='px-1'>
            <Link href='/contact'>
              <a
                className='font-semibold block hover:bg-red-700 hover:text-white rounded py-2 px-4'
              >
                Contact
              </a>
            </Link>
            </li>
            <li className='px-2'>
            <Link href='/register'>
              <a
                className='font-semibold block border border-red-700 rounded hover:text-white hover:bg-red-700 text-black  py-2 px-4'
              >
                Register
              </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
