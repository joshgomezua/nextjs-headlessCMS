import Link from 'next/link';
import Layout from '../components/Layout';

const apiUrl = 'http://localhost:1337';
const fetch = require('node-fetch');
// const apiUrl = process.env.API_URL || 'http://localhost:1337';

const essayPage = ({ subjects }) => {
  console.log(subjects);
  return (
    <>
      <Layout>
        {/*Subjects Header */}
        <div className='flex font-bold text-xl justify-center'>
          Past California Bar Exams
        </div>
        {/*Subjects */}
        <div className='flex flex-wrap mb-4 rounded justify-center'>
          {subjects
            .sort((a, b) => a.id - b.id)
            .map((subject) => (
              <div className='max-w-sm  shadow-md w-1/2' key={subject.id}>
                <div className='px-6 py-4 hover:bg-gray-100'>
                  <div className='font-bold text-xl mb-2'>
                    {subject.title} {subject.essays.length}{' '}
                  </div>
                  <p className='text-gray-700 text-base'>
                    <Link href='/subjects/[id]' as={`/subjects/${subject.id}`}>
                      <a>
                        <span className='inline-block bg-gray-200 hover:bg-red-700 hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                          See More Exams
                        </span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </Layout>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${apiUrl}/subjects/`);
  const data = await res.json();
  return {
    props: {
      subjects: data,
    },
  };
}

export default essayPage;
