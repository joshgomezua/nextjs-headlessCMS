import { useState } from 'react';

const AnswerKey = () => {
  const [showResults, setShowResults] = useState(false);

  const onClick = () => setShowResults(showResults === false ? true : false);

  const Results = () => <div id='results'>Placeholder</div>;

  return (
    <div className='text-3xl'>
      <span className='text-xl italic' type='submit' onClick={onClick}>
        Issues (Coming Soon)
      </span>
      {showResults ? <Results /> : null}
    </div>
  );
};

export default AnswerKey;

// return (
//   <div className='text-3xl'>
//     Answer Key <span className='text-xl italic'>(Coming Soon)</span>
//   </div>
// );
