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
              body: `Possue.com is created by and maintained by a law school graduate who,
              after taking the February 2020 California Bar Exam, wanted to keep their skills sharp
              while continuing building projects using Javascript.  The first day of the exam, which consists of 5 essays and a performance test,
              was challenging to practice in a timed environment.  I began to think of better way to study
              other than sorting through PDFs and sample answers, I wanted essays to be sorted and easily accessible.`,
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
          <h2 className='font-bold mb-3 text-xl'>Why, what is the problem?</h2>
          <p className='mb-6'>
            The current way of looking at past exams is two fold:{' '}
            <span className='font-bold'>
              <br />
              1) outdated{' '}
            </span>{' '}
            or <span className='font-bold'>2) model answers are unrealistic.</span> <br />
            <br />
            Outdated in that students are able to find past bar exams
            on the State Bar of California website but in PDF form accompanied by two sample answers. Trying to
            decode and figure out what issues are being tested is a challenge.  Moreover,
            the sample answers are in a timed enviornment but an examinee may have thrown in more issues than were actually present.
            This creates the problem of guessing what the bar was looking for when all I want is the rubric.
            <br /><br />
            Unrealistic in that traditional bar prep courses offer model answers to past past exam
            questions, but in my experience the provided answers are written by someone who had hours if not days to
            formulate a response and therefore not a realistic answer.
            Comparing my timed answer had me feeling
            grossly inadequate, which fueled my anxiety in that achieving that
            type of answer is impossible.  Who needs that?
            <br /><br />
            I wanted a way to spot issues, write them down as if I were outlining, check my
            answers, and move on. I'm working hard to get Possue to that point.
            <br />
            <br />
            Steven Finley, JD <br />
            Western State College of Law <br />
            <a href="mailto:info@possue.com" className="font-bold italic">info@possue.com</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default About;
