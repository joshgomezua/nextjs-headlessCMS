import Timer from 'react-compound-timer';

const TimerButton = () => {
  return (
    <div className='flex'>
      <Timer initialTime={3600000} direction='backward'>
        {({ start, pause, reset }) => (
          <>
            <div className='w-1/2 text-4xl'>
              <Timer.Minutes /> : <Timer.Seconds />
            </div>
            <div className='w-1/2 flex items-center'>
              <button
                className='bg-gray-500 rounded p-2 mx-2 hover:bg-red-700'
                onClick={start}
              >
                Start
              </button>
              <button
                className='bg-gray-500 rounded p-2 mx-2 hover:bg-red-700'
                onClick={pause}
              >
                Pause
              </button>
              <button
                className='bg-gray-500 rounded p-2 mx-2 hover:bg-red-700'
                onClick={reset}
              >
                Reset
              </button>
            </div>
          </>
        )}
      </Timer>
    </div>
  );
};

export default TimerButton;
