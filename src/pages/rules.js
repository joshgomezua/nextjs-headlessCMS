import Link from 'next/link';
import Layout from '../components/Layout';

const Rules = () => {
  return (
    <Layout>
      <div className='flex font-bold justify-center bg-red-700 text-white rounded text-3xl mb-4'>
        Memorize The Most Tested Rules
      </div>
      <div className='flex flex-wrap mb-4 rounded justify-center cursor-pointer'>
        {[
          {
            subject: `Agency and Partnership`,
            url: `agency-and-partnership`,
          },
          {
            subject: `Business Associations`,
            url: `business-associations`,
          },
          {
            subject: `Civil Procedure`,
            url: `civil-procedure`,
          },
          {
            subject: `Community Property`,
            url: `community-property`,
          },
          {
            subject: `Constitutional Law`,
            url: `constitutional-law`,
          },
          {
            subject: `Contracts`,
            url: `contracts`,
          },
          {
            subject: `Criminal Law`,
            url: `criminal-law`,
          },
          {
            subject: `Criminal Procedure`,
            url: `criminal-procedure`,
          },
          {
            subject: `Evidence`,
            url: `evidence`,
          },
          {
            subject: `Professional Responsibility`,
            url: `professional-responsibility`,
          },
          {
            subject: `Real Property`,
            url: `real-property`,
          },
          {
            subject: `Remedies`,
            url: `remedies`,
          },
          {
            subject: `Torts`,
            url: `torts`,
          },
          {
            subject: `Wills and Trusts`,
            url: `wills-and-trusts`,
          },
        ].map((essay) => (
          <div className='max-w-sm shadow-md w-1/2' key={essay.subject}>
            <Link href='/rules/url' as={`/rules/${essay.url}`}>
              <div className='px-4 py-4 hover:bg-red-700 hover:text-white rounded-md'>
                <div className='font-bold text-2xl'>{essay.subject}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Rules;
