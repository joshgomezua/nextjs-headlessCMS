import Layout from '../../components/Layout';
import Accordion from 'react-spring-accordion';

const BusinessAssociations = () => {
  return (
    <>
      <Layout>
        <div className='flex font-bold justify-center bg-red-700 text-white rounded text-3xl'>
          Business Associations
        </div>
        <div>
          <Accordion.Wrapper>
            <Accordion.Item>
              <Accordion.Heading className='font-bold text-3xl'>
                Duty of Loyalty regarding COI transactions
              </Accordion.Heading>
              <Accordion.Child className='text-xl'>Rule</Accordion.Child>
            </Accordion.Item>
          </Accordion.Wrapper>
          <form className='bg-white shadow-md rounded'>
            <div>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:shadow-outline'
                type='textarea'
                placeholder='A lawyer owes...'
              />
            </div>
          </form>
        </div>
        <div>
          <Accordion.Wrapper>
            <Accordion.Item>
              <Accordion.Heading className='font-bold text-3xl'>
                Duty of Care
              </Accordion.Heading>
              <Accordion.Child className='text-xl'>Rule</Accordion.Child>
            </Accordion.Item>
          </Accordion.Wrapper>
          <form className='bg-white shadow-md rounded mb-4'>
            <div>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:shadow-outline'
                type='textarea'
                placeholder='Attorneys owe their clients...'
              />
            </div>
          </form>
        </div>
        <div>
          <Accordion.Wrapper>
            <Accordion.Item>
              <Accordion.Heading className='font-bold text-3xl'>
                Business Judgement Rule
              </Accordion.Heading>
              <Accordion.Child className='text-xl'>Rule</Accordion.Child>
            </Accordion.Item>
          </Accordion.Wrapper>
          <form className='bg-white shadow-md rounded mb-4'>
            <div>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:shadow-outline'
                type='textarea'
                placeholder='A lawyer owes...'
              />
            </div>
          </form>
        </div>
        <div>
          <Accordion.Wrapper>
            <Accordion.Item>
              <Accordion.Heading className='font-bold text-3xl'>
                Usurping a Corporate Opportunity
              </Accordion.Heading>
              <Accordion.Child className='text-xl'>Rule</Accordion.Child>
            </Accordion.Item>
          </Accordion.Wrapper>
          <form className='bg-white shadow-md rounded mb-4'>
            <div>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:shadow-outline'
                type='textarea'
                placeholder='A lawyer owes...'
              />
            </div>
          </form>
        </div>
        <div>
          <Accordion.Wrapper>
            <Accordion.Item>
              <Accordion.Heading className='font-bold text-3xl'>
                Piercing The Corporate Veil
              </Accordion.Heading>
              <Accordion.Child className='text-xl'>Rule</Accordion.Child>
            </Accordion.Item>
          </Accordion.Wrapper>
          <form className='bg-white shadow-md rounded mb-4'>
            <div>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:shadow-outline'
                type='textarea'
                placeholder='A lawyer owes...'
              />
            </div>
          </form>
        </div>
        <div>
          <Accordion.Wrapper>
            <Accordion.Item>
              <Accordion.Heading className='font-bold text-3xl'>
                Adoption of a Pre-incorporation Contract
              </Accordion.Heading>
              <Accordion.Child className='text-xl'>Rule</Accordion.Child>
            </Accordion.Item>
          </Accordion.Wrapper>
          <form className='bg-white shadow-md rounded mb-4'>
            <div>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:shadow-outline'
                type='textarea'
                placeholder='A lawyer owes...'
              />
            </div>
          </form>
        </div>
        <div>
          <Accordion.Wrapper>
            <Accordion.Item>
              <Accordion.Heading className='font-bold text-3xl'>
                Defective Formation
              </Accordion.Heading>
              <Accordion.Child className='text-xl'>Rule</Accordion.Child>
            </Accordion.Item>
          </Accordion.Wrapper>
          <form className='bg-white shadow-md rounded mb-4'>
            <div>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:shadow-outline'
                type='textarea'
                placeholder='A lawyer owes...'
              />
            </div>
          </form>
        </div>
        <div>
          <Accordion.Wrapper>
            <Accordion.Item>
              <Accordion.Heading className='font-bold text-3xl'>
                Promoter Liability
              </Accordion.Heading>
              <Accordion.Child className='text-xl'>Rule</Accordion.Child>
            </Accordion.Item>
          </Accordion.Wrapper>
          <form className='bg-white shadow-md rounded mb-4'>
            <div>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:shadow-outline'
                type='textarea'
                placeholder='A lawyer owes...'
              />
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default BusinessAssociations;
