import Logo from '../Logo';
import Link from '../Link/Link';

const Navbar = () => {
  return (
    <nav>
      <div className='container mx-auto px-6 py-2 flex justify-between items-center'>
        <a className='font-bold lg:text-2xl' href='/'>
          <Logo />
        </a>
        {/* Burger Menu */}
        <div className='lg:hidden block'>
          <ul className='px-1'>
            <Link href='/essays'>
              <a className='font-semibold block text-grey-500 hover:bg-red-700 hover:text-white rounded'>
                Essays
              </a>
            </Link>
          </ul>
        </div>
        <div className='hidden lg:block'>
          <ul className='inline-flex '>
            <li className='px-1'>
              <Link href='/'>
                <a className='font-semibold block text-grey-500 hover:bg-red-700 hover:text-white rounded py-2 px-4'>
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
                <a className='font-semibold block hover:bg-red-700 hover:text-white rounded py-2 px-4'>
                  Essays
                </a>
              </Link>
            </li>
            {/* <li className='px-1'>
              <Link href='/rules'>
                <a className='font-semibold block hover:bg-red-700 hover:text-white rounded py-2 px-4'>
                  Rules
                </a>
              </Link>
            </li> */}
            <li className='px-1'>
              <Link href='/about'>
                <a className='font-semibold block hover:bg-red-700 hover:text-white rounded py-2 px-4'>
                  About
                </a>
              </Link>
            </li>
            {/* <li className='px-1'>
              <Link href='/contact'>
                <a className='font-semibold block hover:bg-red-700 hover:text-white rounded py-2 px-4'>
                  Contact
                </a>
              </Link>
            </li> */}
            <li className='px-2'>
              <a
                className='font-semibold block border border-red-700 rounded hover:text-white hover:bg-red-700 text-black  py-2 px-4'
                href='https://cdn.forms-content.sg-form.com/d3f81f1f-a2a6-11ea-b186-6a226adfa8c9'
              >
                Subscribe
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
