import Layout from '../components/Layout';
import Feature1 from '../images/undraw_Graduation_ktn0.svg';

function About() {
  return (
    <Layout>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2'>
          {[
            {
              heading: `What is Possue?`,
              body: `Possue.com is being created and maintained by a law school graduate who,
              after taking the February 2020 California Bar exam, wanted to keep their skills sharp
              but still continue to build things using Javascript.  Day 1, the essay portion of the exam,
              was the hardest to find and practice in a timed environment.  I began to think there had to be a better way
              than finding old PDF's and sortying through them, it would be nice to have a convenient way to sort through
              and practice old exams`,
            },
          ].map((section, index) => (
            <div key='index'>
              <h2 className='font-bold mb-3 text-xl'>{section.heading}</h2>
              <p className='mb-6'>{section.body}</p>
            </div>
          ))}
          <img src={Feature1} alt='Graduation Cap' />
        </div>

        <div className='md:ml-6 md:w-1/2'>
          <h2 className='font-bold mb-3 text-xl'>What is the problem?</h2>
          <p className='mb-6'>
            The current way of looking at past exams is that it's{' '}
            <span className='font-bold'>
              <br />
              1) clunky{' '}
            </span>{' '}
            or <span className='font-bold'>2) expensive.</span> <br />
            <br />
            Past bar exams are available on the State Bar of California website
            but they are in PDF form with only 2 sample answers for your to
            decode and try and figure out what issues they were looking for. If
            you sign up for a traditional bar prep course, you will see past
            exam questions and the bar prep companies model answer, but their
            model answers are written by someone who had hours if not days to
            formulate a response and is not representative of a realistic way to
            spot issues, write them down as if I were outlining, check my
            answers, and move on. Since there wasn't anything like that, I
            thought it would be a good idea to do it myself. Thank you for
            checking out my work and feel free to give feedback on what would
            make it a better experience.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default About;
