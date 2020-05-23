import Layout from '../../components/Layout';
import MarkdownView from 'react-showdown';
import TimerButton from '../../components/Timer/TimerButton';
import Accordion from 'react-spring-accordion';
import CKEditorWrapper from '../../components/CKEditor/CKEditor';
const apiUrl = process.env.API_URL || 'http://localhost:1337';
// const apiUrl = 'http://localhost:1337';

const Essays = ({ essays }) => {
  const { question, content } = essays;
  return (
    <Layout>
      <p className='font-mono font-bold text-xl text-gray-800 text-center'>
        {question}
      </p>
      <br />
      <MarkdownView
        className='font-serif text-xl'
        markdown={content}
        options={{ simpleLineBreaks: true }}
      />
      <br />
      <CKEditorWrapper />
      <div className='flex text-center my-4'>
        <div className='w-1/2 bg-gray-700 text-white font-bold py-2 px-4 mr-4 rounded'>
          <TimerButton />
        </div>
        <button className='w-1/2 bg-red-700 hover:bg-green-700 text-white text-3xl font-bold py-2 px-4 rounded'>
          Save
        </button>
      </div>
      <Accordion.Wrapper>
        <Accordion.Item>
          <Accordion.Heading className='text-3xl italic shadow border rounded w-full py-2 px-3 text-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:shadow-outline'>
            Answer Key
          </Accordion.Heading>
          <Accordion.Child className='text-xl '>Issues</Accordion.Child>
        </Accordion.Item>
      </Accordion.Wrapper>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`${apiUrl}/essays/${id}`);
  const data = await res.json();
  return {
    props: {
      essays: data,
    },
  };
}

export default Essays;
