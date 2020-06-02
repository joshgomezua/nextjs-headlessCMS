import Accordion from 'react-spring-accordion';

const AnswerKey = ({ answers }) => {
  console.log({ answers });
  return (
    <>
      <Accordion.Wrapper>
        <Accordion.Item>
          <Accordion.Heading className='text-3xl italic shadow border rounded w-full mb-2 py-2 px-3 text-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:shadow-outline'>
            Answer Key (coming soon)
          </Accordion.Heading>
          <Accordion.Child className='flex justify-center rounded text-xl'>
            <a
              className='bg-red-700 text-white px-4 py-4'
              href='http://www.calbar.ca.gov/Admissions/Examinations/California-Bar-Examination/Past-Exams#esqasa'
            >
              Sample Answers Link
            </a>
          </Accordion.Child>
        </Accordion.Item>
      </Accordion.Wrapper>
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`${apiUrl}/answers/${id}`);
  const data = await res.json();
  console.log({ id, params });
  return {
    props: {
      answers: data,
    },
  };
}

export default AnswerKey;
