import Layout from '../../components/Layout';
import Accordion from 'react-spring-accordion';

const CommunityProperty = () => {
  return (
    <>
      <Layout>
        <div className='flex font-bold justify-center bg-red-700 text-white rounded text-3xl'>
          Community Property
        </div>
        <div>
          <Accordion.Wrapper>
            <Accordion.Item>
              <Accordion.Heading className='font-bold text-3xl'>
                Opening Paragraph
              </Accordion.Heading>
              <Accordion.Child className='text-xl'>
                California is a community property state. California Family Code
                ("CFC") §760, defines community property as all property, real
                or personal, wherever situated, acquired by a married person
                during the marriage while domiciled in CA. A person is domiciled
                in CA if they currently live in CA with the intent to remain.
                Separate property is defined in CFC §770, as all property owned
                by a person prior to marriage acquired during the marriage by
                gift, bequest, devise, or descent, or acquired after legal
                separation. The community property presumption is rebuttable
                through tracing, transmutation, and title.
              </Accordion.Child>
            </Accordion.Item>
          </Accordion.Wrapper>
          <form className='bg-white shadow-md rounded'>
            <div>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:shadow-outline'
                type='textarea'
                placeholder='California is a community...'
              />
            </div>
          </form>
        </div>
        <div>
          <Accordion.Wrapper>
            <Accordion.Item>
              <Accordion.Heading className='font-bold text-3xl'>
                Title In One Spouses Name
              </Accordion.Heading>
              <Accordion.Child className='text-xl'>Rule</Accordion.Child>
            </Accordion.Item>
          </Accordion.Wrapper>
          <form className='bg-white shadow-md rounded mb-4'>
            <div>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:shadow-outline'
                type='textarea'
                placeholder='...'
              />
            </div>
          </form>
        </div>
        <div>
          <Accordion.Wrapper>
            <Accordion.Item>
              <Accordion.Heading className='font-bold text-3xl'>
                Debts Incurred By One Spouse <b>During</b> Marriage
              </Accordion.Heading>
              <Accordion.Child className='text-xl'>Rule</Accordion.Child>
            </Accordion.Item>
          </Accordion.Wrapper>
          <form className='bg-white shadow-md rounded mb-4'>
            <div>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:shadow-outline'
                type='textarea'
                placeholder='...'
              />
            </div>
          </form>
        </div>
        <div>
          <Accordion.Wrapper>
            <Accordion.Item>
              <Accordion.Heading className='font-bold text-3xl'>
                Quasi-community Property
              </Accordion.Heading>
              <Accordion.Child className='text-xl'>Rule</Accordion.Child>
            </Accordion.Item>
          </Accordion.Wrapper>
          <form className='bg-white shadow-md rounded mb-4'>
            <div>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:shadow-outline'
                type='textarea'
                placeholder='...'
              />
            </div>
          </form>
        </div>
        <div>
          <Accordion.Wrapper>
            <Accordion.Item>
              <Accordion.Heading className='font-bold text-3xl'>
                Determine the End of the Marriage
              </Accordion.Heading>
              <Accordion.Child className='text-xl'>Rule</Accordion.Child>
            </Accordion.Item>
          </Accordion.Wrapper>
          <form className='bg-white shadow-md rounded mb-4'>
            <div>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:shadow-outline'
                type='textarea'
                placeholder='...'
              />
            </div>
          </form>
        </div>
        <div>
          <Accordion.Wrapper>
            <Accordion.Item>
              <Accordion.Heading className='font-bold text-3xl'>
                When spouses hold title in "joint form"
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
                Transmutations
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
                Debts incurred <b>before</b> marriage
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
                Putative Spouse
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
                Tort Liability and Order of Satisfaction
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

export default CommunityProperty;
