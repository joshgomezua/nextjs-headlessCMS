import Layout from '../../components/Layout';
import Accordion from 'react-spring-accordion';

const WillsAndTrusts = () => {
  return (
    <>
      <Layout>
        <div className='flex font-bold justify-center bg-red-700 text-white rounded text-3xl'>
          Wills
        </div>
        <div>
          <Accordion.Wrapper>
            <Accordion.Item>
              <Accordion.Heading className='font-bold text-3xl'>
                Pretermitted and Unknown Children
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
                Holographic Wills
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
                Lapse and Anti-Lapse
              </Accordion.Heading>
              <Accordion.Child className='text-xl'>
                A lawyer owes each client a duty of loyalty and must act with
                the <b>client's best interest</b> in mind. A lawyer must not
                represent a client if the representation involves a conflict of
                interest. A conflict exists if:
                <br /> (1) the representation of one client will be{' '}
                <b>directly adverse</b> to another client; or <br />
                (2) there is a <b>signficant risk</b> that the representation
                will be <b>materially limited</b> by the lawyer's
                responsibilities to another client, a former client, a third
                person, or by the lawyer's own personal interests.
              </Accordion.Child>
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
                Apportioning Intestate Share Between Surviving Issue
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
                Formally Executed Wills
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
                Revocation by Physical Act
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
                Revocation by Subsequent Instrument
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
                Incorporation By Reference
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
                Undue Influence
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
                DRR
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
        <div className='flex font-bold justify-center bg-red-700 text-white rounded text-3xl'>
          Trusts
        </div>
        <div>
          <Accordion.Wrapper>
            <Accordion.Item>
              <Accordion.Heading className='font-bold text-3xl'>
                Elements of Creation
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
                Trustee's Fiduciary Duty of Care
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
                Modifcation & Termination
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
                Remedies for Breach of Trust
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
                Charitable Trusts & Doctrine of Cy Pres
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
                Trustee's Duty to Diversify Trust Assets
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
                Trustee's Duty to Act Impartially Towards Beneficiaries
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
                Prudent Investor Rule
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
                Trustee's Duty of Loyalty
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
                Types of Trusts (Discretionary, Spendthrift & Resulting)
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

export default WillsAndTrusts;
