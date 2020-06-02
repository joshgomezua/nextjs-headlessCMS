import Feature1 from '../../images/undraw_exams_g4ow.svg';
import Feature2 from '../../images/undraw_observations_mejb.svg';
import Feature3 from '../../images/undraw_Outer_space_drqu.svg';

const Feature = () => {
  return (
    <section className='container mx-auto px-6 p-10'>
      <h2 className='text-4xl font-bold text-center text-gray-800 mb-2'>
        HOW DOES IT WORK?
      </h2>
      <div
        className='h-1 mx-auto w-64 opacity-50 my-0 rounded-t'
        style={{
          background: 'linear-gradient(90deg, #F5002B 0%, #303030 100%)',
        }}
      ></div>

      <div className='flex items-center flex-wrap mb-20'>
        <div className='w-full md:w-1/2'>
          <h4 className='text-3xl text-gray-800 font-bold mb-3'>
            Actual Past Exam Questions 📖
          </h4>
          <p className='text-gray-600 mb-8 text-xl'>
            Practice spotting issues on bar exams from the{' '}
            <span className='font-bold text-red-700'>last 20 years.</span>
            <br />
            I've built the essay API with publically available exams.
          </p>
        </div>
        <div className='w-full md:w-1/2'>
          <img src={Feature1} alt='Past Exams' />
        </div>
      </div>

      <div className='flex items-center flex-wrap mb-20'>
        <div className='w-full md:w-1/2'>
          <img src={Feature2} alt='Second Images' />
        </div>
        <div className='w-full md:w-1/2 pl-10'>
          <h4 className='text-3xl text-gray-800 font-bold mb-3'>
            Choose Your Subjects 📚
          </h4>
          <p className='text-gray-600 text-xl mb-8'>
            Rather than sorting through a PDF trying to find the subjects you
            need the most practice in, we've gone through the trouble of
            breaking up and sorting every question by subject.
          </p>

          <p className='text-red-700 text-xl font-bold mb-8'>
            Concentrate on the ones you need work on to make sure you're ready!
          </p>
        </div>
      </div>

      <div className='flex items-center flex-wrap mb-20'>
        <div className='w-full md:w-1/2'>
          <h4 className='text-3xl text-gray-800 font-bold mb-3'>
            Rapid Fire 💥
          </h4>
          <p className='text-gray-600 text-xl mb-8'>
            Learn how to spot issues in a rapid fire way. By focusing on the art
            of issue spotting, you can train your brain to become great at the
            most important skill on bar exam and walk into Day 1 with
            confidence!
          </p>
          <p className='text-red-700 text-xl font-bold mb-8'>
            Practice, practice, practice.
          </p>
        </div>
        <div className='w-full md:w-1/2'>
          <img src={Feature3} alt='3rd Image' />
        </div>
      </div>
    </section>
  );
};

export default Feature;
