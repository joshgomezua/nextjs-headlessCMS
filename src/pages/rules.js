import Link from '../components/Link/Link';
import Layout from '../components/Layout';

const Rules = () => {
  return (
    <Layout>
      <div className='flex font-bold justify-center bg-red-700 text-white rounded text-3xl mb-4'>
        Memorize The Most Tested Rules
      </div>
      <div className='flex flex-wrap mb-4 rounded justify-center cursor-pointer'>
        <div className='max-w-sm shadow-md w-1/2'>
            <Link href='/rules/agency-and-partnership'>
              <div className='px-4 py-4 hover:bg-red-700 hover:text-white rounded-md shadow-md'>
                <div className='font-bold text-2xl'>Agency and Partnership</div>
              </div>
            </Link>
            <Link href='/rules/business-associations'>
              <div className='px-4 py-4 hover:bg-red-700 hover:text-white rounded-md shadow-md'>
                <div className='font-bold text-2xl'>Business Associations</div>
              </div>
            </Link>
            <Link href='/rules/civil-procedure'>
              <div className='px-4 py-4 hover:bg-red-700 hover:text-white shadow-md rounded-md'>
                <div className='font-bold text-2xl'>Civil Procedure</div>
              </div>
            </Link>
            <Link href='/rules/community-property'>
              <div className='px-4 py-4 hover:bg-red-700 hover:text-white shadow-md rounded-md'>
                <div className='font-bold text-2xl'>Community Property</div>
              </div>
            </Link>
            <Link href='/rules/constitutional-law'>
              <div className='px-4 py-4 hover:bg-red-700 hover:text-white shadow-md rounded-md'>
                <div className='font-bold text-2xl'>Constitutional Law</div>
              </div>
            </Link>
            <Link href='/rules/contracts'>
              <div className='px-4 py-4 hover:bg-red-700 hover:text-white shadow-md rounded-md'>
                <div className='font-bold text-2xl'>Contracts</div>
              </div>
            </Link>
            <Link href='/rules/criminal-law'>
              <div className='px-4 py-4 hover:bg-red-700 hover:text-white shadow-md rounded-md'>
                <div className='font-bold text-2xl'>Criminal Law</div>
              </div>
            </Link>
        </div>
        <div className='max-w-sm shadow-md w-1/2'>
            <Link href='/rules/criminal-procedure'>
              <div className='px-4 py-4 hover:bg-red-700 hover:text-white shadow-md rounded-md'>
                <div className='font-bold text-2xl'>Criminal Procedure</div>
              </div>
            </Link>
            <Link href='/rules/evidence'>
              <div className='px-4 py-4 hover:bg-red-700 hover:text-white shadow-md rounded-md'>
                <div className='font-bold text-2xl'>Evidence</div>
              </div>
            </Link>
            <Link href='/rules/professional-responsibility'>
              <div className='px-4 py-4 hover:bg-red-700 hover:text-white shadow-md rounded-md'>
                <div className='font-bold text-2xl'>Professional Responsibility</div>
              </div>
            </Link>
            <Link href='/rules/real-property'>
              <div className='px-4 py-4 hover:bg-red-700 hover:text-white shadow-md rounded-md'>
                <div className='font-bold text-2xl'>Real Property</div>
              </div>
            </Link>
            <Link href='/rules/remedies'>
              <div className='px-4 py-4 hover:bg-red-700 hover:text-white shadow-md rounded-md'>
                <div className='font-bold text-2xl'>Remedies</div>
              </div>
            </Link>
            <Link href='/rules/torts'>
              <div className='px-4 py-4 hover:bg-red-700 hover:text-white shadow-md rounded-md'>
                <div className='font-bold text-2xl'>Torts</div>
              </div>
            </Link>
            <Link href='/rules/wills-and-trusts'>
              <div className='px-4 py-4 hover:bg-red-700 hover:text-white shadow-md rounded-md'>
                <div className='font-bold text-2xl'>Wills and Trusts</div>
              </div>
            </Link>
        </div>
      </div>
    </Layout>
  )
  }

export default Rules;
