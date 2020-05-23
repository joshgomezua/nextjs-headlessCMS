import Link from 'next/link';
import Layout from '../components/Layout';

// const apiUrl = 'http://localhost:1337';
const apiUrl = process.env.API_URL || 'http://localhost:1337';

const essayPage = ({ subjects }) => {
  console.log(subjects);
  return (
    <Layout>
      {/*Subjects Header */}
      <div className='flex font-bold justify-center bg-red-700 text-white rounded text-3xl mb-4'>
        📝 Past California Exams
      </div>
      {/*Subjects */}
      <div className='flex flex-wrap mb-4 rounded justify-center'>
        {subjects
          .sort((a, b) => a.id - b.id)
          .map((subject) => (
            <div className='max-w-sm shadow-md w-1/2' key={subject.id}>
              <Link href='/subjects/[id]' as={`/subjects/${subject.id}`}>
                <div className='px-4 py-4 hover:bg-red-700 hover:text-white rounded-md'>
                  <div className='font-bold text-2xl'>
                    {subject.title}
                    <span className='font-thin text-xl text-gray-500 hover:text-grey-200'>
                      {' '}
                      {subject.essays.length}{' '}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${apiUrl}/subjects/`);
  const subjects = await res.json();
  return {
    props: {
      subjects,
    },
  };
}

export default essayPage;
