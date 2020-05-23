import Layout from '../components/Layout';

const Rules = () => {
  return (
    <Layout>
      <div className='flex font-bold justify-center bg-red-700 text-white rounded text-3xl mb-4'>
        Free Resources To Help you Study
      </div>
      <div>
        <a
          href='https://www.youtube.com/channel/UCwHlQocBSCkopoT159_7tKA'
          className='text-2xl font-bold'
        >
          Studicata{' '}
          <span className='font-normal'>
            - Great YouTube series on breaking down essays, lots of subjects.
          </span>
        </a>
      </div>
      <div>
        <a
          href='https://www.youtube.com/channel/UCxRNTEShkRE9Jk0ZT8tpwtw'
          className='text-2xl font-bold'
        >
          One Timers{' '}
          <span className='font-normal'>
            - A few videos but the ones that do exist are amazing.
          </span>
        </a>
      </div>
      <div className='flex font-bold justify-center bg-red-700 text-white rounded text-3xl mt-4 mb-4'>
        Paid Books I Like
      </div>
      <div>
        <a
          href='https://www.amazon.com/Essay-Exam-Writing-California-NITA-ebook/dp/B082L33YBW/ref=sr_1_2?dchild=1&keywords=tina+schindler&qid=1590233377&sr=8-2'
          className='text-2xl font-bold'
        >
          Essay Writing for the CA Bar Exam{' '}
          <span className='font-normal'>
            - Full disclosure I had Prof Schindler 1st year.
          </span>
        </a>
      </div>
      <div>
        <a
          href='https://www.amazon.com/California-Performance-Test-Workbook-Preparation/dp/1543813518/ref=sr_1_1?dchild=1&keywords=tina+schindler&qid=1590233642&sr=8-1'
          className='text-2xl font-bold'
        >
          CA Performance Test Workbook{' '}
          <span className='font-normal'>
            - Just bought this, will give full review when done.
          </span>
        </a>
      </div>
      <div className='flex mt-10 justify-center'>
        <div>
          <h2 className='text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9'>
            Do you have others?
          </h2>
        </div>
      </div>
      <div className=' flex mt-3 justify-center'>
        <p className='text-lg leading-7 text-gray-500'>
          Email me here:<a href='mailto:info@possue.com'> info@possue.com</a>
        </p>
      </div>
    </Layout>
  );
};

export default Rules;
