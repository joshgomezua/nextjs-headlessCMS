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
            The current problem of looking at past exams is two fold:{' '}
            Exams are <span className='font-bold'>
              1) outdated{' '}
            </span>{' '}
            or <span className='font-bold'>2) model answers are unrealistic.</span> <br />
            <br />
            Outdated in that students can find <a href="http://www.calbar.ca.gov/Admissions/Examinations/California-Bar-Examination/Past-Exams#esqasa" className="text-red-700 hover:underline">past exams on the State Bar of California website </a>
            but only in PDF form accompanied by two sample answers rather than a rubric.  Moreover,
            even though the sample answers are in a timed enviornment, an examinee may have included non-issues.
            This creates the problem of guessing what precise issues the bar examiners wanted, a frustrating and outdated exercise.
            <br /><br />
            Secondly, looking at model answers from traditional bar prep courses, they seem
            to be written by someone who had hours if not days to
            formulate a response resulting in an unrealistic answer.
            Comparing my timed answer had me feeling
            grossly inadequate, which fueled my anxiety and just made things worse.
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
